<template>
  <div class="team">
    <div class="container">
      <h1 class="text-left">Charter Members</h1>
      <hr class="mb-4" />
    </div>
    <div class="py-2" style="background:#f4f4f4">
      <div class="container">
        <div class="row mt-30">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <h2>Charter President</h2>
            <div class="custom-card">
              <div class="row my-3">
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="cards-image">
                    <img v-lazy="'/images/past-presidients/roop-jyoti.jpg'" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="custom-card-text">
                    <h2 class="title">Dr Roop Jyoti</h2>
                    <span class="post">President <br/>  1989-1991</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-2" style="background:#f4f4f4">
      <div class="container">
        <h2 class="text-center">Our Charter Members</h2>
        <div class="row mt-30">
          <div
            class="col-sm-12 col-md-6 col-lg-6 col-xl-4"
            v-for="item in chartMembers"
            :key="item"
          >
            <div class="custom-card">
              <div class="row my-3">
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="cards-image">
                    <img v-lazy="imageBase+item.photo" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="custom-card-text">
                    <h2 class="title">{{item.name}}</h2>
                    <span class="post">{{item.date}}</span>
                  </div>
                </div>
              </div>
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
      imageBase: "/images/past-presidients/",
      chartMembers: [
        {
          name: "Ambica Shrestha",
          date: "President 1992-93",
          theme: "real-happiness.jpg",
          photo: "ambica.jpg"
        },
        {
          name: "Anand Tuladhar",
          date: "President 1993-94",
          theme: "believe.jpg",
          photo: "anand.jpg"
        },
        {
          name: "Yogendra Man Pradhan",
          date: "President 1995-96",
          photo: "yogendra.jpg",
          theme: "act.jpg"
        },
        {
          name: "Dr. Chandra Lekha Tuladhar",
          date: "President 1996-97",
          photo: "chandra.jpg",
          theme: "build.jpg"
        },
        {
          name: "Mani Dhoj Joshi",
          date: "President 1997-98",
          photo: "mani.jpg",
          theme: "show.jpg"
        },
        {
          name: "Werner Blaser",
          photo: "blaser.jpg"
        }
      ]
    };
  }
};
</script>



<style scoped>
.card-image {
  width: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-card {
  background: #fff;
}
.custom-card:hover {
  background: #025198;
  color: #fff;
  transition: all 0.2s;
}
.custom-card:hover h2 {
  color: #fff;
  transition: all 0.2s;
}
.card-image img {
  height: 160px;
}

.custom-card-text {
  padding: 15px 10px;

  text-transform: uppercase;
}
.custom-card-text h2 {
  font-size: 18px;
  font-weight: 600;
  color: #716b70;
  text-transform: uppercase;
  /* text-align: center; */
}
.custom-card-text span{
text-transform: none;
font-weight: 400;
}
hr{
  background-color: #FAA72F;
}
</style>


