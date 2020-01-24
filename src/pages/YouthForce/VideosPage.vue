<template>
  <div class="space-medium">
    <div class="container">
      <div class="row">
        <!-- section-title -->

        <div class="col-sm-12">
          <h1 class="text-left">Videos</h1>
          <hr class="mt-0 mb-5" />
        </div>
        <!-- /.section-title -->
      </div>
      <div class="d-flex justify-content-center align-items-center" v-if="!isLoaded">
        <div class="loader"></div>
      </div>
      <div class="row" v-if="isLoaded">
        <div class="col-md-4" v-for="(vid,index) in data" :key="index">
          <iframe
            width="360"
            height="215"
            :src="vid.acf.url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      isLoaded: false
    };
  },
  mounted() {
    this.$API.getVideos().then(data => {
      console.log(data.data);
      this.data = data.data;
      this.isLoaded = true;
    });
    this.$nextTick(() => {});
  }
};
</script>

<style scoped>
body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  letter-spacing: 0px;
  font-size: 16px;
  color: #7d7f82;
  font-weight: 400;
  line-height: 32px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #26282c;
  margin: 0px 0px 12px 0px;
  font-weight: 300;
  line-height: 1;
}
img {
  width: 100%;
}
h1 {
  font-size: 36px;
}
h2 {
  font-size: 26px;
  line-height: 38px;
}
h3 {
  font-size: 22px;
  line-height: 32px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 16px;
  line-height: 27px;
}
h6 {
  font-size: 12px;
}
p {
  margin: 0 0 20px;
  line-height: 1.7;
}
p:last-child {
  margin: 0px;
}
ul,
ol {
}
a {
  text-decoration: none;
  color: #7d7f82;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
a:focus,
a:hover {
  text-decoration: none;
  color: #fe5b10;
}

.video-testimonial-block {
  position: relative;
  width: auto;
  height: 206px;
  overflow: hidden;
  margin-bottom: 30px;
}
.video-testimonial-block .video-thumbnail {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-size: cover;
  top: 0;
  left: 0;
}
.video-testimonial-block .video {
}
.video-testimonial-block .video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0px;
}
.video-testimonial-block .video-play {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  margin-top: -18px;
  text-decoration: none;
}
.video-testimonial-block .video-play::before {
  content: "\f144";
  font: normal normal normal 14px/1;
  font-family: "Font Awesome\ 5 Free";
  font-weight: 900;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 50px;
  color: #b3b5bc;
}
.video-testimonial-block .video-play:hover::before {
  color: #172651;
}
.mb10 {
  margin-bottom: 10px;
}
.section-title {
  margin-bottom: 40px;
}
hr{
  background-color: #FAA72F;
}
</style>
