<template>
  <header class>
    <div class="top-header">
      <div class="container py-1">
        <div class="row justify-content-end align-items-center">
          <a href="https://www.facebook.com/RotaryClubOfKathmanduMidtown/" target="_blank">
            <i class="fab fa-facebook top-icons" aria-hidden="true"></i>
            <span class="icon-text">Connect With Us</span>
          </a>
          <a href="http://rotarydistrict3292.org/" target="_blank">
            <i class="fas fa-globe top-icons" aria-hidden="true"></i>
            <span class="icon-text">District Website</span>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <nav id="sticky-nav">
        <div class="container py-3">
          <div class="row">
            <div class="logo col-3">
              <router-link to="/">
                <img src="/images/logo_top.png" alt="logo" class="logo" />
              </router-link>
            </div>
            <div
              class="col-6 text-center d-flex align-items-center justify-content-center connect-with-us"
            >
              <a
                href="https://www.facebook.com/RotaryClubOfKathmanduMidtown/"
                target="_blank"
                class="mr-3"
              >
                <i class="fab fa-facebook mr-2 fa-2x" aria-hidden="true"></i>
                <span style="font-size: 20px;">Connect With Us</span>
              </a>
              <a href="http://rotarydistrict3292.org/" target="_blank">
                <i class="fas fa-globe fa-2x mr-2" aria-hidden="true"></i>
                <span style="font-size: 20px;">District Website</span>
              </a>
            </div>

            <div class="col-3 text-right">
              <router-link to="/">
                <img src="/images/rotary-connects.png" alt="logo" class="logo" />
              </router-link>
            </div>
          </div>
        </div>

        <div id="sticky-menu" class="nav" @mouseover="dropOnEvent" @mouseleave="dropOffEvent">
          <div class="container-fluid d-flex justify-content-center shadow-sm">
            <ul class="nav-item">
              <li class="nav-header" @click="dropOffEvent">
                <router-link to="/">Home</router-link>
              </li>
            </ul>
            <div v-for="item in navItems" :key="item.id" v-if="!item.hide" class="nav-item">
              <ul>
                <li class="nav-header">
                  <a style="text-decoration:none;color:#5E717D;cursor:context-menu">{{item.name}}</a>
                </li>
                <div v-if="dropStatus">
                  <li
                    v-for="child in item.children"
                    :key="child.id"
                    class="nav-child child"
                    @click="dropOffEvent"
                  >
                    <!-- <router-link :to="`${item.path}/${child.path}`">{{child.name}}</router-link> -->
                    <router-link :to="{ name: child.name, hash: child.hash }">{{child.name}}</router-link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div class="mobile-nav py-2 shadow">
        <div class="container d-flex align-items-center mobile-header">
          <i class="fas fa-bars bars mr-3" @click="sidebarToggle"></i>
          <div class="d-flex justify-content-between" style="width:100%">
            <router-link to="/">
              <img src="./../../../public/images/logo_top.png" alt="logo" class="logo" />
            </router-link>
            <router-link to="/">
              <img src="./../../../public/images/rotary-connects.png" alt="logo" class="logo" />
            </router-link>
          </div>
        </div>
        <transition name="slide-fade">
          <div v-if="sidebarStatus" class="mobile-content mt-2">
            <div class="container">
              <ul class="ml-3" style="cursor:pointer">
                <li
                  v-for="(item,index) in navItems"
                  class="mt-4"
                  v-if="!item.hide"
                  @click="isActive(index)"
                  :key="item.id"
                >
                  {{item.name}}
                  <i class="fas fa-sort-down float-right" v-if="item.children"></i>
                  <!-- if child routes are available -->
                  <transition name="fade">
                    <ul v-if="item.active">
                      <li
                        v-for="child in item.children"
                        class="ml-3 mt-1 child"
                        :key="child.id"
                        @click="sidebarStatus=false"
                      >
                        <router-link :to="{ name: child.name, hash: child.hash }">
                          <!-- <router-link :to="`${item.path}/${child.path}`"> -->
                          <i class="fas fa-angle-double-right"></i>
                          {{child.name}}
                        </router-link>
                      </li>
                    </ul>
                  </transition>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      dropStatus: false,
      navItems: [],
      sidebarStatus: false
    };
  },

  methods: {
    dropOnEvent() {
      this.dropStatus = true;
    },
    setFalse() {
      this.sidebarStatus = false;
    },
    dropOffEvent() {
      this.dropStatus = false;
    },
    navCat(index) {
      this.navItems[index].isActive = true;
      this.navItems.forEach(items => {
        if (items != this.navItems[index]) {
          items.isActive = false;
        }
      });
    },
    sidebarToggle() {
      this.sidebarStatus = !this.sidebarStatus;
    },
    isActive(index) {
      this.navItems[index].active = !this.navItems[index].active;
      this.navItems.forEach((element, i) => {
        if (index != i) {
          element.active = false;
        }
      });
    }
  },
  mounted() {
    var vm = this;
    window.addEventListener("scroll", function(e) {
      var scrollPos = window.scrollY;
      var winHeight = window.innerHeight;
      var navElement = document.getElementById("sticky-nav");
      var navElement = document.getElementById("sticky-menu");
      if (scrollPos > navElement.clientHeight) {
        navElement.classList.add("fixed-top");
      } else {
        navElement.classList.remove("fixed-top");
      }
    });
  },
  created() {
    this.navItems = this.$router.options.routes;
    this.navItems.forEach(element => {
      Vue.set(element, "active", false);
    });
  },
  computed: {
    filteredNav() {
      return this.isActive ? true : false;
    }
  }
};
</script>

