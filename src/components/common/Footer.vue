<template>
  <footer class="container-fluid bg-grey pt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="logo-part mb-5">
            <img src="/images/logo_top.png" class="w-50 logo-footer img-fluid mb-3" />
            <p>Rotary Club Kathmandu Mid-Town</p>
            <p>
              <br />District 3292, Club 26776
              <br />Kathmandu,Nepal
            </p>
          </div>
        </div>
        <div class="col-md-5 px-4">
          <h6>VISIT OUR CLUB</h6>
          <p>
            <br />The Rotary Club of Kathmandu Mid-Town meets every Friday morning at 7:30 AM at the Hotel de I-Annapurna on Durbar Marg in Kathmandu. Visiting Rotarians are most welcomed.
            <br />As a courtesy, we request that visiting Rotarians and friends inform us first at -
            <router-link to="/contact-us/contact-information">
              <a class="contact-us">CONTACT US</a>
            </router-link>
          </p>
        </div>

        <div class="col-md-3 mt-3 mb-5">
          <h6>Links</h6>
          <div class="social mb-3">
            <a
              href="https://www.facebook.com/RotaryClubOfKathmanduMidtown/"
              title="facebook"
              target="_blank"
            >
              <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
            </a>

            <a
              href="http://rotarydistrict3292.org/"
              class="social-dstrict"
              title="Disrtict Link"
              target="_blank"
            >
              <i class="fas fa-globe top-icons" aria-hidden="true"></i>
              <!-- <span class="icon-text">District Website</span> -->
            </a>
            <!-- <a href="#">
                  <i class="fab fa-instagram fa-2x mx-3" aria-hidden="true"></i>
            </a>-->
          </div>
          <!-- <router-link to="/contact-us/contact-information" class="btn btn-primary-blue">
                <a>Contact Us</a>
          </router-link>-->
        </div>
      </div>
      <p class="text-center mt-2">© 2019 Rotary Club Kathmandu Mid-Town. All rights reserved.</p>
      <p class="text-center mt-2" style="color:rgba(119, 119, 119, 1);">Powered by ANS Soft © 2019</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
footer {
}
.bg-grey {
  background: #fafafa;
}

footer {
  border-top: 1px solid rgba(0, 0, 0, 0.075);
  color: var(--steel-blue);
}
footer p,
a {
  font-size: 0.9em;
}
footer h6 {
  margin-bottom: 20px;
  position: relative;
  display: table;
  text-transform: uppercase;
  border-bottom: 1px solid #025198;
  padding-bottom: 5px;
}
footer h6:after {
  position: absolute;
  content: "";
  width: 12%;
  height: 1px;
  left: 0;
  bottom: -20px;
}
.btn-footer {
  color: var(--primary-blue);
  text-decoration: none;
  border: 1px solid;
  font-size: 14px;
  padding: 7px 20px;
  line-height: 47px;
  text-transform: uppercase;
}
.btn-footer:hover {
  text-decoration: none;
  background: var(--primary-blue);
}
.form-footer input[type="text"] {
  border: none;
  border-radius: 16px 0 0 16px;
  outline: none;
  padding-left: 10px;
}
::placeholder {
  font-size: 10px;
  padding-left: 10px;
  font-style: italic;
}
.form-footer input[type="button"] {
  border: none;
  margin-left: -5px;
  color: #fff;
  outline: none;
  border-radius: 0 16px 16px 0;
  padding: 2px 12px;
}
.social .fa {
  /* color: grey; */
  font-size: 22px;
  padding: 10px 15px;
}
.social-dstrict {
  font-size: 29px;
  margin-left: 33px;
}
footer ul li {
  list-style: none;
  display: block;
}
footer ul {
  padding-left: 0;
}
footer ul li a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.logo-part {
  border-right: 1px solid rgba(0, 0, 0, 0.075);
  height: 100%;
}
.contact-us {
  font-size: 14.5px;
}
a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
  color: #025198;
}
.contact-us:hover {
  color: #025198;
  border-bottom: 1px solid #faa72f;
}
.social a {
  color: #025198;
}
</style>
