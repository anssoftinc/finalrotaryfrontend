<template>
  <div>
    <div class="container" style>
      <h1 class="text-left">Rotary Years</h1>
      <hr class="my-4" />
      <button
        class="btn  mr-2"
        @click="selectedPage=0"
        :class="selectedPage==0?'active':''"
      >Annual Brochures</button>
      <button
        class="btn  mr-2"
        @click="selectedPage=1"
        :class="selectedPage==1?'active':''"
      >Annual Weekly Newsletters</button>
      <button
        class="btn button-award"
        @click="selectedPage=2"
        :class="selectedPage==2?'active':''"
      >Awards</button>
    </div>
    <AnnualBrochures v-if="selectedPage==0" />
    <WeeklyNewsletters v-if="selectedPage==1" />
    <DistrictAwards v-if="selectedPage==2" />
  </div>
</template>



<script>
import AnnualBrochures from "./AnnualBrochures";
import DistrictAwards from "./DistrictAwardsPage";
import WeeklyNewsletters from "./WeeklyNewsletters";
export default {
  data() {
    return {
      selectedPage: 0,
      path13: "/images/Rotary Year 2013-14.pdf",
      path14: "/images/Rotary Year 2014-15.pdf",
      // Rotary Year 2014-15 25th Charter Night Celebration.pdf
      path15: "/images/Rotary Year 2015-16.pdf",
      path16: "/images/Rotary Year 2016-17.pdf",
      path17: "/images/Rotary Year 2017-18.pdf",
      path18: "/images/Rotary_year_18.pdf",
      path19: "/images/Rotary Year 2019-20.pdf"
    };
  },
  components: {
    AnnualBrochures,
    DistrictAwards,
    WeeklyNewsletters
  }
};
</script>
 

<style scoped>
a {
  margin-bottom: 40px;
  max-width: 150px;
}
a:hover {
  text-decoration: none;
  color: #fff;
}
img {
  height: 200px;
  margin-bottom: 20px;
  /* min-width: 170px; */
}
button {
  border-color: #025198;
  color: #025198;
}
button:hover{
  background-color: #025198;
  color: #fff;
}
.active {
  /* background: var(--royal); */
  text-decoration: none;
  color: #fff;
  background: #025198;
}
hr{
  background-color: #FAA72F;
}
.button-award-hr{
  display: none;
}
@media only screen and (max-width: 768px) {
button {
  display: block;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
}
.button-award {
  margin-bottom: 5px;
}
}
</style>