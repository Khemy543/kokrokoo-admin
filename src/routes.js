import Index from "views/Index.js";
import Media from "views/UserManagement/Media.js";
import Clients from "views/UserManagement/Clients.js";
import Profile from "views/Settings/Profile.js";
import ChangePassword from "views/Settings/ChangePassword.js";
import Login from "views/examples/Login.js";
import ViewMediaCompany from "views/UserManagement/ViewMediaCompany.js";
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
import CRateSelectMediaType from "views/RateCard/CreateRateCards/SelectMediaType";
import CRateSelectMediaHouse from 'views/RateCard/CreateRateCards/SelectMediaHouse.js'
import CreateRateCardTitle from "views/RateCard/CreateRateCards/RateCardTitle";
import VRateSelectMediaType from "views/RateCard/ViewRateCards/SelectMediaType";
import VRateSelectMediaHouse from "views/RateCard/ViewRateCards/SelectMediaHouse";
import RateCardDetails from "views/RateCard/CreateRateCards/RateCardDetails";
import VideoPreview from "views/RateCard/CreateRateCards/VideoPreview";
import PrintRateDetails from "views/RateCard/CreateRateCards/PrintRateCardDetails";
import PrintPreview from "views/RateCard/CreateRateCards/PrintPreview";
import ERateSelectMediaType from "views/RateCard/CreateFrom Existing/SelectMediaType";
import ERateSelectMediaHouse from 'views/RateCard/CreateFrom Existing/SelectMediaHouse.js';
import ESelectRateCard from "views/RateCard/CreateFrom Existing/SelectRateCard";
import CreateExistingTitle from "views/RateCard/CreateFrom Existing/RateCardTitle";
import VSelectRateCard from "views/RateCard/ViewRateCards/SelectRateCard";
import ViewRateCardPrint from "views/RateCard/ViewRateCards/ViewRateCardPrint";
import ViewRateCardVideo from "views/RateCard/ViewRateCards/ViewRateCardVideo";

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
    path: "/view-ratecard",
    name: "View Ratecard",
    header:"rate",
    component: VRateSelectMediaType,
    layout: "/admin"
  },
  {
    path: "/view-media-house",
    name: "Media Houses",
    invisible:true,
    header:"rate",
    component: VRateSelectMediaHouse,
    layout: "/admin"
  },
  {
    
    path: "/create-ratecard",
    name: "Create Ratecard",
    header:"rate",
    component: CRateSelectMediaType,
    layout: "/admin"
  },
  {
    path: "/select-media-house",
    name: "Select Media House",
    invisible:true,
    header:"rate",
    component: CRateSelectMediaHouse,
    layout: "/admin"
  },
  {
    path: "/rate-card-title",
    name: "Rate Card Title",
    invisible:true,
    header:"rate",
    component: CreateRateCardTitle,
    layout: "/admin"
  }, 
  {
    path: "/rate-details",
    name: "Rate Card Details",
    invisible:true,
    header:"rate",
    component: RateCardDetails,
    layout: "/admin"
  },
  {
    path: "/print-rate-details",
    name: "Rate Card Details",
    invisible:true,
    header:"rate",
    component: PrintRateDetails,
    layout: "/admin"
  },
  {
    path: "/video-preview",
    name: "Preview",
    invisible:true,
    header:"rate",
    component: VideoPreview,
    layout: "/admin"
  },
  {
    path: "/print-preview",
    name: "Preview",
    invisible:true,
    header:"rate",
    component: PrintPreview,
    layout: "/admin"
  },
  
  {
    path: "/create-existing",
    name: "Create From Existing",
    header:"rate",
    component: ERateSelectMediaType,
    layout: "/admin"
  },
  {
    path: "/existing-media-house",
    name: "Select Media House",
    invisible:true,
    header:"rate",
    component: ERateSelectMediaHouse,
    layout: "/admin"
  },
  {
    path: "/existing-select-rateCard",
    name: "Select RateCard",
    invisible:true,
    header:"rate",
    component: ESelectRateCard,
    layout: "/admin"
  },
  
  {
    path: "/exiting-title",
    name: "Enter Ratecard Title",
    invisible:true,
    header:"rate",
    component: CreateExistingTitle,
    layout: "/admin"
  },
  {
    path: "/select-rate-card",
    name: "Select RateCard",
    invisible:true,
    header:"rate",
    component: VSelectRateCard,
    layout: "/admin"
  },
  {
    path: "/print-details",
    name: "Ratecard Details",
    invisible:true,
    header:"rate",
    component: ViewRateCardPrint,
    layout: "/admin"
  },
  
  {
    path: "/video-details",
    name: "Ratecard Details",
    invisible:true,
    header:"rate",
    component: ViewRateCardVideo,
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
