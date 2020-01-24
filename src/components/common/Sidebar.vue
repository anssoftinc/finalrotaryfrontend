<template>
  <div>
    <div class="d-flex mt-3">
      <!-- <input type="text" class="form-control mr-1" placeholder="Search" />
      <button class="btn btn-primary">Go</button>-->
    </div>

    <UpcomingEvents class="mt-3" />
    <FacebookWidget class="mt-3" />
  </div>
</template>

<script>
import UpcomingEvents from "../homepage/UpcomingEvents";
import FacebookWidget from "../common/FacebookWidget";

export default {
  components: {
    UpcomingEvents,
    FacebookWidget
  }
};
</script>

<style>
</style>


