<template>
  <div>
    <div class="container" style>
      <h1 class="text-left">Rotary Year Photos</h1>
      <hr class="my-4" />

      <button
        v-for="cat in filteredList"
        :key="cat.id"
        class="btn btn-primary-blue button-rotary-photos"
        @click="changeSelection(cat.id)"
        :class="selectedId == cat.id ? 'active' : ''"
      >{{ cat.name }}</button>
    </div>
    <div class="text-center" style="margin-bottom:0; background-color: #FBFCFF;">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div align="center">
              <div class="row my-2">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-4 col-xs-6 thumb filter retratos"
                    v-for="(image,index) in arr"
                    :key="image.url"
                  >
                    <div class="img-container d-flex justify-content-center align-items-center">
                      <a
                        class
                        href="#"
                        data-image-id
                        data-toggle="modal"
                        data-title
                        :data-image="image.url"
                        :data-target="`#image-gallery`"
                        @click="imageClicked(index)"
                      >
                        <img v-lazy="image.url" alt="Retratos" class="img-fluid" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  class="modal fade"
                  id="image-gallery"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg" v-if="arr.length>0">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title" id="image-gallery-title"></h4>
                        <button type="button" class="close" data-dismiss="modal">
                          <span aria-hidden="true">×</span>
                          <span class="sr-only">Close</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <img
                          id="image-gallery-image"
                          class="img-responsive col-md-12"
                          :src="arr[currentIndex].url"
                        />
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary float-left"
                          id="show-previous-image"
                          @click="prev()"
                        >
                          <i class="fa fa-arrow-left"></i>
                        </button>

                        <button
                          type="button"
                          id="show-next-image"
                          class="btn btn-secondary float-right"
                          @click="next()"
                        >
                          <i class="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      selectedId: 1,
      categories: [],

      currentIndex: 0,
      arr: [],
      sorting: -1
    };
  },
  methods: {
    imageClicked(index) {
      this.currentIndex = index;
    },
    next() {
      if (this.currentIndex <= this.arr.length) {
        this.currentIndex = this.currentIndex + 1;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    changeSelection(id) {
      this.selectedId = id;
      axios
        .get(
          "https://rotaryclubkathmandumid-town.org/admin/wp-json/wp/v2/rotary_year_photos?year_category=" +
            id
        )
        .then(data => {
          if (data.data.length == 0) {
            this.arr = [];
          } else {
            this.arr = data.data[0].acf.rotary_year_photos;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {},
  computed: {
    filteredList() {
      return this.categories
        .slice(0)
        .sort((a, b) => (a.name < b.name ? -this.sorting : this.sorting));
    }
  },
  mounted() {
    let vm = this;
    axios
      .get(
        "https://rotaryclubkathmandumid-town.org/admin/wp-json/wp/v2/year_category"
      )
      .then(data => {
        this.categories = data.data;
        this.changeSelection(this.categories[this.categories.length - 1].id);
      })
      .catch(error => {
        console.log(error);
      });

    setTimeout(function() {
      vm.$nextTick(() => {
        Vue.addScript(
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        );
        let modalId = $("#image-gallery");

        loadGallery(true, "a.thumbnail");

        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
          $("#show-previous-image, #show-next-image").show();
          if (counter_max === counter_current) {
            $("#show-next-image").hide();
          } else if (counter_current === 1) {
            $("#show-previous-image").hide();
          }
        }

        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */

        function loadGallery(setIDs, setClickAttr) {
          let current_image,
            selector,
            counter = 0;

          $("#show-next-image, #show-previous-image").click(function() {
            if ($(vm).attr("id") === "show-previous-image") {
              current_image--;
            } else {
              current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
          });

          function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data("image-id");
            $("#image-gallery-title").text($sel.data("title"));
            $("#image-gallery-image").attr("src", $sel.data("image"));
            disableButtons(counter, $sel.data("image-id"));
          }

          if (setIDs == true) {
            $("[data-image-id]").each(function() {
              counter++;
              $(vm).attr("data-image-id", counter);
            });
          }
          $(setClickAttr).on("click", function() {
            updateGallery($(vm));
          });
        }

        // build key actions
        $(document).keydown(function(e) {
          switch (e.which) {
            case 37: // left
              if (
                (modalId.data("bs.modal") || {})._isShown &&
                $("#show-previous-image").is(":visible")
              ) {
                $("#show-previous-image").click();
              }
              break;

            case 39: // right
              if (
                (modalId.data("bs.modal") || {})._isShown &&
                $("#show-next-image").is(":visible")
              ) {
                $("#show-next-image").click();
              }
              break;

            default:
              return; // exit vm handler for other keys
          }
          e.preventDefault(); // prevent the default action (scroll / move caret)
        });

        //Filter Button

        $(".filter-button").click(function() {
          var value = $(vm).attr("data-filter");

          if (value == "todo") {
            //$('.filter').removeClass('hidden');
            $(".filter").show("1000");
          } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter")
              .not("." + value)
              .hide("3000");
            $(".filter")
              .filter("." + value)
              .show("3000");
          }
        });
      });
    }, 500);
  }
};
</script>

<style scoped>
button {
  margin-right: 15px;
}
.btn-primary-blue {
  border-color: #025198;
  color: #025198;
}
.btn-primary-blue:hover {
  background-color: #025198;
  color: #fff;
}
.active {
  /* background: var(--royal); */
  text-decoration: none;
  color: #fff;
  /* background: var(--primary-blue); */
  background: #025198;
}

.btn:focus,
.btn:active,
button:focus,
button:active {
  outline: none !important;
  box-shadow: none !important;
}

#image-gallery .modal-footer {
  display: block;
}

.thumb {
  margin-top: 15px;
  margin-bottom: 15px;
}
.img-container {
  width: 262px;
  height: 168px;
  /* object-fit: cover;
  overflow: hidden; */
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 0.5px;
}

.img-container img {
  width: 262px;
  height: 168px;
  /* padding: 5px; */
  object-fit: cover;
}
hr {
  background-color: #faa72f;
}
.button-rotary-photos {
  margin-bottom: 10px;
}
</style>
