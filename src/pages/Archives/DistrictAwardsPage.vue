<template>
  <div class="awards-page mt-5">
    <div class="container">
      <button
        class="btn btn-outline-blue mr-2"
        @click="selectedPage=0"
        :class="selectedPage==0?'active':''"
      >2009-10</button>
      <h4 class="mt-3">Mid-Town Sweeps Rotary District Awards for 2009-2010</h4>

      <div class="row mt-3">
        <div class="col-md-4">
          <img src="/images/archives/awards/award1.jpg" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <ol>
            <li>Best Club</li>
            <li>Best Club in Community Services</li>
            <li>Best Club in International Services</li>
            <li>Best Club in Inter Club relation</li>
            <li>Best Club in Public Health</li>
            <li>Best Club Service to the Senior Citizens</li>
            <li>Best Club in Literacy</li>
            <li>Best Club in TRF Contribution</li>
            <li>Contribution to Rotary Foundation Quantum per capita (Second)</li>
            <li>Community service to downtrodden and neglected children (second)</li>
          </ol>
        </div>
      </div>

      <div class="row">
        <img src="/images/archives/awards/award2.jpg" class="img-fluid custom-img" />

        <img src="/images/archives/awards/award3.jpg" class="img-fluid custom-img" />
      </div>

      <div class="row mt-5">
        <div class="col-md-4 d-flex align-items-center">
          <p class="text-justify">
            <b>Rotaract President Anil (2009-2010)</b> expressed his pride and appreciation for the parent Club by exuberantly and passionately embracing Mid-Town’s ‘Best Club’ trophy. Many Mid-Towners share the same sentiment -- CONGRATULATIONS
          </p>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col">
              <img src="/images/archives/awards/anil1.jpg" class="img-fluid" style="height:250px" />
            </div>
            <div class="col">
              <img src="/images/archives/awards/anil2.jpg" class="img-fluid" style="height:250px" />
            </div>
          </div>
        </div>

        <h4 class="mt-5 mb-4">Mid-Town bags 15 Rotaract awards for 2009-2010.</h4>
        <div class="row">
          <div class="col-md-6">
            <p
              class="text-justify"
            >The Rotaract Club of Kathmandu Mid-Town won 15 awards at the Rotaract District Awards Ceremony held on 10th July 2010 at the DAV School, Jawalakhel.</p>

            <ol>
              The awards are:
              <li>1st Position in projects with other organizations</li>
              <li>1st Position in projects with Rotary Club</li>
              <li>1st Position in projects with Interact club</li>
              <li>1st Position on Career Development</li>
              <li>1st Position on HR/Personality Development</li>
              <li>1st Position in projects on environment</li>
              <li>1st Position in own club projects in SAP(Special Area Project)</li>
              <li>2nd Position in projects on Health</li>
              <li>2nd Position in Rotaract Promotion</li>
              <li>3rd Position in projects for Senior Citizens</li>
              <li>3rd Position in participating in district Activities</li>
              <li>Best Club in SAP (Special Area Project)</li>
              <li>Best Club in Partner in Service</li>
              <li>Outstanding Project for Mega Diabetes Camp at various places of Kathmandu</li>
              <li>Recognition for Hosting First Presidents and Secretaries Meet</li>
            </ol>
          </div>

          <div class="col-md-6">
            <div class="col">
              <img src="/images/archives/awards/award4.jpg" class="img-fluid w-75" />
            </div>
            <div class="col mt-3">
              <img src="/images/archives/awards/award4.jpg" class="img-fluid w-75" />
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-md-4 d-flex align-items-center">
            <p>
              The Rotaract Club of Kathmandu Mid-Town held it first general meeting of Rotaract Year 2010-11 on 11th July 2010 at Spectra Opticals, Blue Star Complex, Thapathali where they proudly displayed their many trophies to Pres. Pratap Malla.
              <br />Rotaract Pres. Anil Chaudhary used this occasion to present his team and to outline his plans for the coming year.
            </p>
          </div>
          <div class="col-md-6">
            <img src="/images/archives/awards/award6.jpg" class="img-fluid w-75" />
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
      selectedPage: 0
    };
  }
};
</script>


<style scoped>
li {
  margin-top: 6px;
}
.custom-img {
  margin-top: 10px;
  margin-left: 10px;
  height: 250px;
  object-fit: cover;
}
.btn-outline-primary{
  background-color: #025198;
  border: 1px solid;
  border-color: #025198
}

.active {
  /* background: var(--royal); */
  text-decoration: none;
  color: #fff;
  background: #025198;
}
</style>