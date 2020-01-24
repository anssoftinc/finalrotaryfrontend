<template>
  <div style="background:#f4f4f4" class="pb-3">
    <div class="container pt-4" id="top">
      <h1 class="text-left">Global Grants</h1>
      <hr class="my-4" />

      <p id="education-support"></p>
      <div class="custom-card">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h4 class="p-3">Ongoing Global Grant: Education Support in Sindhupalchok and Nuwakot</h4>

            <p class="text-justify p-3">
              <img
                v-lazy="'/images/our-projects/first-steps-logo.png'"
                class="img-fluid float-left logo mr-3"
              />
              Early years Education Support Project, Sindhupalchok, Nepal, (Global Grant 1979704) in collaboration with RC Ellon, District 1010, Scotland. Schools in Sindhupalchok and Nuwakot areas of rural Nepal will be supported to improve learning in 13 classrooms in selected schools. The program will support schools that have shown willingness to change and are most in need. The grant will support upgrading the standard of the schools in terms of physical environment, teaching and the quality of education. Teachers will be given support and training to adopt modern child friendly learning methods and to take ownership and responsibility for the school environment.
              The project is implemented through our partners at First Steps Himalaya. First Steps Himalaya—Giving children a childhood in the rural Himalaya.
              <a
                href="/images/our-projects/Global Grant First Steps.pdf"
                target="_blank"
              >See Detailed Report</a>
            </p>
            <p></p>
          </div>
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/first-steps.jpg" class="img-fluid" />
          </div>
        </div>
      </div>

      <p id="hearing-loss"></p>
      <div class="custom-card">
        <div class="row">
          <div class="col-md-8">
            <h4
              class="p-3"
            >Recently Closed: Preventing Hearing Loss Among Nepalese Children (GG1637950)</h4>

            <p class="text-justify">
              <img
                src="/images/our-projects/hearing-loss-logo.jpg"
                class="float-left logo mr-3 p-3"
                alt
              />
              This year with the help of the Rotary Club of Potomac-Bethesda, RID 7620, USA, we helped to preventing hearing loss among Nepalese children by providing auditory screening and surgical equipment, by screening children for correctible ear problems, by providing ear surgery for children and by promoting increased awareness and prevention.
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/hearing-loss-project.jpg" class="img-fluid" />
          </div>
        </div>
      </div>

      <div class="custom-card">
        <div class="row">
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/simpani-gairigaon.jpg" class="img-fluid" />
          </div>
          <div class="col-md-8">
            <h4
              class="p-3"
            >Recently Completed: Simpani Gairigaon Lift Water Supply for Drinking and Sanitation (GG1754006) in collaboration with Masan-East Rotary Club (S Korea)</h4>

            <p
              class="text-justify p-3"
            >These villagers lost their water supply when natural springs dried up because of the 2015 earthquake. More than 30 families in the village of Simapani (Dhading) are now benefiting from this new water system. This project has helped to keep the community together by redirecting water to their village so that they do not need to relocate.</p>
          </div>
        </div>
      </div>
      <div class="custom-card container">
        <h4 class="p-3">In the pipeline : Snakebite Prevention and Awareness Project</h4>
        <div class="row align-items-center">
          <div class="col-md-4 text-center">
            <img src="/images/our-projects/snakebite.jpg" class="img-fluid snakebite" />
          </div>
          <div class="col-md-8">
            <p class="text-justify p-3">
              Snakebite is one of the most neglected public health issues in rural Nepal. Over the past two years we have made some initial efforts to alleviate suffering in this area by increasing awareness and an on-going campaign to distribute much-needed first-aid and prevention information.
              <br />Our vision is:
            </p>
            <h5 class="text-justify pl-2">
              <i>"A Nepal where no one dies from snakebite"</i>
            </h5>

            <p class="text-justify p-3">
              We have taken on the mission to share information with communities so that they are well-informed on how to prevent snakebites and know how to respond with appropriate first-aid when snakebites do occur. And, to share information with and to train healthcare workers so that they are well informed on treatment options. See more information on the recent international conference held in Nepal:
              <a
                href="http://snakebitenepal.org/"
                target="_blank"
              >
                <b>snakebitenepal.org</b>
              </a>
            </p>
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
      projects: [
        {
          title: "Gift of Sight Eye Camp",
          description: "",
          image: ""
        }
      ]
    };
  }
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
.col-md-8 p a {
  color: #025198;
}
.col-md-8 p a:hover {
 text-decoration-color: #FAA72F;
}
hr{
  background-color: #FAA72F;
}
</style>


