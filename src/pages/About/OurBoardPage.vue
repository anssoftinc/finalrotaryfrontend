<template>
  <div>
    <div class="container">
      <h1 class="text-left">Meet the Board 2019-2020</h1>
      <hr class="my-4" />
      <div class="row">
        <div class="board-members col-md-6">
          <img src="/images/about/board-members.jpg" alt class="img-fluid" />
        </div>
        <div class="col-md-6">
          <b>Back row (left to right):</b>
          <p
            class="members"
          >Public Relations Chair William Ma, Club Administration Chair Walter Diller, Secretary PP RR Shrestha, IPP Jo Logghe, TRF Chair Dr Isa C B Khadka, 1st VP Lisa Choegyal, Service Projects Chair Paras Rana, Joint Secretary Arun Man Sherchand.</p>
          <b>Front row (left to right):</b>
          <p
            class="members"
          >2nd VP Ganesh Gurung, President Neeva Mathema Pradan, Treasurer Ajay Staphit.</p>
          <b>Not in the photo:</b>
          <p
            class="member"
          >Sergeant-at-Arms Shyam Thapaliya, Membership Chair Mani D Joshi, and Yourh Service Chair Dr C.Lekha Tuladhar</p>
        </div>
      </div>
    </div>
    <div class="py-2" style="background:#f4f4f4">
      <div class="container">
        <h3 class="text-left mt-5">Board Members</h3>
        <hr class="my-4" />
        <div class="row mt-30">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4" v-for="item in members" :key="item">
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
// const imageBase = "/images/about/board/";
export default {
  data() {
    return {
      imageBase: "/images/about/board/",
      members: [
        {
          name: "Neeva Mathema Pradhan",
          imageUrl: `neeva.jpg`,
          title: "President"
        },
        {
          name: "Khrishna NS Thapa",
          imageUrl: `khrishna-thapa.jpg`,
          title: "President Elect"
        },
        {
          name: "Jo Logghe Sherpa ",
          imageUrl: `jologghe.jpg`,
          title: "Immediate Past President "
        },

        {
          name: "Lisa Choegyal",
          imageUrl: `lisa.jpg`,
          title: "1st  Vice President"
        },
        {
          name: "Ganesh Gurun",
          imageUrl: `ganesh.jpg`,
          title: "2nd Vice President"
        },
        {
          name: "Arun Man Sherchand",
          imageUrl: `arun.jpg`,
          title: "Joint Secretary"
        },
        {
          name: "Ram Raj Shrestha",
          imageUrl: `ram.jpg`,
          title: "Secretary"
        },
        {
          name: "Ajay Staphit",
          imageUrl: `ajay.jpg`,
          title: "Treasurer"
        },
        {
          name: "Isa C B Khadka",
          imageUrl: `isa.jpg`,
          title: "The Rotary Foundation"
        },
        {
          name: "Walter Diller",
          imageUrl: `walter.jpg`,
          title: "Club Administration"
        },
        {
          name: "Mani Dhoj Joshi",
          imageUrl: `mani.jpg`,
          title: "Membership"
        },
        {
          name: "William Ma",
          imageUrl: `william.jpg`,
          title: "Public Relation"
        },
        {
          name: "Paras SJB Rana",
          imageUrl: `paras.jpg`,
          title: "Service Projects"
        },
        {
          name: "C.Lekha Tuladhar",
          imageUrl: `clekha.jpg`,
          title: "Youth Service"
        },
        {
          name: "Shyam Raj Thapaliya",
          imageUrl: `rabindra.jpg`,
          title: "Sergeant-at-Arms"
        },
        {
          name: "Sri Krishna ",
          imageUrl: `sri.jpg`,
          title: "Executive Secretary"
        }
      ]
    };
  },
  methods: {
    getImgUrl(img) {
      var url = this.imageBase + img;
      return require(`${url}`);
    }
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
  background:#025198;
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
  font-size: 20px;
  font-weight: 600;
  color: #716b70;
  text-transform: uppercase;
}
hr{
  background-color: #FAA72F;
}
</style>
