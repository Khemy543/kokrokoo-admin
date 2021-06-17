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
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,  TabContent,
  TabPane, CardFooter
} from "reactstrap";
import Pagination from "react-js-pagination";


import Header from "components/Headers/Header.js";
import { RateConsumer } from "../../context.js";

let user= null;
let all_data = JSON.parse(localStorage.getItem('storageData'));
if(all_data !== null){
  user = all_data[0];
}

var domain = "https://admin-backend.kokrokooad.com"

class Subscriptions extends React.Component {

 
    componentDidMount(){
        console.log("subscrip",user)
        axios.get(`${domain}/api/subscription/all-subscriptions`,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }


  render() {
    return (
      <>
     
      </>
    );
  }
}

export default Subscriptions;
