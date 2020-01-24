<template>
  <div class="container">
    <h1 class="text-left">RC KTM Mid-Town Past Presidents</h1>
    <hr class="my-4" />

    <div class="row">
      <div class="col-lg-3 text-center">
        <img src="/images/past-presidients/roop-jyoti.jpg" />
        <h2 class="mt-2 text-center">Dr Roop Jyoti</h2>
        <p class="date text-center">(1989-91)</p>
      </div>
      <!-- <div class="col-lg-1">
      </div>-->
      <div class="col-lg-9 details text-center">
        <img src="/images/past-presidients/enjoy-rotary.jpg" class="logo mr-3" />
        <img src="/images/past-presidients/honor-rotary.jpg" class="logo" />
        <h2 class="my-3">RI Presidents</h2>
        <p>Hugh M. Archer Rotary Club of Dearborn, Michigan, USA</p>
        <p>
          Paulo V.C. Costa Rotary Club of Santos
          São Paulo,
          Brazil
        </p>
      </div>
    </div>

    <div class="row my-5" v-for="(pres,index) in pastPresidents" :key="index">
      <div class="col-lg-3 text-center">
        <img :src="imageBase+pres.photo" alt />
        <h2 class="mt-2 text-center">{{pres.name}}</h2>
        <p class="date text-center">{{pres.date}}</p>
      </div>
      <div class="col-lg-9 details text-center">
        <img :src="imageBase+pres.theme" class="logo" />
        <h2 class="my-3">RI President</h2>
        <p v-html="pres.ri"></p>
      </div>
      <hr style="background-color: #FAA72F; color: #FAA72F"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageBase: "/images/past-presidients/",
      pastPresidents: [
        {
          name: "Late Anoop Rana",
          date: "(1991-92)",
          theme: "look-beyond.jpg",
          photo: "Late-Anoop-Rana.jpg",
          ri:
            "Rajendra K. Saboo Rotary Club of Chandigarh Union Territory, India"
        },
        {
          name: "Ambica Shrestha",
          date: "(1992-93)",
          theme: "real-happiness.jpg",
          photo: "ambica.jpg",
          ri: "Clifford L. Dochterman Rotary Club of Moraga California, USA"
        },
        {
          name: "Anand Tuladhar",
          date: "(1993-94)",
          theme: "believe.jpg",
          photo: "anand.jpg",
          ri: "Robert Barth Rotary Club of Aarau Switzerland"
        },
        {
          name: "Late Niranjan Man Pradhan",
          date: "(1994-95)",
          theme: "be-a-friend.jpg",
          photo: "niranjan.jpg",
          ri:
            "Bill Huntley Rotary Club of Alford & Mablethorpe Lincolnshire, England"
        },
        {
          name: "Yogendra Man Pradhan",
          date: "(1995-96)",
          photo: "yogendra.jpg",
          theme: "act.jpg",
          ri: "Herbert G. Brown Rotary Club of Clearwater Florida, USA"
        },
        {
          name: "Dr. Chandra Lekha Tuladhar",
          date: "(1996-97)",
          photo: "chandra.jpg",
          theme: "build.jpg",
          ri:
            "Luis Vicente Giay Rotary Club of Arrecifes Buenos Aires, Argentina"
        },
        {
          name: "Mani Dhoj Joshi",
          date: "(1997-98)",
          photo: "mani.jpg",
          theme: "show.jpg",
          ri:
            "Glen W. Kinross Rotary Club of Hamilton, Brisbane Queensland, Australia"
        },
        {
          name: "Gopal Sundar Lal Kakshapati",
          date: "(1998-99)",
          photo: "gopal.jpg",
          theme: "follow.jpg",
          ri: "James L. Lacy Rotary Club of Cookeville Tennessee, USA"
        },
        {
          name: "Late Giridhar Lal Manandhar",
          date: "(1999-2000)",
          photo: "giridhar.jpg",
          theme: "act-with.jpg",
          ri: "Carlo Ravizza Rotary Club of Milano Sud-Ovest, Italy"
        },
        {
          name: "William Ma",
          date: "(2000-01)",
          photo: "william.jpg",
          theme: "awareness.jpg",
          ri: "Frank J. Devlyn Rotary Club of Anáhuac Distrito Federal, Mexico"
        },
        {
          name: "Ajaya Ratna Sthapith",
          date: "(2001-02)",
          photo: "ajaya.jpg",
          theme: "mankind.jpg",
          ri: "Richard D. King Rotary Club of Niles (Fremont) California, USA"
        },
        {
          name: "Hartmut Bauder",
          date: "(2002-03)",
          photo: "hartmut.jpg",
          theme: "sow-the-seeds.jpg",
          ri: "Bhichai Rattakul Rotary Club of Dhonburi Thailand"
        },
        {
          name: "Jyotsna Shrestha",
          date: "(2003-04)",
          theme: "lend-a-hand.jpg",
          photo: "jyotsna.jpg",
          ri: "Jonathan B. Majiyagbe Rotary Club of Kano Kano State, Nigeria"
        },
        {
          name: "Arun Man Sherchan",
          date: "(2004-05)",
          theme: "celebrate.jpg",
          photo: "arun.jpg",
          ri: "Glenn E. Estess Sr. Rotary Club of Shades Valley Alabama, USA"
        },
        {
          name: "Komal Chitrakar",
          date: "(2005-06)",
          theme: "service.jpg",
          photo: "komal.jpg",
          ri: "Carl-Wilhelm Stenhammar Rotary Club of Göteborg Sweden"
        },
        {
          name: "Chandra Kumar Golchha",
          date: "(2006-07)",
          theme: "lead-the-way.jpg",
          photo: "chandra-kumar.jpg",
          ri: "William B. Boyd Rotary Club of Pakuranga Auckland, New Zealand"
        },
        {
          name: "Walter Diller",
          date: "(2007-08)",
          theme: "rotary-shares.jpg",
          photo: "walter.jpg",
          ri: "Wilfrid J. Wilkinson Rotary Club of Trenton Ontario, Canada"
        },
        {
          name: "RR Shrestha",
          date: "(2008-09)",
          theme: "make-dreams-real.jpg",
          photo: "rr-shrestha.jpg",
          ri: "Dong Kurn Lee Rotary Club of Seoul Hangang Seoul, Korea"
        },
        {
          name: "Subarna Joshi",
          date: "(2009-10)",
          theme: "the-future.jpg",
          photo: "subarna.jpg",
          ri: "John Kenny Rotary Club of Grangemouth Scotland"
        },
        {
          name: "Late Pratap Malla",
          date: "(2010-11)",
          theme: "building.jpg",
          photo: "pratap.jpg",
          ri: "Ray Klinginsmith Rotary Club of Kirksville Missouri, USA"
        },
        {
          name: "Dr Som P. Pudasaini",
          date: "(2011-12)",
          theme: "reach.jpg",
          photo: "som.jpg",
          ri: "Kalyan Banerjee Rotary Club of Vapi Gujarat, India"
        },
        {
          name: "Devendra N.Gongol",
          date: "(2012-13)",
          theme: "peace.jpg",
          photo: "devendra.jpg",
          ri: "Sakuji Tanaka Rotary Club of Yashio Japan"
        },
        {
          name: "Saroj Shrestha",
          date: "(2013-14)",
          theme: "engage.jpg",
          photo: "saroj.jpg",
          ri: "Ron D. Burton Rotary Club of Norman Oklahoma, USA"
        },
        {
          name: "Kul Chandra Gautam",
          date: "(2014-15)",
          theme: "light-up.jpg",
          photo: "kul-chandra.jpg",
          ri: "Gary Huang Rotary Club of Taipei Taiwan Taipei, Taiwan"
        },
        {
          name: "Paras J B Rana",
          date: "(2015-16)",
          theme: "be-a-gift.png",
          photo: "paras.jpg",
          ri: "K.R. “Ravi” Ravindran Rotary Club of Columbo Sri Lanka"
        },
        {
          name: "Shanker Sharma",
          date: "(2016-17)",
          theme: "rotary-serving.png",
          photo: "shanker.jpg",
          ri: "John F. Germ Rotary Club of Chattanooga Chattanooga, Tennessee"
        },
        {
          name: "Bhairaja Panday",
          date: "(2017-18)",
          theme: "rotary-making-difference.png",
          photo: "bhairaja.jpg",
          ri: "Ian H.S. Riseley Rotary Club of Sandringham Victoria, Australia"
        },
        {
          name: "Jo Logghe",
          date: "(2018-19)",
          photo: "jo-logghe.jpg",
          theme: "be-the-inspiration.png",
          ri: "Barry Rassin Rotary Club of East Nassau New Providence, Bahamas"
        },
        {
          name: "Neeva Mathema Pradhan",
          date: "(2019-20)",
          theme: "rotary-connects.jpg",
          photo: "neeva.jpg",
          ri: "Mark Daniel Maloney, of the Rotary Club of Decatur, Alabama, USA"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  /* text-align: center; */
}
th {
  height: 50px;
  vertical-align: middle;
}
td {
  height: 50px;
  vertical-align: middle;
}
img {
  height: 250px;
}
.logo {
  height: 150px;
  /* max-width: 250px; */
}
/* .theme{
  min-width: 300px;
} */

.custom-card {
  border: 1px solid #eee;
  /* padding: 15px; */
}

.row {
  /* height: 300px; */
  margin-bottom: 15px;

  /* margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0; */
  border-bottom: 1px solid rgba(250,167,47,0.5);
}

.date {
  line-height: 12px;
  font-size: 20px;
}

.details p {
  line-height: 16px;
}

.details h2 {
  font-size: 18px;
}
hr, .hr-president{
  background-color: #FAA72F;
}
</style>
