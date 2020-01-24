<template>
  <div class="card">
    <div class="card-header">
      <h1>
        <i class="far fa-newspaper mr-2"></i>News & Updates
      </h1>
      <hr class="my-2" style="box-shadow:2px 1px 1px #080;" />
    </div>
    <div class="card-body">
      <div class="row mb-3">
        <div class="col-md-5">
          <img src="http://rehabindiafoundation.org/sites/default/files/ngo.jpg" class="img-fluid" />
        </div>
        <div class="col-md-7">
          <span class="news-title">Announcing the 2018 Wofford Award Winner-Kul Chandra Gautam</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxXLreF4Ao_GHvOnlY-o8mT8sw1HGZuLGeFcknR-wWKy9VBOk"
            class="img-fluid"
          />
        </div>
        <div class="col-md-7">
          <span class="news-title">Announcing the 2018 Wofford Award Winner-Kul Chandra Gautam</span>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-5">
          <img src="https://i.ytimg.com/vi/IS5iko_6Cck/maxresdefault.jpg" class="img-fluid" />
        </div>
        <div class="col-md-7">
          <span class="news-title">Announcing the 2018 Wofford Award Winner-Kul Chandra Gautam</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: []
    };
  },
  mounted() {
    this.$API.getNews().then(data => {
      this.news = data.data;
    });
  }
};
</script>

<style scoped>
.card {
  background:#FAA72F;
}
.news-title {
  font-size: 14px;
}
.row {
  border-bottom: 1px solid #ccc;
}
</style>


