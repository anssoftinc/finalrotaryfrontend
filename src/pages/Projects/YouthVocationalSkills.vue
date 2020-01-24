<template>
  <div class="containe-r" id="top">
    <div class="custom-card">
      <div class="row">
        <div class="col-md-4 text-center">
          <img
            src="/images/our-projects/Vocational Jan 2020.jpg"
            class="img-fluid"
            alt
          />
        </div>
        <div class="col-md-8 p-1">
          <h4>Vocational Training</h4>

          <p class="text-justify">
            The Rotary Club of KTM Mid-town has been focusing on skills
            development and vocational training for youth from various walks of
            life – few colleges, Rotaracts and entrepreneurs. The objective is
            to help develop their skills and equip them with various skill sets
            that they can apply in the practical field. This initiative started
            last year. To continue this training, we have a team of qualified
            and experienced resource persons from various professional
            backgrounds both from local and international fields. The workshop
            and training sessions will focus on critical topics pertinent to
            youth. These topics were selected after several meetings with the
            colleges and other institutions working for youth welfare. We are
            creating a committee to take this initiative forward. We will be
            collaborating with the following institutions: Silver Mountain
            School of Hotel Management, Xavier Academy, Daya Foundation, and
            Kathmandu Engineering College. Majority of the resource persons are
            from our own club, the Rotary District and other Rotaries. Some of
            the institutions that have and will be providing the training and
            resources are –Nepal Ambulance Services, Nepal Entrepreneurs HUB,
            Toastmasters Club.
          </p>
        <router-link to="/our-projects/looking-for-funding">Looking For Funding</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.logo {
  width: 150px;
}
.how-section1 {
  /* margin-top: -15%;
  padding: 10%; */
}
.how-section1 h4 {
  /* color: #019fcb;
  font-weight: bold;
  font-size: 20px; */
}
.how-section1 .subheading {
  color: #3931af;
  font-size: 20px;
}
.how-section1 .row {
  margin-top: 6%;
}

.custom-card {
  margin-top: 20px;
  padding: 15px 15px;
  background: #fff;
}

.custom-card-text {
  /* padding: 10px 20px; */
}

.list {
  font-weight: bold;
  font-size: 14px;
}
a{
    color: #025198;
}
a:hover{
    text-decoration-color: #FAA72F
}
</style>
