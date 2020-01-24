<template>
  <div id="app">
    <NavHeader />
    <router-view style="min-height:100vh" />
    <MainFooter />
    <span class="float" @click="scrollToTop">
      <i class="fas fa-arrow-up my-float"></i>
    </span>
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
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #025198;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  /* box-shadow: 2px 2px 3px #999; */
  z-index: 99999;
  cursor: pointer;
}

.float:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}
span i {
  color: #FAA72F
}
.my-float {
  margin-top: 22px;
}
</style>
