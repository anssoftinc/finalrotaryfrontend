<template>
  <div class="text-center" style="margin-bottom:0; background-color: #FBFCFF;">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div align="center">
            <div class="row my-2">
              <div class="row">
                <div
                  class="col-lg-3 col-md-4 col-xs-6 thumb filter retratos"
                  v-for="image in arr"
                  :key="image.url"
                >
                  <a
                    class="thumbnail"
                    href="#"
                    data-image-id
                    data-toggle="modal"
                    data-title
                    :data-image="'/images/photos/2017-18/'+image.url"
                    :data-target="`#${image.type}`"
                    style="object-fit:cover;"
                  >
                    <img
                      class="img-thumbnail"
                      v-lazy="'/images/photos/2017-18/'+image.url"
                      alt="Retratos"
                    />
                  </a>
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
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="image-gallery-title"></h4>
                      <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">Close</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img id="image-gallery-image" class="img-responsive col-md-12" src />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary float-left"
                        id="show-previous-image"
                      >
                        <i class="fa fa-arrow-left"></i>
                      </button>

                      <button
                        type="button"
                        id="show-next-image"
                        class="btn btn-secondary float-right"
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
</template>


<script>
import Vue from "vue";
export default {
  data() {
    return {
      arr: [],
      gallery: [
        {
          type: "image-gallery",
          url: "2014-15-008.jpg"
        }
      ]
    };
  },
  methods: {
    getlength(number) {
      return number.toString().length;
    }
  },

  async mounted() {
    const vm = this;
    for (let i = 1; i <= 56; i++) {
      if (vm.getlength(i) == 1) {
        this.arr.push({
          url: "2017-18-" + "0" + i + ".jpg",
          type: "image-gallery"
        });
      } else if (vm.getlength(i) == 2) {
        this.arr.push({
          url: "2017-18-" + i + ".jpg",
          type: "image-gallery"
        });
      } else {
        this.arr.push({ url: "2017-18" + i + ".jpg", type: "image-gallery" });
      }
    }
    this.$nextTick(() => {
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
          if ($(this).attr("id") === "show-previous-image") {
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
            $(this).attr("data-image-id", counter);
          });
        }
        $(setClickAttr).on("click", function() {
          updateGallery($(this));
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
            return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
      });

      //Filter Button

      $(".filter-button").click(function() {
        var value = $(this).attr("data-filter");

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
  }
};
</script>

<style scoped>
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
.img-thumbnail {
  width: 262px;
  height: 168px;
  object-fit: cover;
}
</style>
