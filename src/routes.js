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
import Subscriptions from "views/Subscriptions/Subscriptions";
import ViewClientDetails from "views/UserManagement/ViewClientDetails";
import RegistrationAmount from "views/Transactions/RegistrationAmount";
import SelectMediaType from "views/VolumeDiscount/SelectMediaType";
import SelectMedia from "views/VolumeDiscount/SelectMedia";
import AddDiscount from "views/VolumeDiscount/AddDiscount";
import GetMediatype from "views/VolumeDiscount/GetMediaType";
import GetMedia from "views/VolumeDiscount/GetMedia";
import GetVolumeDiscount from "views/VolumeDiscount/GetVolumeDiscount";
import PendingPo from "views/PO/PendingPo";
import ApprovedPo from "views/PO/ApprovedPo";
import RejectedPo from "views/PO/RejectedPo";
import ViewPendingPo from "views/PO/ViewPendingPo";
import ViewApprovedPos from "views/PO/ViewApprovedPos";
import ViewRejectePos from "views/PO/ViewRejectedPos";


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
    path: "/client-details",
    name: "Client Details",
    header:"user",
    invisible:true,
    component: ViewClientDetails,
    layout: "/admin"
  },
  {
    
    path: "/subscription",
    name: "Campaigns",
    header:"subscriptions",
    component: Subscriptions,
    layout: "/admin"
  },
  {
    
    path: "/tv-media-companies",
    name: "TV",
    header:"rate",
    component: TV,
    layout: "/admin"
  },
  {
    path: "/radio-media-companies",
    name: "Radio",
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
    path: "/registration-amount",
    name: "Registration Amount",
    header:"transactions",
    component: RegistrationAmount,
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
  },
  {
    path: "/select-mediatype",
    name: "Set Discount",
    header:"volume",
    component: SelectMediaType,
    layout: "/admin"
  },
  {
    path: "/select-mediahouse",
    name: "Volume Discount",
    header:"volume",
    component: SelectMedia,
    invisible:true,
    layout: "/admin"
  },
  {
    path: "/add-discount",
    name: "Volume Discount",
    header:"volume",
    component: AddDiscount,
    invisible:true,
    layout: "/admin"
  },
  {
    path: "/get-mediatype",
    name: "View Discount",
    header:"volume",
    component: GetMediatype,
    layout: "/admin"
  },
  {
    path: "/get-mediahouse",
    name: "Volume Discount",
    header:"volume",
    component: GetMedia,
    invisible:true,
    layout: "/admin"
  },
  {
    path: "/get-discount",
    name: "Volume Discount",
    header:"volume",
    component: GetVolumeDiscount,
    invisible:true,
    layout: "/admin"
  },
  {
    path: "/pending-pos",
    name: "Pending Purchase Order",
    header:"po",
    component: PendingPo,
    layout: "/admin"
  },
  {
    path: "/approved-pos",
    name: "Approved Purchase Order",
    header:"po",
    component: ApprovedPo,
    layout: "/admin"
  },
  {
  path: "/rejected-pos",
  name: "Rejected Purchase Order",
  header:"po",
  component: RejectedPo,
  layout: "/admin"
  },
  {
    path: "/view-pending-pos",
    name: "Purchase Order",
    invisible:true,
    header:"po",
    component: ViewPendingPo,
    layout: "/admin"
  },
  {
    path: "/view-approved-pos",
    name: "Purchase Order",
    invisible:true,
    header:"po",
    component: ViewApprovedPos,
    layout: "/admin"
  },
  {
    path: "/view-rejected-pos",
    name: "Purchase Order",
    invisible:true,
    header:"po",
    component: ViewRejectePos,
    layout: "/admin"
  }
];
export default routes;
