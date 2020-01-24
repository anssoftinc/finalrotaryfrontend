<template>
  <div>
    <div class="container" style>
      <h1 class="text-left">Rotary Year Photos</h1>
      <hr class="my-4" />

        <button
        class="btn btn-primary-blue"
        @click="selectedPage=0"
        :class="selectedPage==0?'active':''"
      >2013-14</button>

      <button
        class="btn btn-primary-blue"
        @click="selectedPage=1"
        :class="selectedPage==1?'active':''"
      >2014-15</button>
      <button
        class="btn btn-primary-blue"
        @click="selectedPage=2"
        :class="selectedPage==2?'active':''"
      >2015-16</button>
      <button
        class="btn btn-primary-blue"
        @click="selectedPage=3"
        :class="selectedPage==3?'active':''"
      >2017-18</button>
      <button
        class="btn btn-primary-blue"
        @click="selectedPage=4"
        :class="selectedPage==4?'active':''"
      >2018-19</button>
      <button
        class="btn btn-primary-blue"
        @click="selectedPage=5"
        :class="selectedPage==5?'active':''"
      >2019-20</button>
    </div>
    <thirteen v-if="selectedPage ==0" />
    <fourteen v-if="selectedPage ==1" />
    <fifteen v-if="selectedPage ==2" />
    <seventeen v-if="selectedPage ==3" />
    <eighteen v-if="selectedPage ==4" />
    <ninteen v-if="selectedPage ==5" />
  </div>
</template>
     
<script>
import thirteen from "./thirteen.vue"
import fourteen from "./fourteen.vue";
import fifteen from "./fifteen.vue";
import seventeen from "./seventeen.vue";
import eighteen from "./eighteen.vue";
import ninteen from "./ninteen.vue";
export default {
  data() {
    return {
      selectedPage: 0,
      data:[]
    };
  },
  components: {
    thirteen,
    fourteen,
    fifteen,
    seventeen,
    eighteen,
    ninteen
  },
  mounted(){
    
  }
};
</script>


<style scoped>
button {
  margin-right: 15px;
}
.btn-primary-blue {
  border-color:#025198;
  color: #025198;
}

.active {
  /* background: var(--royal); */
  text-decoration: none;
  color: #fff;
  /* background: var(--primary-blue); */
  background: #025198;
}
</style>