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

let user =1;
let loggedin_data = false;
let all_data = JSON.parse(localStorage.getItem('storageData'));
console.log("all_data:", all_data)
if(all_data !== null){
  user = all_data[0];
  loggedin_data = all_data[1];
  //get user
  console.log("user:",user);
}


class Users extends React.Component {

    componentDidMount(){
        axios.get("https://admin-kokrokooad.herokuapp.com/api/admin/fetch-new-registered-accounts",
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error.response.data);
        })
    }
 
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="12" lg="12">
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Account</th>
                        <th>Industry</th>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <Col className="ml-auto mr-auto">
                                <Row><Button color="success" style={{padding:'0px 4px 0px 4px', marginBottom:"3px" }}><i className="fa fa-unlock"/></Button></Row>
                                <Row><Button color="danger" style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}}><i className="fa fa-lock"/></Button></Row>
                                <Row><Button color="info" style={{padding:'0px 4px 0px 4px'}}><i className="fa fa-check-square-o"/></Button></Row>
                                </Col>
                            </th>
                        </tr>
                    </tbody>
                   </Table>    
                   </CardBody>
              </Card>    
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Users;
