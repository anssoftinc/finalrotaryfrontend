<template>
  <div class="team">
    <div class="container">
      <h1 class="text-left">Our Members</h1>
      <hr class="mb-4" />
    </div>
    <div class style="background:#f4f4f4">
      <div class="container">
        <div class="row mt-30">
          <!-- <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 item" v-for="item in listedmembers" :key="item" > -->
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 item" v-for="item in members" :key="item" >

            <div class="custom-card">
              <div class="row my-3">
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="cards-image">
                    <img v-lazy="imageBase+item.imageUrl" class="img-fluid" />
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-6">
                  <div class="custom-card-text">
                    <h2 class="title">{{item.name}}</h2>
                    <span class="post">{{item.title}}</span>
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
      imageBase: "/images/about/members/",
      members: [
        {
          name: "Buddha Basnyat",
          imageUrl: "basnyat.jpg"
        },
        {
          name: "Krishna Belbase",
          imageUrl: "krishna.jpg"
        },
        {
          name: "Werner Blaser",
          imageUrl: "blaser.jpg"
        },
        {
          name: "Govinda B. Chipalu",
          imageUrl: "chipalu.jpg"
        },
        {
          name: "Komal B. Chitracar",
          imageUrl: "chitracar.jpg"
        },
        {
          name: "Lisa Choegyal",
          imageUrl: "choegyal.jpg"
        },
        {
          name: "Walter Diller",
          imageUrl: "diller.jpg"
        },
        {
          name: "Sangita Einhouse Shrestha",
          imageUrl: "einhaus.jpg"
        },
        {
          name: "Basu Dev Gautam",
          imageUrl: "gautam.jpg"
        },
        {
          name: "Kul Chandra Gautam",
          imageUrl: "gautamkul.jpg"
        },
        {
          name: "Chandra Kumar Golchha",
          imageUrl: "golchha.jpg"
        },
        {
          name: "Ganesh Gurung",
          imageUrl: "gurung.jpg"
        },
        {
          name: "Prasun Jalan",
          imageUrl: "jalan-prasun.jpg"
        },
        {
          name: "Mani Dhoj Joshi",
          imageUrl: "joshi-mani-dhoj.jpg"
        },
        {
          name: "Subarna B Joshi",
          imageUrl: "joshi-subarna.jpg"
        },
        {
          name: "Tumla Lacoul",
          imageUrl: "tumla-lacoul.jpg"
        },
        {
          name: "Roop Jyoti",
          imageUrl: "jyoti-roop.jpg"
        },
        {
          name: "Gopal S. Lal Kakshapati",
          imageUrl: "kakshapati.jpg"
        },
        {
          name: "Rabi Karmacharya",
          imageUrl: "karmacharya.jpg"
        },
        {
          name: "Isabella C. Bassignana Khadka",
          imageUrl: "isa.jpg"
        },
        {
          name: "Rup Khadka",
          imageUrl: "khadka.jpg"
        },
        {
          name: "Jo Logghe",
          imageUrl: "logghe.jpg"
        },
        {
          name: "William Ma",
          imageUrl: "william.jpg"
        },
        {
          name: "Milan Maharjan",
          imageUrl: "milan-maharjan.jpg"
        },
        {
          name: "Susen A. Mole",
          imageUrl: "mole.jpg"
        },
        {
          name: "Dale Mole",
          imageUrl: "mole-dale.jpg"
        },
        {
          name: "Bhai Raja Panday",
          imageUrl: "bhairaja.jpg"
        },
        {
          name: "Maria-Teresa Mesquita Pessoa",
          imageUrl: "pessoce.jpg"
        },
        {
          name: "Pramod Chandra Poudel",
          imageUrl: "poudel-pramod.jpg"
        },
        {
          name: "Neeva Mathema Pradhan",
          imageUrl: "neeva.jpg"
        },
        {
          name: "Yogendra Pradhan",
          imageUrl: "yogendra.jpg"
        },
        {
          name: "Paras S.J.B. Rana",
          imageUrl: "rana-paras.jpg"
        },
        {
          name: "Shankar P. Sharma",
          imageUrl: "sharma-shankar.jpg"
        },
        {
          name: "Arun Man Sherchan",
          imageUrl: "sherchan.jpg"
        },
        {
          name: "Rabindra Shrestha",
          imageUrl: "rabindra-shrestha.jpg"
        },
        {
          name: "Ramraj Shrestha",
          imageUrl: "ramraj-shrestha.jpg"
        },
        {
          name: "Mahendra Shrestha",
          imageUrl: "shrestha-mahendra.jpg"
        },
        {
          name: "Saroj Shrestha",
          imageUrl: "shrestha-saroj.jpg"
        },
        {
          name: "Ambica Shrestha",
          imageUrl: "shrestha-ambica.jpg"
        },
        {
          name: "Jyotsna Shrestha",
          imageUrl: "shrestha-jyotsna.jpg"
        },
        {
          name: "Ajaya R. Sthapit",
          imageUrl: "sthapit.jpg"
        },
        {
          name: "Krishna NS Thapa",
          imageUrl: "thapa-khrishna.jpg"
        },
        {
          name: "Rachana Thapa",
          imageUrl: "rachana thapa.jpg"
        },
        {
          name: "Shyam Raj Thapaliya",
          imageUrl: "thapaliya-shyam.jpg"
        },
        {
          name: "Anand Tuladhar",
          imageUrl: "tuladhar-anand.jpg"
        },
        {
          name: "Chandra Lekha Tuladhar",
          imageUrl: "tuladhar-chandra.jpg"
        },
        {
          name: "Lotti Weise",
          imageUrl: "weise.jpg"
        },
        {
          name: "Nirmal Rijan",
          imageUrl: "nirmal.jpg"
        },
        {
          name: "Rupinder Kaur",
          imageUrl: "rupinder.jpg"
        },
        {
          name: "Abhishek Raj",
          imageUrl: "abhishek.jpg"
        }
      ],
      //  computed: {
      // listedmembers: function () {
      //   return orderBy(this.text[0].members, 'name')
      // }
      //  }
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
  /* background: var(--turq); */
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
}
hr{
  /* background-color: #025198; */
  background-color:#FAA72F
}
</style>
