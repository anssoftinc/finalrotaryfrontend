import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './pages/HomePage.vue';
import GalleryPage from './pages/GalleryPage.vue'

//about section
import About from './pages/About/About.vue'
import AboutClubPage from './pages/About/AboutClubPage.vue'
import OurBoardPage from './pages/About/OurBoardPage.vue'
import OurMembersPage from './pages/About/OurMembersPage.vue'
import ShortHistoryPage from './pages/About/ShortHistoryPage.vue'
import SponsoredClubsPage from './pages/About/SponsoredClubsPage.vue'
import MeetingInfo from "./pages/About/MeetingInfo.vue"
import CharteredMembers from "./pages/About/OurCharterMember.vue"

//archives section
import Archives from "./pages/Archives/Archives.vue"
import BriefHistoryPage from './pages/Archives/BriefHistoryPage.vue'
import DistrictAwardsPage from './pages/Archives/DistrictAwardsPage.vue'
import PastPresidentsPage from './pages/Archives/PastPresidentsPage.vue'
import RotaryYearPage from './pages/Archives/RotaryYearPage.vue'


//calendar section
import Calendar from "./pages/Calendar/Calender.vue"
import CalendarPage from './pages/Calendar/CalendarPage.vue'


//contact section
import ContactUsPage from './pages/Contact/ContactUsPage.vue'
import ContactPage from './pages/Contact/ContactPage.vue'

//gallery section

import RotaryYear from "./pages/Photos/RotaryYearTest.vue";



//projects section
import ProjectsPage from './pages/Projects/ProjectsPage.vue'
import EarthquakeReliefAssistance from "./pages/Projects/EarthquakeReliefAssistance.vue";
import CommunityProjects from "./pages/Projects/CommunityProjects.vue";
import GlobalGrants from "./pages/Projects/GlobalGrants.vue";
import LookingForFunding from "./pages/Projects/LookingForFunding.vue"




//rotary year section
import RotaryYearlyPage from './pages/RotaryYear/RotaryYearlyPage.vue'
//youth force section
import InteractsPage from './pages/YouthForce/InteractsPage.vue'
import RotractsPage from './pages/YouthForce/RotractsPage.vue'
import BrochuresPage from './pages/YouthForce/BrochuresPage.vue'
import VideosPage from './pages/YouthForce/VideosPage.vue'

import NewsAndUpdates from "./pages/NewsAndUpdates.vue"
import ViewAllBlogs from "./pages/ViewAllBlogs.vue"
import PageNotFound from "./pages/PageNotFound.vue"

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth'
      })
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
      path: '/',
      name: 'home',
      component: HomePage,
      hide: true
    },
    {
      path: "/news-updates/all",
      name: "View All Blogs",
      component: ViewAllBlogs,
      hide: true
    },
    {
      path: "/news-updates/:id",
      name: "news and updates",
      component: NewsAndUpdates,
      hide: true
    },

    {
      path: '/about',
      name: 'About',
      component: About,
      children: [{
          path: "about",
          name: "About Our Club",
          component: AboutClubPage
        },
        {
          path: "meeting-info",
          name: "Meeting Information",
          component: MeetingInfo
        },

        {
          path: "our-board",
          name: "Our Board",
          component: OurBoardPage
        },
        {
          path: "our-members",
          name: "Our Members",
          component: OurMembersPage
        },
        {
          path: "chartered-members",
          name: "Charter Members",
          component: CharteredMembers
        },
        {
          path: "sponsored-clubs",
          name: "sponsored clubs",
          component: SponsoredClubsPage

        },

      ],
    },
    {
      path: "/our-projects",
      name: "Our Projects",
      component: ProjectsPage,
      children: [{
          path: "global-grants",
          name: "Global Grants",
          component: GlobalGrants
        },
        {
          path: "earthquake-relief-assistance",
          name: "Earthquake Relief Assistance",
          component: EarthquakeReliefAssistance,
          // children: [{
          //     path: "livlihoods",
          //     name: "livlihoods",
          //     component: livlihoods
          //   },
          //   {
          //     path: "tri-ratna",
          //     name: "Triratna",
          //     component: TriRatna
          //   },
          //   {
          //     path: "NavaKiranHelpless",
          //     name: "NavaKiranHelpless",
          //     component: NavaKiranHelpless
          //   },
          //   {
          //     path: "ParbatiSchool",
          //     name: "ParbatiSchool",
          //     component: ParbatiSchool
          //   }
          // ]
        },
        {
          path: "community-projects",
          name: "Community Projects",
          component: CommunityProjects
        },
        {
          path: "looking-for-funding",
          name: "Looking For Funding",
          component: LookingForFunding
        },

        // {
        //   path: "gift-of-sight",
        //   name: "gift of sight",
        //   component: ProjectsPage,
        //   hash: "#section1"
        // },
        // {
        //   path: "global-grants-first-steps",
        //   name: "global grants first steps",
        //   component: ProjectsPage,
        //   hash: "#section2"
        // },
        // {
        //   path: "global-grants-preventing-hearing-loss",
        //   name: "global grants preventing hearing loss",
        //   component: ProjectsPage,
        //   hash: "#section3"
        // },
        // {
        //   path: "global-grants-simpani-water-lifting-projects",
        //   name: "global grants simpani water lifting projects",
        //   component: ProjectsPage,
        //   hash: "#section4"

        // },

      ]
    },
    {
      path: "/photos",
      name: "photos",
      component: GalleryPage,
      children: [{
          path: "rotary-year",
          name: "Rotary Year Photos",
          component: RotaryYear
        },

        {
          path: "videos",
          name: "videos",
          component: VideosPage

        },


      ]
    },
    {
      path: "/archives",
      name: "archives",
      component: Archives,
      children: [{
          path: "past-presidents",
          name: "past presidents",
          component: PastPresidentsPage

        },
        {
          path: "brief-club-history",
          name: "brief club history",
          component: BriefHistoryPage

        },
        {
          path: "rotary-years",
          name: "rotary years",
          component: RotaryYearPage

        },

      ]
    },
    {
      path: "/youth-force",
      name: "Youth Force",
      component: GalleryPage,
      children: [{
          path: "rotaracts",
          name: "Rotaracts",
          component: RotractsPage
        },
        {
          path: "rotracts",
          name: "interacts",
          component: InteractsPage

        },
      ]
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
      children: [{
          path: "rotary-designated-months",
          name: "rotary designated months",
          component: CalendarPage

        },

      ]
    },
    {
      path: "/contact-us",
      name: "contact us",
      component: ContactPage,
      children: [{
        path: "contact-information",
        name: "Contact Information",
        component: ContactUsPage
      }]
    },

    {
      path: '*',
      component: PageNotFound,
      hide: true

    }


  ]
})