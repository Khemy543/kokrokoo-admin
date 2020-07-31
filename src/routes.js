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
import Users from "views/UserManagement/Users.js";
import Profile from "views/Settings/Profile.js";
import ChangePassword from "views/Settings/ChangePassword.js";
import Login from "views/examples/Login.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    header:"dashboard",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    header:"user",
    component: Users,
    layout: "/admin"
  },
  {
    
    path: "/subscription",
    name: "Subscriptions",
    header:"subscriptions",
    component: Users,
    layout: "/admin"
  },
  {
    
    path: "/tv-and-radio",
    name: "TV % Radio",
    header:"rate",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/paper",
    name: "Paper",
    header:"rate",
    component: Users,
    layout: "/admin"
  }, 
  {
    path: "/transactions",
    name: "Transactions",
    header:"transactions",
    component: Users,
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
    component: Users,
    layout: "/admin"
  },
  {
    path: "/summary",
    name: "Summary",
    header:"report",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/audit-trail",
    name: "Audit Trial",
    header:"report",
    component: Users,
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
    component: Users,
    layout: "/admin"
  },
  {
    path: "/admins",
    name: "Users",
    header:"admin",
    component: Users,
    layout: "/admin"
  }
];
export default routes;
