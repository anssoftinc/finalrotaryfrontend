<template>
  <div class="container" style>
    <h1 class="text-left">About Our Club</h1> 
    <hr class="my-4" /><br>
    <div class="row">
      <div class="col-md-2">
        <img src="/images/midtown-logo.jpg" class="logo" alt />
      </div>
      <div class="col-md-7">
        <p class="text-justify">
          The Rotary Club of Kathmandu Mid-Town was chartered on the 8th of November 1989 with 26 members, 3 of whom were women – a landmark accomplishment on the very first year that Rotary International opened up its membership to women. Mid-Town was also the first ‘breakfast’ Club in Nepal.
          <br />
          <br />The Club Charter was presented to Charter President Dr. Roop Jyoti by the then incoming RI President Paula V. Costa. The members of the newly formed Club agreed to support the Rotary Foundation by becoming Paul Harris fellows. In 2011 the Club was officially recognized by Rotary International as a 100% Paul Harris Fellow Club.
        </p>
      </div>
      <div class="col-md-3">
        <img src="/images/Mid-Town Charter 8 Nov 1989.jpg" width="100%" />
      </div>
    </div>

    <div class="clear"></div>
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="banner-image">
          <img src="/images/about/banner.jpg" alt class="img-fluid" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="banner-text">
          <p class="text-justify">
            In 2016, our Charter President Dr Roop Jyoti (left) helped us to score another
            ‘first’ when he became the first Arch C. Klumph Society Member in our
            District.
          </p>
          <p
            class="text-justify"
          >Charter President Dr Roop Jyoti is an Arch C. Klumph Society Chair Circle Member.</p>
          <img src="/images/about/arch.png" />
        </div>
      </div>
    </div>

    <hr class="my-5" />

    <div class="row my-5">
      <div class="col-md-6 d-flex align-items-center">
        <h3 class="outstanding-members">
          <span>
            Our Club has many outstanding members
            but a few deserve special mention . . .
          </span>
        </h3>
      </div>

      <div class="col-md-6">
        <div class="person-item mt-3">
          <div class="image-box mr-3">
            <span style="background-image: url(/images/about/ambica.jpg);background-position: top;"></span>
          </div>
          <p>
            <span class="presidient-name">Past President Rtn Ambica Shrestha</span>
            <br />First woman in Nepal to become a Rotary President. She is also a ‘Service Above Self’ award winner
          </p>
        </div>
        <div class="clear"></div>

        <div class="person-item mt-3">
          <div class="image-box mr-3">
            <span
              style="background-image: url(/images/about/yogendra.jpg);background-position: top;"
            ></span>
          </div>
          <p>
            <span class="presidient-name">Past President Yogendra Man Pradhan</span>
            <br />District Governor for RID3292 (2012-13)
          </p>
        </div>

        <div class="clear"></div>
        <div class="person-item mt-3">
          <div class="image-box mr-3">
            <span style="background-image: url(/images/about/gopal.jpg);background-position: top;"></span>
          </div>
          <p>
            <span class="presidient-name">Past President Gopal Kakshapati</span>
            <br />Major Donor
          </p>
        </div>

        <div class="clear"></div>
        <div class="person-item mt-3">
          <div class="image-box mr-3">
            <span style="background-image: url(/images/about/neeva.jpg); background-position: top;"></span>
          </div>
          <p>
            <span class="presidient-name">President Neeva Mathema Pradhan</span>
            <br />Major Donor
          </p>
        </div>
      </div>
    </div>

    <!-- <h4
      class="text-left mt-5 mb-4"
    >Our Club has many outstanding members but a few deserve special mention.</h4>
    <div class="row">
      <div class="col-lg-6 col-md-12 card">
        <div class="card-body">
          <div class="d-flex mt-3">
            <div>
              <div class="circular--landscape mr-3">
                <img src="/images/about/ambica.jpg" />
              </div>
            </div>

            <div class="member-desc d-flex align-items-center justify-content-center">
              <p>Our Past President Rtn Ambica Shrestha was the first woman in Nepal to become a Rotary President and she is also a ‘Service Above Self’ award winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 card">
        <div class="card-body">
          <div class="d-flex mt-3">
            <div>
              <div class="circular--landscape mr-3">
                <img src="/images/about/yogendra.jpg" />
              </div>
            </div>

            <div class="member-desc d-flex align-items-center justify-content-center">
              <p>Our Past President Yogendra Man Pradhan was District Governor for RID3292 (2012-13).</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 col-md-12 card">
        <div class="card-body">
          <div class="d-flex mt-3">
            <div>
              <div class="circular--landscape mr-3">
                <img src="/images/about/gopal.jpg" />
              </div>
            </div>

            <div class="member-desc d-flex align-items-center justify-content-center">
              <p>Two of our Past Presidents are Major Donors (PP Ambica Shrestha and PP Gopal Kakshapati).</p>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>





<script>
import axios from "axios";
export default {
  data() {
    return {
      details: []
    };
  },
  methods: {}
};
</script>

<style scoped>
.circular--landscape {
  display: inline-block;
  position: relative;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--landscape img {
  width: 100%;
  /* height: 100%; */
  /* margin-left: -50px; */
}
td:first-child {
  font-weight: bold;
}

.member-desc {
  font-size: 16px;
  width: 80%;
}
.banner-image img {
  width: 100%;
}

.logo {
  height: 200px;
}

.person-item {
  align-items: center;
}
.image-box {
  width: 130px;
  border-radius: 100%;
  overflow: hidden;
  float: left;
}
.image-box span {
  display: block;
  padding-bottom: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
}

.outstanding-members {
  font-weight: 500;
  font-size: 28px;
}
.outstanding-members span {
  font-weight: 600;
  color: var(--primary-blue);
  font-size: 32px;
}
.outstanding-members span{
  color: #025198;
}

.presidient-name {
  font-weight: 600;
  color: var(--steel-blue);
  font-size: 18px;
}
hr{
  background-color: #FAA72F;
}
</style>
