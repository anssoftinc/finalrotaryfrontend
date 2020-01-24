<template>
  <div class="designated mt-4">
    <div class="container">
      <!-- <h1 class="text-left">Current Month</h1> -->

      <!-- <div class="d-flex justify-content-center align-items-center" v-if="!isLoaded">
        <div class="loader"></div>
      </div>
      <div class="calender-contentz" v-if="isLoaded">
        <div class="row">
          <div class="col-md-4">
            <div class="image">
              <img :src="this.data[currentMonth-6].acf.image.url" alt />
            </div>
          </div>
          <div class="col-md-8">
            <div class="content ml-3">
              <h3 v-html="this.data[currentMonth-6].acf.title"></h3>
              <p v-html="this.data[currentMonth-6].acf.description"></p>
            </div>
          </div>
        </div>
      </div>-->

      <h1 class="text-left mt-5">All Designated Months</h1>
      <hr class="mb-4" />

      <p
        class="description"
      >Rotary has desinated months to help clubs Develop meeting agendas, projects, or public image campaigns based on these special occasions.</p>
      <p
        class="description"
      >The Concept is to give all the clubs of the District a Ready Reckoner of the types of Service Projects, which could be indulged, during the Year, and help plan the activities of the year, mostly based on the Rotary Calendar i.e. Rotary Designated Months.</p>
      <div class="calender">
        <div class="calender-content" v-for="(ev,index) in filterByOrder" :key="index">
          <div class="row">
            <div class="col-md-4">
              <div class="image">
                <img :src="ev.acf.image.url" alt />
              </div>
            </div>
            <div class="col-md-8">
              <div class="content ml-3">
                <h3 v-html="ev.title.rendered"></h3>
                <p v-html="ev.acf.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      data: [],
      currentMonth: new Date().getMonth()
    };
  },
  mounted() {
    this.$API.getMonths().then(data => {
      this.data = data.data;
      this.isLoaded = true;
    });
  },
  computed: {
    filterByOrder() {
      return this.data.sort((a, b) => {
        return a.acf.display_order - b.acf.display_order;
      });
    }
  }
};
</script>



<style scoped>
.image img {
  width: 350px;
}

.calender-content {
  margin-top: 4em;
}
hr{
  background-color: #FAA72F;
}
</style>
