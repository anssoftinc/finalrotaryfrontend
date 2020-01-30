<template>
  <div class="blog mt-5 pb-5" v-if="!loading">
    <div class="container">
      <h1 class="center">{{data.acf.title}}</h1>
      <img :src="data.acf.image.url" alt />
      <p class="date">{{data.acf.date}}</p>
      <p class="center text-justify" v-html="data.acf.description"></p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: {},
      loading: true
    };
  },
  mounted() {
    this.loading = true;
    this.current = this.$route.params.id;
    this.$API.getNewsById(this.current).then(data => {
      this.data = data.data;
      this.loading = false;
    });
  }
};
</script>


<style scoped>
.container {
  width: 60%;
  margin: 0 auto;
}
.blog img {
  height: 300px;
}

.date {
  margin-top: 10px;
  font-size: 14px;
  color: var(--primary-blue);
}
</style>