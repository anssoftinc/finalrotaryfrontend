<template>
  <div class="mt-5">
    <div class="container" style>
      <div class="row">
        <div class="col-md-3">
          <img src="/images/Rotary_year_19.jpg" class="img-fluid" />
          <br />
          <a :href="path19" target="_blank" class="btn btn-primary-blue">Rotary Year 2019-20</a>
        </div>

        <div class="col-md-3">
          <img src="/images/Rotary_year_18.jpg" class="img-fluid" />
          <br />
          <a :href="path18" target="_blank" class="btn btn-primary-blue">Rotary Year 2018-19</a>
        </div>

        <div class="col-md-3">
          <img src="/images/Rotary_year_17.jpg" class="img-fluid" />
          <br />
          <a :href="path17" target="_blank" class="btn btn-primary-blue">Rotary Year 2017-18</a>
        </div>

        <div class="col-md-3">
          <img src="/images/Rotary_year_16.jpg" class="img-fluid" />
          <br />
          <a :href="path16" target="_blank" class="btn btn-primary-blue">Rotary Year 2016-17</a>
        </div>

        <div class="col-md-3">
          <img src="/images/Rotary_year_15.jpg" class="img-fluid" />
          <br />
          <a :href="path15" target="_blank" class="btn btn-primary-blue">Rotary Year 2015-16</a>
        </div>

        <div class="col-md-3">
          <img src="/images/Rotary_year_14.jpg" class="img-fluid" />
          <br />
          <a :href="path14" target="_blank" class="btn btn-primary-blue">Rotary Year 2014-15</a>
        </div>

        <div class="col-md-3">
          <img src="/images/Rotary_year_13.jpg" class="img-fluid thirteen" />
          <br />
          <a :href="path13" target="_blank" class="btn btn-primary-blue">Rotary Year 2013-14</a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      path13: "/images/Rotary Year 2013-14.pdf",
      path14: "/images/Rotary Year 2014-15.pdf",
      // Rotary Year 2014-15 25th Charter Night Celebration.pdf
      path15: "/images/Rotary Year 2015-16.pdf",
      path16: "/images/Rotary Year 2016-17.pdf",
      path17: "/images/Rotary Year 2017-18.pdf",
      path18: "/images/Rotary_year_18.pdf",
      path19: "/images/Rotary Year 2019-20.pdf"
    };
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
.btn-primary-blue{
  color:#025198;
  border-color: #025198;
}
.btn-primary-blue:hover{
  background-color: #025198;
}
img {
  height: 200px;
  margin-bottom: 20px;
  /* min-width: 170px; */
}
@media only screen and (max-width: 768px) {
  .row .col-md-3{
    text-align: center;
  }
}
</style>