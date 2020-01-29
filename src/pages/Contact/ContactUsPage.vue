<template>
  <div class="my-4 pb-5">
    <div class="container mt-4">
      <h1 class="text-left">Contact us</h1>
      <hr class="my-4" />
      <div class="row">
        <div class="fav-icon col-lg-4 text-center">
          <i class="fas fa-map-marker-alt"></i>
          <h5>Venue</h5>
          <p class="py-3">
            Hotel de I'Annapurna
            <br />Durbar Marg, Kathmandu
            <br />Nepal
            <br />
            <a class="google-map-link"
              href="https://www.google.com/maps/place/Hotel+Del'+Annapurna+Swimming+Pool/@27.7109994,85.3141391,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19017fa3b0cf:0xd988bc5b5c01f9df!8m2!3d27.7109994!4d85.3163278"
              target="_blank"
            >Google Map Link</a>
          </p>
        </div>

        <!-- <div class="fav-icon col-lg-3 text-center">
          <i class="fas fa-phone"></i>
          <h5>Contact Details</h5>
          <p class="py-3">
            Phone:+ 977-01-422171
            <br />Email:isa.khadka@gmail.com.
          </p>
        </div>-->

        <div class="fav-icon col-lg-4 text-center">
          <i class="far fa-clock"></i>
          <h5>Meeting Hours</h5>
          <p class="py-3">
            Meetings: 8-9 AM every Friday
            <br />Meet at 7:30 AM for fellowship and breakfast
            <br />Please contact us before attending to verify the venue since we sometimes have off-site meetings.
          </p>
        </div>
        <div class="fav-icon col-lg-4 text-center">
          <i class="fab fa-facebook"></i>
          <h5>Follow Us</h5>
          <h4 class="py-3">
            <a class="rotary-club-contact-us"
              href="https://www.facebook.com/RotaryClubOfKathmanduMidtown/"
            >Rotary Club of Kathmandu Mid-Town</a>
          </h4>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4">
          <h2>Please fill out this form</h2>

          <input
            class="form-control"
            name="name"
            placeholder="Name..."
            v-model="user.your_name"
            required
          />
          <br />
          <input class="form-control" name="phone" placeholder="Phone..." v-model="user.your_phone" />
          <br />
          <input
            class="form-control"
            name="email"
            placeholder="E-mail..."
            v-model="user.your_email"
            required
          />
          <br />
          <textarea
            class="form-control"
            name="text"
            placeholder="How can we help you?"
            style="height:150px;"
            v-model="user.your_message"
            required
          ></textarea>
          <br />
          <button class="btn btn-block btn-primary-blue float-right" @click.prevent="submit()">Send</button>
          <br />
          <br />
        </div>
        <div class="col-md-7">
          <div class="mapouter">
            <div class="gmap_canvas">
              <!-- <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.207541663155!2d85.3149483145384!3d27.71087763194483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190161557a45%3A0x67cfe9b78555b3c!2sHotel+De+L&#39;+Annapurna+Beauty+Parlour+%26+Barber+Shop!5e0!3m2!1sen!2snp!4v1566123168478!5m2!1sen!2snp"
                frameborder="0"
                height="400"
                style="border:0"
                allowfullscreen
                class="google-map"
              ></iframe>-->
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2034454333434!2d85.3141391154155!3d27.711004131937333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19017fa3b0cf%3A0xd988bc5b5c01f9df!2sHotel%20Del&#39;%20Annapurna%20Swimming%20Pool!5e0!3m2!1sen!2snp!4v1573654570153!5m2!1sen!2snp"
                height="400"
                frameborder="0"
                style="border:0;"
                allowfullscreen
                class="google-map"
              ></iframe>
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
      user: {
        your_name: "",
        your_phone: "",
        your_email: "",
        your_message: ""
      }
    };
  },
  methods: {
    submit() {
      if (
        this.user.your_name == "" ||
        this.user.your_email == "" ||
        this.user.your_message == ""
      ) {
        return this.$toastr.error(
          "Message",
          "Unsuccessful: Please Fill in required Fields"
        );
      }
      const formData = new FormData();
      formData.append("your_name", this.user.your_name);
      formData.append("your_phone", this.user.your_phone);
      formData.append("your_email", this.user.your_email);
      formData.append("your_message", this.user.your_message);
      this.$API
        .sendContactUs(formData)
        .then(data => {
          if (data.data.status == "mail_sent") {
            this.$toastr.success("Message", "Email Sent Successfully");
          } else {
            this.$toastr.error(
              "Message",
              "Unsuccessful: Please Check Your Details and try again"
            );
          }

          console.log(data);
        })
        // .catch(error => {
        //   alert("Email Send Failed");
        // });
    }
  }
};
</script>

<style scoped>
.banner {
  height: 22vh;
  overflow: hidden;
  color: #fff;
  /* background: #019fcb; */
}
p {
  font-size: 0.9em;
}

.mapouter {
  position: relative;
  text-align: right;

  width: 100%;
}
.gmap_canvas {
  background: none !important;

  width: 100%;
}

/* .fav-icon {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  overflow: hidden;
  background: #ccc;
} */

.fav-icon i {
  /* position: absolute; */
  z-index: 9999;
  color: #025198;
  background: #fafafa;
  border-radius: 100%;
  /* padding: 20px; */
  height: 50px;
  width: 50px;
  line-height: 50px;
}

.google-map {
  width: 100%;
  display: block;
}
.btn-primary-blue{
  border-color: #025198;
}
.btn-primary-blue:hover{
  background-color: #025198;;
}
.fav-icon h5{
  /* color: #025198; */
  color:#FAA72F;
  padding-top: 5px;
}
button{
  color: #025198;
}
/* .container h1{
  color: #FAA72F;
} */
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
    outline-width: 0;
    outline-color: #025198;
}
.rotary-club-contact-us{
  font-size: 22px;
  color:#025198;
}
.google-map-link{
  font-size: 17px;
    color:#025198;
}
.rotary-club-contact-us:hover, .google-map-link:hover{
  text-decoration-color: #FAA72F
}
hr{
  background-color: #FAA72F;
}

</style>