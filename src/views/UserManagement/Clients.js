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


class Clients extends React.Component {

  state = {
    
    activeTab:"1",
    data:[],
    meta:[],
    isActive:false,
    client:[]
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) this.setState({activeTab:tab});
  }
    componentDidMount(){
       
      this.getUsers()

        this.setState({isActive:true})
        axios.get("https://admin-kokrokooad.herokuapp.com/api/admin/fetch-new-registered-accounts",
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            this.setState(()=>{
                return{client:res.data.clients,isActive:false};
            });
        })
        .catch(error=>{
            console.log(error);
            this.setState({isActive:false})
        })
    }
 
    getUsers(pageNumber=1){
      this.setState({isActive:true})
    axios.get("http://admin-kokrokooad.herokuapp.com/api/admin/get-activated-clients?page="+pageNumber+"",
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        console.log(res.data)
        this.setState({data:res.data.data, meta:res.data.meta,isActive:false})
    })
    .catch(error=>{
    });
  }

  //block client
  blockClient=(id)=>{
      this.setState({isActive:true})
      axios.post("http://admin-kokrokooad.herokuapp.com/api/admin/block/"+id+"/client-account",null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
          console.log(res.data);
          if(res.data.status === "blocked"){
            window.location.reload("/")
            this.setState({isActive:false})
        }
      })
      .catch(error=>{
          console.log(error.response.data);
      })
  }

  unBlockClient=(id)=>{
      this.setState({isActive:true})
      axios.post("http://admin-kokrokooad.herokuapp.com/api/admin/unblock/"+id+"/client-account",null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
          console.log(res.data);
          if(res.data.status === "unblocked"){
            window.location.reload("/")
            this.setState({isActive:false})
        }
      })
      .catch(error=>{
          console.log(error);
      })
  }

  handleView=(account_type, id)=>{
      if(account_type === "company"){
          this.props.history.push("/admin/company-details",{id:id})
      }
      else{
          
      }
  }


  render() {
    return (
      <>
      <LoadingOverlay 
      active = {this.state.isActive}
      spinner={<FadeLoader color={'#4071e1'}/>}
      >
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
                USER ACTIVITIES
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                style={{cursor:"pointer"}}
                    className={classnames({ active: this.state.activeTab === "2" })}
                    onClick={() => { this.toggle("2"); }}
                >
                NEW USERS
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
                    NEW USERS
                    </CardHeader>
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
                            {this.state.client.map((value,index)=>(
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
                    USER ACTIVITIES
                    </CardHeader>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Account Type</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Last Login</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, index)=>(
                        <tr key={index}>
                            <th>{value.id}</th>
                            <th>{value.name}</th>
                            <th>{value.title}</th>
                            <th>{value.company}</th>
                            <th>{value.email}</th>
                            <th>{value.phone}</th>
                            <th>{value.account_type}</th>
                            <th>{value.status}</th>
                            <th>{value.created_at.date}<br/>{value.created_at.time}</th>
                            <th>{value.last_login}</th>
                            <th>
                                <Col className="ml-auto mr-auto">
                                <Row><Button  color="info"  style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.handleView(value.account_type, value.id)}><i id="view" className="fa fa-eye"/></Button></Row>
                               
                                <Row>
                                {value.status !== "active"?
                                <Button id="unblock" color="success" style={{padding:'0px 6px 0px 6px', marginBottom:"3px" }} onClick={()=>this.unBlockClient(value.id)}><i className="fa fa-unlock"/></Button>
                                :
                                <Button id="block" color="danger" style={{padding:'0px 7px 0px 7px'}} onClick={()=>this.blockClient(value.id)}><i className="fa fa-lock"/></Button>
                                }
                                </Row>
                                
                                <Row></Row>
                                
                                </Col>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                  
                   </Table>   
                   </CardBody>
                   <CardFooter>
                   <Pagination
                   totalItemsCount={this.state.meta.total}
                   activePage={this.state.meta.current_page}
                   itemsCountPerPage={this.state.meta.per_page}
                   onChange={(pageNumber)=>this.getUsers(pageNumber)}
                   itemClass="page-item"
                   linkClass="page-link"
                   firstPageText="First"
                   lastPageText = "Last"
                   />
                   </CardFooter>    
              </Card>   
              
            </Col>
                    </Row>
                    </Container>
                    </TabPane> 
                  </TabContent>
        </Container>
        </LoadingOverlay>
      </>
    );
  }
}

export default Clients;
