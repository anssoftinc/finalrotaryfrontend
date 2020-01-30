<template>
  <div class="container-blog">
    <div class="container py-5">
      <!-- my-5 -->
      <section class="blog-me" id="blog">
        <div class="section-title">
          <h1>News & Updates</h1>
          <router-link to="/news-updates/all" class="read-more-view">View All</router-link>
        </div>
        <hr />
        <br />
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="(item,index) in filteredItems" :key="index">
            <!-- Single Blog -->
            <div class="single-blog">
              <div class="blog-img">
                <img :src="item.acf.image.url" alt />
              </div>
              <div class="blog-content">
                <div class="blog-title">
                  <div class="title">
                    <h2 v-html="item.title.rendered"></h2>
                  </div>
                  <div class="meta">
                    <ul>
                      <!-- <li>{{item.acf.date}}</li> -->
                    </ul>
                  </div>
                </div>
                <div class="summary">
                  <p v-html="item.acf.description" class="summary-text"></p>
                </div>
                <div class="read-more mt-1">
                  <i class="fas fa-external-link-alt mr-2"></i>
                  <router-link :to="'news-updates/'+item.id">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

  computed: {
    filteredItems: function() {
      return this.news.slice(0, 3);
    }
  },

  mounted() {
    this.$API.getNews().then(data => {
      this.news = data.data;
    });
  }
};
</script>


<style scoped>
.container-blog {
  /* background-color:#FAA72F;  */
}
/* .container-blog-me{
  background-color: #FAA72F; 
} */
.pb-50 {
  padding-bottom: 50px;
}
.pt-50 {
  padding-top: 50px;
}
.mb-100 {
  margin-bottom: 100px;
}
.card:hover {
  border: 1px solid #ddd;
}
a {
  text-decoration: none;
  color: #333;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.section-title {
  position: relative;
}
.section-title p {
  font-size: 1em;
  margin-bottom: 5px;
  font-weight: 400;
}
.section-title h4 {
  font-size: 1.2em;
  font-weight: 300;
  text-transform: capitalize;
  position: relative;
  /* padding-bottom: 20px; */
  display: inline-block;
}
.section-title h1 {
  color: #025198;
}
/* .section-title h4::before {
  position: absolute;
  content: "";
  width: 80px;
  height: 2px;
  background-color: #d8d8d8;
  bottom: 0;
  left: 50%;
  margin-left: -40px;
}
.section-title h4::after {
  position: absolute;
  content: "";
  width: 50px;
  height: 2px;
  background-color: #019fcb;
  left: 0;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
} */
.blog-img {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.blog-img img {
  /* width: 100%; */
  height: 100%;
}
.post-category a {
  display: inline-block;
  background-color: #019fcb;
  color: #fff;
  font-size: 15px;
  padding: 5px 20px;
}
.single-blog:hover img {
  opacity: 0.85;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
}
.post-category {
  position: absolute;
  left: 0;
  bottom: 0;
}
.blog-content {
  padding: 30px 5px;
}
.single-blog {
  /* border: 1px solid #eee; */
}
.blog-title h4 {
  font-size: 1.3em;
  font-weight: 500;
  margin-bottom: 5px;
}
.meta ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.meta {
  margin-bottom: 10px;
  opacity: 0.85;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
}
.blog-content a.box_btn {
  display: inline-block;
  border: 1px solid #000;
  padding: 5px 15px;
  color: #fff;
  text-transform: capitalize;
  margin-top: 10px;
}
a.box_btn::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #cc5b00;
  left: -100%;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: -1;
}
a.box_btn {
  overflow: hidden;
  z-index: 2;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  text-decoration: none;
}
a.box_btn:hover::before {
  left: 0;
  z-index: -1;
}

.title {
  height: 80px;
  overflow: hidden;
}

.read-more {
  color: #025198;
  display: table;
  padding-top: 9px;
  height: 42px;
  padding-bottom: 7px;
}
.read-more:hover {
  border-bottom: 1px solid #faa72f;
}
.read-more-view {
  /* border-bottom: 1px solid #fff; */
  color: var(--rotary-gold);
  float: right;
  margin-top: -25px;
  /* line-height: -152px; */
  font-size: 14px;
}
.read-more-view:hover {
  color: #025198;
}
.read-more a {
  color: var(--primary-red);
  text-decoration: none;
}

.summary {
  height: 70px;
  overflow: hidden;
}

.summary-text p img {
  display: none !important;
}
.read-more,
.read-more a {
  color: #faa72f;
}
hr {
  background-color: #faa72f;
  /* height: 0.5px; */
}
</style>
