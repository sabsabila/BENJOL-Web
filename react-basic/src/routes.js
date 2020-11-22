/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
       restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Dashboard from "pages/Dashboard";
import Bengkel from "pages/Bengkel";
import Services from "pages/Services";
import AboutUs from "pages/AboutUs";
import OurPartners from "pages/OurPartners";
import Spareparts from "pages/Spareparts";

export const APP_ROUTE = [

  {
    name: "Dashboard",
    path: "/",
    exact: true,
    component: Dashboard,
    private: false,
  },
  {
    name: "Bengkel",
    path: "/bengkel",
    exact: true,
    component: Bengkel,
  },
  {
    name: "Services",
    path: "/services",
    exact: true,
    component: Services,
    restricted: false,
  },

  {
    name: "AboutUs",
    path: "/aboutus",
    exact: true,
    component: AboutUs,
    restricted: false,
  },

  {
    name: "OurPartners",
    path: "/ourpartners",
    exact: true,
    component: OurPartners,
    restricted: false,
  },

  {
    name: "Spareparts",
    path: "/spareparts",
    exact: true,
    component: Spareparts,
    restricted: false,
  },

];