<style scoped>
.top-header {
  background: var(--azure);
}
.justify-content-end a{
  color:#025198;
}
.icon-text {
  /* color: #fff; */
  color:#025198;
  font-size: 14px;
  margin-right: 10px;
  margin-left: 10px;
}
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-150px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.1s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-15px);
  opacity: 0;
}

.menu-animation-enter-active {
  transition: all 0.3s;
}
.menu-animation-leave-active {
  transition: all 0.3s ease;
}
.menu-animation-enter, .menu-animation-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-150px);
  opacity: 0;
}

.logo {
  height: 60px;
  width: auto;
}
.bars {
  font-size: 30px;
  color: #444;
  cursor: pointer;
}
.title h4 {
  color: #5e717d;
  font-size: 1.3rem;
  font-family: sans-serif;
}
.title p {
  color: #5e717d;
  line-height: 15px;
  font-size: 1rem;
}
.service-title {
  line-height: 8px;
}

.nav {
  border-top: 1px solid rgba(0, 0, 0, 0.075);
  background-color: #f8f9fa;
  background: linear-gradient(180deg, #e8ebee 1px, #fff 0, #fff 2px, #f8f9fa 0);
  /* position: absolute; */
  width: 100%;
  z-index: 100;
  display: block;
  min-height: auto;
}
ul {
  list-style: none;
  margin: 0px;
}
ul li {
  text-transform: capitalize;
}
.nav-item {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 15%;
}
.nav-header {
  font-weight: bold;
}
.nav-header a {
  color: #5e717d;
  text-decoration: none;
}
.nav-child {
  font-size: 0.9rem;
  color: #5e717d;
  margin-top: 15px;
}
.nav-child a {
  color: #5e717d;
  text-decoration: none;
}
a:hover {
  color: #019fcb;
}
.nav li {
  display: table;
}
.child :hover {
  /* border-bottom: 1px solid #019fcb; */
}

.custom-dropdown {
  /* position: absolute; */
  height: 300px;
  width: 100%;
  background: #fff;
  /* top: 180px; */
  z-index: 99999999;
}

.right-border {
  border-right: 1px solid #ccc;
  min-height: 200px;
}

.custom-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.custom-dropdown ul li {
  margin-top: 5px;
  display: table;
}

.custom-dropdown ul li a {
  display: block;
  text-decoration: none;
}

.mobile-nav {
  display: none;
}

.mobile-content {
  overflow: scroll;
  background: #f8f9fa;
  height: 100vh;
  width: 60vw;
  position: absolute;
  z-index: 99;
}
.mobile-content ul {
  padding: 0;
}
.mobile-header {
  top: 0;
  position: sticky;
}

.connect-with-us a {
  display: flex;
  color: var(--royal);
  text-decoration: none;
}

.connect-with-us:hover {
  text-decoration: none;
}

.top-header {
  display: none;
  overflow: hidden;
}

@media only screen and (max-width: 1004px) {
  .top-header {
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  nav {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
  .logo {
    height: 50px;
  }
}
</style>
