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
  Col
} from "reactstrap";


import Header from "components/Headers/Header.js";

class Index extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="12" lg="12">
              <Row>
                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Total Users</h4>
                <h4 style={{fontSize:"40px", color:"#73879C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                <p style={{fontSize:"13px", fontStyle:'italic',color:'#1ABB9C'}}>100%</p>
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Users</h4>
                <h4 style={{fontSize:"40px", color:"#73879C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Active Users</h4>
                <h4 style={{fontSize:"40px", color:"#1ABB9C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>
                
                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Inactive Users</h4>
                <h4 style={{fontSize:"40px", color:"#E74C3C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> New Users</h4>
                <h4 style={{fontSize:"40px", color:"#3498DB", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Total Subscriptions</h4>
                <h4 style={{fontSize:"40px", color:"#73879C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                <p style={{fontSize:"13px", fontStyle:'italic',color:'#1ABB9C'}}>100%</p>
                
                </div>
                </Col>
             </Row> 
              <br/>
             <Row>
                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> New Subscriptions</h4>
                <h4 style={{fontSize:"40px", color:"#3498DB", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Live Subscriptions</h4>
                <h4 style={{fontSize:"40px", color:"#1ABB9C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Rejected Subscriptions</h4>
                <h4 style={{fontSize:"40px", color:"#E74C3C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>
                
                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Subscriptions</h4>
                <h4 style={{fontSize:"40px", color:"#73879C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/> Total Transactions</h4>
                <h4 style={{fontSize:"40px", color:"#73879C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>

                <Col md="2" sm="4" xs="4" lg="2" > 
                <div style={{borderRight:"2px solid #73879C"}}>
                <h4 style={{fontSize:"13px", color:"#73879C",marginBottom:"0px"}}><i className="fa fa-user"/>Transactions</h4>
                <h4 style={{fontSize:"40px", color:"#1ABB9C", fontWeight:'1000px',marginBottom:"0px"}}>8</h4>
                
                </div>
                </Col>
             </Row> 
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
