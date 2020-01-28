<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div
      class="d-flex justify-content-center align-items-center"
      style="min-height:80vh"
      v-if="!isLoaded"
    >
      <div class="loader"></div>
    </div>
    <div class="carousel-inner" v-if="isLoaded">
      <div
        class="carousel-item"
        v-for="(image,index) in images"
        :key="index"
        :class="{active:index==0}"
      >
        <img class="d-block w-100 img-fluid header" :src="image.acf.image.url" alt="First slide" />

        <!-- <div class="carousel-caption d-none d-md-block">
          <h1>Rotary Club Midtown</h1>
          <p>Hello</p>
        </div>-->
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      images: []
    };
  },
  methods: {
    addScript() {
      $(".carousel").carousel({
        interval: 4000,
        pause: false
      });
    }
  },
  mounted() {
    this.$API.getSlider().then(data => {
      this.images = data.data;

      this.isLoaded = true;
      this.addScript();
    });
  }
};
</script>

<style scoped>
.header {
  position: relative;
  /* height: 86vh; */
  /* min-height: 25rem; */
  height: auto;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}
</style>


