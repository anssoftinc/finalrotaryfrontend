<template>
  <div class="mt-5 bg-text">
    <img src="/images/layouts/bg-hero-pink.svg" class="svg-img" />
    <div class="how-section1 container">
      <div class="row">
        <div class="col-md-6">
          <h1>About Our Club</h1>
          <hr />
          <p class="text-justify">
            The Rotary Club of Kathmandu Mid-Town was chartered on the 8th of November 1989 with 26 members, 3 of whom were women – a landmark accomplishment on the very first year that Rotary International opened up its membership to women. Mid-Town was also the first ‘breakfast’ Club in Nepal.
            <br />
            <br />The Club Charter was presented to Charter President Dr. Roop Jyoti by the then incoming RI President Paula V. Costa. The members of the newly formed Club agreed to support the Rotary Foundation by becoming Paul Harris fellows. In 2011 the Club was officially recognized by Rotary International as a 100% Paul Harris Fellow Club.
          </p>
        </div>
        <div class="col-md-6 how-img my-auto">
          <img src="/images/about/board-members.jpg" class="img-fluid" alt />

          <p>
            <b>Board Member 2019-2020</b>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="row"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* container is relative, content is absolute */

.bg-text {
  position: relative;
  width: 100%;
  padding: 80px 0;
  overflow: hidden;
  background: #f4f4f4;
}

.svg-img {
  position: absolute;
  left: 60%;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 80vh;
  overflow: hidden;
}

.how-section1 {
  /* position: absolute; */
  padding: 20px 30px;
}
.how-section1 h4 {
  color: #ffa500;
  font-weight: bold;
  font-size: 30px;
}
.how-section1 .subheading {
  color: #3931af;
  font-size: 20px;
}
.how-section1 .row {
  /* margin-top: 10%; */
}
.how-img {
  text-align: center;
}
.how-img img {
  width: 80%;
}
hr{
  background-color: #FAA72F;
}
/* .section {
  background-image: url("/images/layouts/forabout.jpg");
  height: 200px;
  right: 0;
  bottom: 0;
  left: 70%;

  background-size: cover;
  z-index: 1;
} */
</style>
