<template>
  <div class="pt-5">
    <router-view />
  </div>
</template>

<script>
import NavHeader from "@/components/common/Header";
import MainFooter from "@/components/common/Footer";
export default {
  components: {
    NavHeader,
    MainFooter
  }
};
</script>


<style>
#app {
  font-family: "Open Sans", sans-serif;
}
a {
  color: #019fcb;
  text-decoration: none;
}
</style>
