<template>
  <b-jumbotron :header="title" :lead="leadText" fluid="false"></b-jumbotron>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {};
  },
  props: ["title", "leadText"]
};
</script>

<style scoped>
.jumbotron {
  background-image: url("../../static/img/banner_aboutus.jpg");
  background-size: cover;
  background-origin: initial;
  background-repeat: no-repeat;

  color: #fff;
  padding: 5rem 0px;
  margin-bottom: 0px;
}
.jumbotron h1 {
  font-weight: bold;
  font-size: 2em;
  z-index: 9999;
}
.jumbotron .lead {
  padding-top: 1rem;
  text-align: justify;
}
</style>
