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
  Col,Tooltip,TabContent,
  TabPane, CardFooter
} from "reactstrap";


import Header from "components/Headers/Header.js";
import { RateConsumer } from "../../context.js";

let user= null;
let all_data = JSON.parse(localStorage.getItem('storageData'));
if(all_data !== null){
  user = all_data[0];
}

class Media extends React.Component {

  state={
    tool1:false,
    tool2:false,
    tool3:false,
    activeTab:"1",
    media:[]
  }

  componentDidMount(){
    this.setState({isActive:true})
    axios.get("https://admin-kokrokooad.herokuapp.com/api/admin/fetch-new-registered-accounts",
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        console.log(res.data);
        this.setState(()=>{
            return{media:res.data.media_admins,isActive:false};
        });
    })
    .catch(error=>{
        console.log(error);
        this.setState({isActive:false})
    })
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) this.setState({activeTab:tab});
  }

  toggle1=()=>this.setState({tool1:!this.state.tool1})
  toggle2=()=>this.setState({tool2:!this.state.tool2})
  toggle3=()=>this.setState({tool3:!this.state.tool3})


 
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--8" fluid>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
            <Nav role="tablist" tabs>
                <NavItem>
                <NavLink
                style={{cursor:"pointer"}}
                    className={classnames({ active: this.state.activeTab === "1" })} 
                    onClick={() => { this.toggle("1"); console.log("1") }}
                >
                MEDIA ACTIVITIES
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                style={{cursor:"pointer"}}
                    className={classnames({ active: this.state.activeTab === "2" })}
                    onClick={() => { this.toggle("2"); }}
                >
                NEW MEDIA COMPANIES
                </NavLink>
                </NavItem>
            </Nav>
            </div>
            </div>

            {/* tab content */}
            <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="2">
                 <Container>   
          <Row>
            <Col className="mb-5 mb-xl-0" xl="12" lg="12">
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                <CardHeader>
                  NEW MEDIA COMPANIES
                </CardHeader>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Industry</th>
                        <th>Admin</th>
                        <th>Title</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.media.map((value,index)=>(
                        <tr>
                            <th>{value.company.id}</th>
                            <th>{value.company.name}</th>
                            <th>{value.company.industry}</th>
                            <th>{value.name}</th>
                            <th>{value.title}</th>
                            <th>{value.phone}</th>
                            <th>{value.email}</th>
                            <th>{value.created_at.date}<br/> {value.created_at.time}</th>
                            <th>{value.status}</th>
                            <th>
                                <Col className="ml-auto mr-auto">
                                <Row><Button  color="info"  style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.props.history.push("/admin/company-details",{id:value.id})}><i id="view" className="fa fa-eye"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool1} target="view" toggle={()=>this.toggle1}>
                                  view company
                                </Tooltip>
                                <Row><Button id="unblock" color="success" style={{padding:'0px 6px 0px 6px', marginBottom:"3px" }}><i className="fa fa-unlock"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool2} target="unblock" toggle={()=>this.toggle2}>
                                  unblock
                                </Tooltip>
                                <Row><Button id="block" color="danger" style={{padding:'0px 7px 0px 7px'}} ><i className="fa fa-lock"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool3} target="block" toggle={()=>this.toggle3}>
                                  block
                                </Tooltip>
                                </Col>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                  
                   </Table> 
                   </CardBody>
              </Card>    
            </Col>
          </Row>
          </Container>
          </TabPane>
          <TabPane tabId="1">
            <Container>
            <Row>
            <Col className="mb-5 mb-xl-0" xl="12" lg="12">
            <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
            <CardHeader>
                  MEDIA ACTIVITIES
                </CardHeader>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
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
                            <th>
                                <Col className="ml-auto mr-auto">
                                <Row><Button  color="info"  style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} ><i id="view" className="fa fa-eye"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool1} target="view" toggle={()=>this.toggle1}>
                                  view company
                                </Tooltip>
                                <Row><Button id="unblock" color="success" style={{padding:'0px 6px 0px 6px', marginBottom:"3px" }}><i className="fa fa-unlock"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool2} target="unblock" toggle={()=>this.toggle2}>
                                  unblock
                                </Tooltip>
                                <Row><Button id="block" color="danger" style={{padding:'0px 7px 0px 7px'}} ><i className="fa fa-lock"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool3} target="block" toggle={()=>this.toggle3}>
                                  block
                                </Tooltip>
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
            </TabPane>   
          </TabContent>
        </Container>
      </>
    );
  }
}

export default Media;