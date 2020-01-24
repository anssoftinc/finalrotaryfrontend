<template>
  <div id="app">
    <NavHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import NavHeader from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import MainFooter from "@/components/common/Footer";
export default {
  components: {
    NavHeader,
    Sidebar,
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
