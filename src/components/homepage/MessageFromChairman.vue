<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">MESSAGES FOR 2019-2020</h1>
        <div class="container">
          <div class="message-name row mt-3 text-center">
            <!-- <h2
              class="btn-messages p-2 mr-3 mt-2 text-center"
              v-for="(item,index) in message"
              :key="item"
              :class="currentMessage==index?'active':''"
              @click="clickEv(index)"
            >{{item}}</h2>-->
            <a href="#neeva">
              <h2 class="btn-messages p-2 mr-3 mt-2 text-center">Kathmandu Mid-town President</h2>
            </a>
            <a href="#district">
              <h2 class="btn-messages p-2 mr-3 mt-2 text-center">District Governor</h2>
            </a>
            <a href="#rotary">
              <h2 class="btn-messages p-2 mr-3 mt-2 text-center">Rotary International President</h2>
            </a>
          </div>
        </div>
        <hr class="neeva-hr" />

        <p id="neeva"></p>
        <div class="row section">
          <div class="col-md-4 text-center">
            <img src="/images/neeva.jpg" class="img-fluid" />
          </div>
          <div class="col-md-8 text-center">
            <h2 class="my-3 name">Neeva Mathema Pradhan - Kathmandu Mid-town President</h2>
            <p
              class="text-justify"
            >“You may say I’m a dreamer, but I’m not the only one. I hope someday you’ll join us...” said John Lennon, alluding to human connections and creating a one world family. To me, human connection is an integral part of happiness, having a sense of belonging, finding a deeper purpose in life, and experiencing an expansion of the mind. When I sense this connection, that is when I feel responsibility towards the other and this inspires positive action.</p>
            <p
              class="text-justify"
            >Rotary’s slogan of “Service Above Self” is exactly this deep sense of responsibility as a result of belonging and connection with the world. Let us begin by connecting the Rotary to our family, friends, other Rotarians and our community. How can we create better opportunities to connect and belong? How can we use this amazing platform to be happier humans and have a greater impact around us? We will hone in on meaningful and sustainable projects to bring positive change in our society. Let us take responsibility to enrich ourselves with vibrant fellowships and creative partnerships. This year, in our Club’s 30 years anniversary, let us be aware of the interconnected nature of our existence and celebrate our journey together.</p>
            <i>
              “Whatever affects one directly, affects all indirectly”
              Martin Luther King Jr
            </i>
          </div>
        </div>
        <hr />

        <p id="district"></p>
        <div class="row section">
          <div class="col-md-4 text-center">
            <img src="/images/kiran.jpg" class="img-fluid" />
          </div>
          <div class="col-md-8">
            <h2 class="my-3 name">Kiran Lal Shrestha - District Governor</h2>
            <p
              class="text-justify"
            >To connect the world, we must engage our members in service projects for the needy communities and fellowship among the members and with our families. Bringing our family and children into Rotary will definitely add to Rotary's values within our family.</p>
            <p
              class="text-justify"
            >In Rotary, leadership is only for one year, so within these 366 days, you have to plan everything from club activities to membership activities and serving a needy community to fellowship among Rotarians and family, so please plan properly and make it like fun and dance, then only can you enjoy Rotary and you will be able to connect yourself with your family, club members and community.</p>
          </div>
        </div>
        <hr />

        <p id="rotary"></p>
        <div class="row section mt-4">
          <div class="col-md-4">
            <img src="/images/daniel.jpg" class="img-fluid" width="img-fluid" />
          </div>

          <div class="col-md-8">
            <h2 class="my-3 name">Daniel Maloney - Rotary International President</h2>
            <p
              class="text-justify"
            >Rotary is built on connections. . . , we have at our disposal countless ways to form friendships and networks, most of which Paul Harris never dreamed. Yet Rotary’s ability to connect us remains unique — and unrivaled.</p>
            <p
              class="text-justify"
            >In 2019-2020, it will be our challenge to strengthen the many ways that Rotary Connects the World, building the connections that allow talented, thoughtful, and generous people to unite and take meaningful action through Rotary service.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentMessage: 0,
      message: [
        "Ktm Mid-Town President",
        "District Governor",
        "Rotary International President"
      ]
    };
  },

  methods: {
    clickEv(index) {
      this.currentMessage = index;
    }
  }
};
</script>


<style scoped>
.section h2 {
  margin-bottom: 0;
}
.name {
  font-size: 24px;
  /* color: #343a40 !important; */
}
hr {
  background-color: #faa72f;
}
.message-name {
  cursor: pointer;
}

.btn-messages {
  /* color: var(--primary-blue); */
  color: #025198;
  text-decoration: none;
  border: 1px solid;
  font-size: 16px;
  /* padding: 7px 20px;
  line-height: 47px; */
  text-transform: uppercase;
}

.btn-messages:hover {
  text-decoration: none;
  color: #fff !important;
  /* background: var(--primary-blue); */
  background: #025198;
}

.active {
  /* border-bottom: 2px solid var(--primary-blue) !important;
  padding-bottom: 5px; */
  text-decoration: none;
  color: #fff;
  /* background: var(--primary-blue); */
  background: #025198;
}

a {
  text-decoration: none;
}

@media (max-width: 992px) {
  h2 {
    font-size: 1em;
  }
}
@media only screen and (max-width: 768px) {
}
</style>

