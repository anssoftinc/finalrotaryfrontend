<template>
  <div id="top" class="main">
    <Slider />
    <UpcommingEvents />
    <MessageFromChairman />

    <RecentProjects />

    <Blog2 />
  </div>
</template>

<script>
import RecentProjects from "../components/homepage/RecentProjects";
import MessageFromChairman from "../components/homepage/MessageFromChairman";
import Blog2 from "../components/homepage/Blog";
import Slider from "../components/homepage/Slider";
import UpcommingEvents from "./../components/homepage/UpcomingEvents";

export default {
  components: {
    RecentProjects,
    MessageFromChairman,
    Slider,
    Blog2,
    UpcommingEvents
  }
};
</script>

<style scoped>
</style>


