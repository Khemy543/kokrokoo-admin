/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Media from "views/UserManagement/Media.js";
import Clients from "views/UserManagement/Clients.js";
import Profile from "views/Settings/Profile.js";
import ChangePassword from "views/Settings/ChangePassword.js";
import Login from "views/examples/Login.js";
import ViewMediaCompany from "views/UserManagement/ViewMediaCompany.js";
import TV from "views/RateCard/TV.js";
import Radio from "views/RateCard/Radio.js";
import Print from "views/RateCard/Print.js";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    header:"dashboard",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/media",
    name: "Media",
    header:"user",
    component: Media,
    layout: "/admin"
  },
  {
    path: "/clients",
    name: "Clients",
    header:"user",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/company-details",
    name: "Company Details",
    header:"user",
    invisible:true,
    component: ViewMediaCompany,
    layout: "/admin"
  },
  {
    
    path: "/subscription",
    name: "Subscriptions",
    header:"subscriptions",
    component: Clients,
    layout: "/admin"
  },
  {
    
    path: "/tv-media-companies",
    name: "TV Media",
    header:"rate",
    component: TV,
    layout: "/admin"
  },
  {
    path: "/radio-media-companies",
    name: "Radio Media",
    header:"rate",
    component: Radio,
    layout: "/admin"
  }, 
  {
    path: "/print-media-companies",
    name: "Print Media",
    header:"rate",
    component: Print,
    layout: "/admin"
  }, 
  {
    path: "/transactions",
    name: "Transactions",
    header:"transactions",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/daily-report",
    name: "Daily",
    header:"report",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/general-report",
    name: "General",
    header:"report",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/summary",
    name: "Summary",
    header:"report",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/audit-trail",
    name: "Audit Trial",
    header:"report",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Profile",
    header:"settings",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/change-password",
    name: "Change Password",
    header:"settings",
    component: ChangePassword,
    layout: "/admin"
  },
  {
    path: "/create-admin",
    name: "Create",
    header:"admin",
    component: Clients,
    layout: "/admin"
  },
  {
    path: "/admins",
    name: "Admins",
    header:"admin",
    component: Clients,
    layout: "/admin"
  }
];
export default routes;
