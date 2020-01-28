<template>
  <div style="background:#f4f4f4 pb-3">
    <div class="container pt-4" id="top">
      <h1 class="text-left">Community Projects</h1>
      <hr class="my-4" />

      <div class="custom-card">
        <div class="row">
          <div class="col-md-4 ">
            <img src="/images/our-projects/gift-of-sight.jpg" class="img-fluid" alt />
          </div>

          <div class="col-md-8">
            <h4 class="p-1">Gift of Sight Eye Camp</h4>
            <p class="text-justify p-3">
              Gift of Sight Eye Camp is an ongoing project conducted every year with the help of the Rotary Club of Singapore Garden City, Singapore in collaboration with the Tilganga Institute of Ophthalmology in Hetauda. This project annually brings a few hundred villagers from remote areas to the eye hospital for cataract surgery and eye care. To date, thousands of poor people have received the ‘gift of sight’ thanks to this generous donation.
              <br />
              <b>See Previous Years</b> <br>
              <br />
              <a class="gift-of-sight"
                href="/images/our-projects/Gift of Sight 2014.pdf"
                taget="_blank"
              >Gift Of Sight 2014</a>
              &nbsp;
              <a class="gift-of-sight"
                href="/images/our-projects/Gift of Sight 2015.pdf"
                taget="_blank"
              >Gift Of Sight 2015</a>
              &nbsp;
              <a class="gift-of-sight"
                href="/images/our-projects/Gift of Sight 2016.pdf"
                taget="_blank"
              >Gift Of Sight 2016</a>
            </p>
          </div>
        </div>
      </div>


      <div class="custom-card">
        <div class="row align-items-center">
          <div class="col-md-12">
            <!-- <h4 class="p-1">Spouses’ Project – Mata Tirtha Old Age Home</h4> -->
            <div class="row p-0">
              <div class="col-md-4">
                <img src="/images/our-projects/Mata Tirtha-1.jpg" class="img-fluid" />
                <img src="/images/our-projects/Martha Tirtha-2.jpg" class="img-fluid" />
              </div>
              <div class="col-md-8">
                 <h4 class="p-1">Spouses’ Project – Mata Tirtha Old Age Home</h4>
                   <p class="text-justify p-3">
              Our spouses’ team is eager to make a difference through this latest project. The Mata Tirtha Old Age Home is a grass roots initiative that has been operating for a few years – they rescue abandoned older women and give then long-term food and shelter. They operate on a very meagre budget, we hope to make a difference by helping them to become more sustainable and by bringing some positive and much-needed changes.reness and an on-going campaign to distribute much-needed first-aid and prevention information.
              <br />This year our Club members, in collaboration with spouses, have taken on to help the Mata Tirtha Old Age Home. One of our members has recently provided the help of 11 housekeeping students to help clean the home and also teach the caretaker how to properly utilize the cleaning material. Another member has offered to provide a free heath camp for these seniors through the Business and Professional Women of Nepal in collaboration with Daya Foundation. One member has provided drapery and yet another has generously offered to help with the construction of much-needed toilets. We look forward to seeing that these elderly ladies enjoy the end of life with some dignity and a little bit of convenience.
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- YouthVocationalSkills -->
        <YouthVocationalSkills />
      
      <!-- Digital library -->
      <DigitalLibrary />
    </div>
  </div>
</template>


<script>
import DigitalLibrary from "./DigitalLibrary";

import YouthVocationalSkills from "./YouthVocationalSkills";

export default {
  components: {
    DigitalLibrary,
    YouthVocationalSkills
  },
  data() {
    return {
      
    };
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
.row .col-md-4 img {
height: 211px;
    /* width: 100%; */
    margin-bottom: 12px;
}
.gift-of-sight{
  padding: 7px;
  border-color:darkblue;
  border: 0.5px solid;
  border-radius: 5px;
  color:darkblue;
  margin-right: 8px;
}
.gift-of-sight:hover{
  background-color: darkblue;
  color: #fff;
  border-color: darkblue;
  text-decoration:none;
}
hr{
  background-color:#FAA72F;
}
</style>


