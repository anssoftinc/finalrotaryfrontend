<template>
  <div class="container p-4" id="top">
    <h1 class="text-left">Earthquake Relief Assistance</h1>
    <hr class="my-4" />
    <div class="custom-card pl-5 pr-5">
      <div class="row align-items-center">
        <div class="col-md-5">
          <img src="/images/our-projects/earthquake-1.jpg" class="img-fluid" alt />
        </div>

        <div class="col-md-7">
          <h2 class="p-3">Earthquake Fund</h2>
          <p
            class="text-justify p-3"
          >Since the devastating earthquake of 2015 we have received funding from 51 Rotary Clubs around the world to provide earthquake relief assistance. We initially helped by supplying tarps and corrugated iron sheets immediately after the earthquake and we continue to follow-up with long-term reconstruction of schoolrooms, toilets, and alternative livelihoods options. Please see detailed information in our reports at:</p>
          <ul>
            <li>
              <a
                href="/images/our-projects/first-report.pdf"
                target="_blank"
              >First Earthquake Relief Assistance Report, May 2015</a>
            </li>
            <li>
              <a
                href="/images/our-projects/second-report.pdf"
                target="_blank"
              >Second Earthquake Relief Assistance Report, July 2015</a>
            </li>
            <li>
              <a
                href="/images/our-projects/third-report.pdf"
                target="_blank"
              >Third Earthquake Relief Assistance Report, Nov 2015</a>
            </li>
            <li>Final Earthquake Relief Assistance Report -- pending</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img src="/images/our-projects/earthquake-3.jpg" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <img src="/images/our-projects/earthquake-2.jpg" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <img src="/images/our-projects/earthquake-5.jpg" class="img-fluid" />
        </div>
      </div>

      <h2 class="mt-3">International Contributors to our Earthquake Fund:</h2>
      <p>Our partners: The Rotary Club of Kathmandu Mid-Town would like to thank the following international clubs and individuals who have helped us with earthquake reconstruction:</p>

      <div class="row align-items-center list">
        <div class="col-md-3 pb-3">RC Bendigo, Australia</div>
        <div class="col-md-3 pb-3">RC Stratford, Ontario, Canada</div>
        <div class="col-md-3 pb-3">RC Parry Sound, Canada</div>
        <div class="col-md-3 pb-3">RC Asolo e Pedemontana, Italy</div>
        <div class="col-md-3 pb-3">RC Higashiosaka Nishi, Japan</div>
        <div class="col-md-3 pb-3">RC Leatherhead, UK</div>
        <div class="col-md-3 pb-3">RC Littlehampton, UK</div>
        <div class="col-md-3 pb-3">RC Okehampton, UK</div>
        <div class="col-md-3 pb-3">RC Cheshire Priory, UK</div>
        <div class="col-md-3 pb-3">RC Eastbourne, UK</div>
        <div class="col-md-3 pb-3">Rtn Pradeep Wagh in India</div>
        <div class="col-md-3 pb-3">Andree Bichon in Ottawa, Canada</div>
        <div class="col-md-3 pb-3">Anonymous, Denmark</div>
        <div class="col-md-3 pb-3">Anonymous New York City, USA</div>
        <div class="col-md-3 pb-3">Anonymous, UK</div>
        <div class="col-md-3 pb-3">Rtn Bruno Malla and Family</div>
        <div class="col-md-3 pb-3">Dr Chaudhary in India</div>
        <div class="col-md-3 pb-3">RC Santa Rosa Sunrise, USA</div>
        <div class="col-md-3 pb-3">Lantern Projects, USA</div>
        <div class="col-md-3 pb-3">RC San Lorenzo Valley, USA</div>
        <div class="col-md-3 pb-3">RC South Bay Sunrise, USA</div>
        <div class="col-md-3 pb-3">RC South Portland, Maine,USA</div>
        <div class="col-md-3 pb-3">RC Hunt Valley MD, USA</div>
        <div class="col-md-3 pb-3">RC Los Gatos Morning Rotary, USA</div>
        <div class="col-md-3 pb-3">RC Napa Noon Rotary, USA</div>
        <div class="col-md-3 pb-3">RC Oakland, USA</div>
        <div class="col-md-3 pb-3">RC Portsmouth NH, USA</div>
        <div class="col-md-3 pb-3">RC Reno Central, USA</div>
        <div class="col-md-3 pb-3">RC Reno Rotary Foundation, Reno, USA</div>
        <div class="col-md-3 pb-3">RC Salt Lake City, USA</div>
        <div class="col-md-3 pb-3">RC San Francisco Evening, USA</div>
        <div class="col-md-3 pb-3">RC Auburn, Washington, USA</div>
        <div class="col-md-3 pb-3">RC Galveston Island, Texas, USA</div>
        <div class="col-md-3 pb-3">RC Galveston, Texas,USA</div>
        <div class="col-md-3 pb-3">RC Green Hills Rotary Club, USA</div>
        <div
          class="col-md-3"
        >Rotary Hilfe E.V. Leonberg-Weil Rtn Gerhard Pees and a Rotary Club in Stuttgart,Germany</div>
      </div>
      <div class="py-4">
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Completed and ongoing earthquake-related projects include the following:</h2>
            <ul>
              <li>
                <b>Immediate relief after the earthquake</b>
                – with the help of our Rotaract Club
                we were able to help donate and distribute tents, tarpaulins, food supplies,
                corrugated iron sheets, and the like soon after the earthquake. We would like
                to acknowledge the help of our Rotary International District 3292 who gave
                matching funds for every corrugated iron sheet donated.
                <router-link
                  :to="{name:'Earthquake Relief Assistance',hash:'#immediate-relief'}"
                >See Details</router-link>
              </li>
              <li>
                <b>Livelihoods Project in Nuwakot</b> - A post-earthquake reconstruction project that
                supported diversification of livelihoods by promoting coffee and organic vegetable
                production.
                <router-link :to="{name:'Earthquake Relief Assistance',hash:'#nuwakot'}">See Details</router-link>
              </li>
              <li>
                <b>Shree Amarpur Om Prasad Gautam Higher Secondary School in Gulmi</b> - reconstructing three+1 new, safe, child-friendly classrooms, a multipurpose
                covered hall and terrace for student activities and teachers’ use, and a sanitary toilet
                block.
                <router-link :to="{name:'Earthquake Relief Assistance',hash:'#gulmi'}">See Details</router-link>
              </li>

              <li>
                <b>Parbati School, Dhungkhadka, Kavre</b> - reconstruction of classrooms in the primary
                section and a toilet complex.
                <router-link :to="{name:'Earthquake Relief Assistance',hash:'#parbati'}">See Details</router-link>
              </li>
              <li>
                <b>Tri-Ratna Cooperative School, Bungamati</b>

                <router-link
                  :to="{name:'Earthquake Relief Assistance',hash:'#bungmati'}"
                >&nbsp;See Details</router-link>
              </li>
              <li>
                <b>NavaKiran Helpless and Orphaned Children Society</b> - refurbishing of an area
                approx. 500sq ft) for orphaned, deprived, and disabled children.
                <router-link
                  :to="{name:'Earthquake Relief Assistance',hash:'#navakiran-helpless'}"
                >See Details</router-link>
              </li>

              <li>
                <b>
                  Post-earthquake ‘Build Back Better’ efforts at the Kanti Ishwari School and the
                  Ajad Primary
                </b> – work with two inner-city schools that are still in very poor condition
                still four years after the disaster. They need a hand up to know that they have not
                been forgotten and to help them to build back better after the earthquake.
                <router-link :to="{name:'Earthquake Relief Assistance',hash:'#kanti'}">See Details</router-link>
              </li>
              <li>
                <b>Shitaldanda Basic School, Ajirkot-3, Hansapur, Gorkha School-</b> toilet
                construction as part of a larger reconstruction effort.
              </li>
              <li>
                <b>Phulchowki HS School, Thaiba -</b> a small project to plaster the roof to reinforce it.
              </li>
              <li>
                <b>Tistung Janata Primary School School -</b> a water supply project to replace the one
                damaged during the earthquake.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p id="immediate-relief"></p>
    <div class="custom-card">
      <div class="row">
        <!-- <div class="col-md-3 text-center">
          <img src="/images/our-projects/Immediate-relief-1.jpg" class="img-fluid" alt />
          <img src="/images/our-projects/Immediate-relief-2.jpg" class="img-fluid" alt />
        </div>
          <div class="col-md-3 text-center">
          <img src="/images/our-projects/Immediate-relief-1.jpg" class="img-fluid" alt />
          <img src="/images/our-projects/Immediate-relief-2.jpg" class="img-fluid" alt />
        </div> -->
        <div class="col-md-12">
          <h4>Immediate relief after the earthquake</h4>

          <p
            class="text-justify"
          >The first few days after the April 25th earthquake there was so much uncertainty, different reports were coming in from the field and phone communication was intermittent. The one constant was that everyone who was asking for help was asking for some kind of shelter or cover from the elements for people who had lost their homes. Tents, tarpaulins, and corrugated iron sheets were in very short supply but we worked quickly to secure more than 1300 tarpaulins: including 400 donated by UNHCR; and about 375 donated by our own Rotary International District 3292.</p>
          <p
            class="text-justify"
          >In the three weeks following the earthquake, we distributed tents and tarpaulins to affected districts as follows: Sindhupalchowk: 450; Gorkha: 350; Kavre: 170; Nuwakot: 94; Makwanpur: 50; Kathmandu: 75; and Dhading: 100. Most of these items, together with 150 solar lamps (donated by UNHCR), were delivered by truck, while some transport was donated, in most cases RC KTM Mid-Town paid for the transport. In one case, where the roads were blocked and we heard the situation was dire, we delivered some 150 tents to the most affected areas in Sindupalchowk by helicopter. See full details in First Earthquake Relief Assistance Report, May 2015.</p>
          <a href="/images/our-projects/first-report.pdf" target="_blank">See Detailed Report</a>
          <!-- <div class="row pt-3">
            <div class="col-md-6">
              <img src="/images/our-projects/Immediate-relief-3.jpg" class="img-fluid" alt />
            </div>
            <div class="col-md-6">
              <img src="/images/our-projects/Immediate-relief-4.jpg" class="img-fluid" alt />
            </div>
          </div> -->
        </div>
        <div class="row px-3 mt-2">
   <div class="col-md-3 text-center">
          <img src="/images/our-projects/Immediate-relief-1.jpg" class="img-fluid" alt />
        </div>
          <div class="col-md-3 text-center">
                   <img src="/images/our-projects/Immediate-relief-2.jpg" class="img-fluid" alt />
        </div>
         <div class="col-md-3">
              <img src="/images/our-projects/Immediate-relief-3.jpg" class="img-fluid" alt />
            </div>
            <div class="col-md-3">
              <img src="/images/our-projects/Immediate-relief-4.jpg" class="img-fluid" alt />
            </div>
        </div>
      </div>
    </div>

    <p id="section-coffee"></p>
    <div class="custom-card mt-4">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="/images/our-projects/coffee-project.jpg" class="img-fluid" alt />
        </div>
        <p id="nuwakot"></p>
        <div class="col-md-8 p-3">
          <h4>Livelihoods Project in Nuwakot</h4>

          <p class="text-justify">
            This project is in collaboration with our friends at the Rotary Club of Singapore. The Earthquake Fund has helped to develop opportunities for improved livelihood and food security of communities in Nuwakot District. These earthquake affected communities are learning: organic vegetable production; seed preservation; and enterprise development. Women’s groups are learning now to grow organic vegetables and will develop the entrepreneurial and technical skills to successfully grow, harvest, process, and market coffee in Kathmandu and regionally.
            This success story was also covered in the Nepali weekly, Nepali Times, article, “Four years later, Nepal’s farmers rise from the rubble One day Kathmandu’s cappuccinos will be made with beans grown by Nuwakot’s earthquake-hit farmers”.
            <a
              href="/images/our-projects/nuwakot.pdf"
            >See detailed report</a>
          </p>
        </div>
      </div>
    </div>
    <p id="gulmi"></p>
    <div class="custom-card">
      <div class="row">
        <!-- <div class="col-md-4 text-center">
          <img src="/images/our-projects/gulmi-1.jpg" class="img-fluid" alt />
           <img src="/images/our-projects/gulmi-2.jpg" class="img-fluid" alt />
        </div> -->
        <div class="col-md-12">
          <h4>Shree Amarpur Om Prasad Gautam Higher Secondary School in Gulmi</h4>

          <p
            class="text-justify"
          >Thanks to the support of our Earthquake Fund and with a special thanks to the Rotary Club of Salt Lake City, the Amarpur High School now has two additional child-friendly and safe classrooms and a multipurpose covered hall and terrace for student activities and teachers’ use.</p>
          <p
            class="text-justify"
          >It is to be noted that the first two floors of the new school were built with support from the Gulmi District Education Office and the local community following the 2015 earthquake that had damaged an adjacent two floor school block, which has now been safely demolished. The new building was designed and built in a robust earthquake resistant manner with strong foundations.</p>
          <p class="text-justify">
            One of the classrooms in the newly built school, now serves as e-library as part of an earlier project supported by RC Kathmandu Mid-Town in partnership with OLE Nepal. In 2016-17 a small but safe and hygienic toilet block was also constructed in the school premises with earlier support from RC Kathmandu Mid-Town.
            As a result of all this, nearly 450 students (250 girls and 200 boys) and about 20 teachers and staff are now able to use the reconstructed premises to ensure basic education in this remote, needy community.
          </p>
          <div class="row">
                 <div class="col-md-4">
          <img src="/images/our-projects/gulmi-1.jpg" class="img-fluid" alt />

            </div>
            <div class="col-md-4">
              <img src="/images/our-projects/gulmi-2.jpg" class="img-fluid" alt />
            </div>
            <div class="col-md-4">
              <img src="/images/our-projects/gulmi-3.jpg" class="img-fluid" alt />
            </div>
       
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <!-- <img src="/images/our-projects/Immediate-relief-2.jpg" class="img-fluid" alt /> -->
        </div>
        <div class="col-md-4">
          <!-- <img src="/images/our-projects/Immediate-relief-3.jpg" class="img-fluid" alt /> -->
        </div>
        <div class="col-md-4">
          <!-- <img src="/images/our-projects/Immediate-relief-4.jpg" class="img-fluid" alt /> -->
        </div>
      </div>
    </div>

    <p id="parbati"></p>
    <div class="custom-card">
      <div class="row">
        <div class="col-md-4">
          <img src="/images/our-projects/parbati-2.jpg" class="img-fluid"  style="height:250px;"/>
        </div>
        <div class="col-md-8 p-3">
          <h4>Parbati School, Dhungkhadka, Kavre</h4>
          <p class="text-justify">
            The Earthquake Fund helped with immediate relief after the earthquake and also with longer term reconstruction of classrooms in the primary section and a toilet complex. See the complete report at :
            <a
              href="/images/our-projects/parbati-school.pdf"
              target="_blank"
            >EARTHQUAKE FUND PARBATI SCHOOL</a>
          </p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <h2>Before:</h2>
          <img src="/images/our-projects/parbati-1.jpg" class=" parbati-school-img img-fluid" />
        </div>
        <div class="col-md-4">
          <h2>After:</h2>
          <div class="row">
            <img src="/images/our-projects/parbati-3.jpg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <!-- <p id="navakiran-helpless"></p>
    <div class="custom-card">
      <div class="row">
        <div class="col-md-12 p-3">
          <h4>NavaKiran Helpless and Orphaned Children Society</h4>
          <p class="text-justify">
            NavaKiran Helpless and Orphaned Children Society is a charity organization that protects, shelters, and educates 42 needy and orphaned children; it is located in Dhapakhel, Lalitpur, Nepal.
            Post-earthquake reconstruction and improvement at NavaKiran Helpless and Orphaned Children Society has been supported both by the Earthquake fund and by the Rotary Club of Livermore, San Francisco California, USA; the funds were used to refurbish of an area approx. 500 sq ft.
            Looking for Funding: This orphanage is now looking to expand an additional 500 sq ft. and to add a solar water heater.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <h2>Before:</h2>
          <img src="/images/our-projects/navakiran-1.jpg" class="img-fluid" />
        </div>
        <div class="col-md-4">
          <h2>After:</h2>
          <img src="/images/our-projects/navakiran-2.jpg" class="img-fluid" />
        </div>
      </div>
    </div>-->

    <p id="bungmati"></p>
    <div class="custom-card">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="/images/our-projects/bungamati_new.jpg" class="img-fluid" alt />
        </div>
        <div class="col-md-8 p-3">
          <h4>Bungamati School</h4>

          <p class="text-justify">
            Tri-Ratna Cooperative School, Bungamati – was established in 1992; it educates 232 children from the disadvantaged communities of Bungamati and neighboring villages (Chunikhel, Farsidole, Dukuchhap, Chhampi, Sainbu). It was very badly hit during the 2015 earthquake.
            <br />This project is in collaboration with our Rotary District 3292’s ERRRP (Earthquake Relief, Rehabilitation and Reconstruction Program) and the Rotary Club of Nanaimo Daybreak, Canada.
          </p>
          <!-- <img src="/images/our-projects/bungmati-logo.jpg" width="120" /> -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <img src="/images/our-projects/bungmati2.jpg" class="img-fluid" />
        </div>
        <div class="col-md-3">
          <img src="/images/our-projects/bungmati3.jpg" class="img-fluid" />
        </div>
        <div class="col-md-3">
          <img src="/images/our-projects/bungmati4.jpg" class="img-fluid" />
        </div>
        <div class="col-md-3">
          <img src="/images/our-projects/bungmati5.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="row text-center mt-3">
        <div class="col-md-3">
          <img src="/images/our-projects/bungmati6.jpg" class="img-fluid text-center" />
        </div>
        <div class="col-md-6">
          <img src="/images/our-projects/bungmatiteam.jpg" class="img-fluid text-center" />
        </div>
        <div class="col-md-3">
           <img src="/images/our-projects/bungmati1.jpg" class="img-fluid" alt />
        </div>
      </div>
    </div>

    <!--  <img src="/images/our-projects/bungmati1.jpg" class="img-fluid" alt /> -->

    <p id="kanti"></p>
    <div class="custom-card">
      <div class="row">
        <div class="col-md-12">
          <h4>Post-earthquake ‘Build back better’ efforts at the Kanti Ishwari School and the Ajad Primary School</h4>

          <div class="row">
            <div class="col-md-4">
              <img
                src="/images/our-projects/Post earthquake bulild back better -1.jpg"
                class="img-fluid"
              />
            </div>
            <div class="col-md-4">
              <img
                src="/images/our-projects/Post earthquake bulild back better -2.jpg"
                class="img-fluid"
              />
            </div>
          </div>
          <p
            class="text-justify"
          >Both of these schools, which are located in very old buildings in Kathmandu’s inner downtown core, were heavily damaged by the 2015 earthquake and have ‘red sticker’ status (unsafe, serious damage). They have not received sufficient post-earthquake reconstruction aid to help them improve the education that they provide to the 200 children of this mostly migrant community. At present they are surviving with the help of small NGO’s and the community.</p>
          <p
            class="text-justify"
          >With the help of matching funds from our Rotary District 3292’s ERRRP (Earthquake Relief, Rehabilitation and Reconstruction Program), our Earthquake Fund, and the Daya Foundation we will work to</p>
          <ul>
            <li>Improve the classroom quality/infrastructure, water and sanitation and schooling facilities of the Kanti Ishwari School located in Pyafal.</li>
            <li>Improve the classroom quality/infrastructure and furniture of the Sree Ajad Primary School located in Lagan Deukhel.</li>
          </ul>
        </div>
      </div>
    </div>
    <p id="navakiran-helpless"></p>
    <NavakiranHelpless />
  </div>
</template>


<script>
import NavakiranHelpless from "./NavaKiranHelpless";
export default {
  data() {
    return {};
  },
  components: {
    NavakiranHelpless
  },
  mounted() {}
};
</script>

<style scoped>
.logo {
  width: 150px;
}
.how-section1 {
  /* margin-top: -15%;
  padding: 10%; */
}
.how-section1 h4 {
  /* color: #019fcb;
  font-weight: bold;
  font-size: 20px; */
}
.how-section1 .subheading {
  color: #3931af;
  font-size: 20px;
}
.how-section1 .row {
  margin-top: 6%;
}

.custom-card {
  margin-top: 20px;
  padding: 15px 15px;
  background: #fff;
}

.custom-card-text {
  /* padding: 10px 20px; */
}

.list {
  font-weight: bold;
  font-size: 14px;
}
.custom-card img {
  padding-bottom: 15px;
}
a{
  color:#025198;
}
hr{
  background-color: #FAA72F;
}
a:hover{
text-decoration-color: #FAA72F;
}
.parbati-school-img{
height: 237px;
}
</style>
