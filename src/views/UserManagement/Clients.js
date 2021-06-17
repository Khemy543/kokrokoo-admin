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
  Table,
  Container,
  Row,
  Col,  TabContent,
  TabPane, CardFooter,Spinner, Modal, ModalHeader,ModalFooter
} from "reactstrap";
import Pagination from "react-js-pagination";


import Header from "components/Headers/Header.js";

let user = localStorage.getItem('access_token')
var domain = "https://admin-backend.kokrokooad.com"

class Clients extends React.Component {

  state = {
    
    activeTab:"1",
    data:[],
    meta:[],
    isActive:false,
    client:[],
    modal:false,
    alertmessage:"",
    deleteModal:false,
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) this.setState({activeTab:tab});
  }
    componentDidMount(){
       
      this.getUsers()
        axios.get(`${domain}/api/admin/fetch-new-registered-client-accounts`,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            this.setState(()=>{
                return{client:res.data};
            });
        })
        .catch(error=>{
            console.log(error);
        })
    }
 
    getUsers(pageNumber=1){
      this.setState({isActive:true})
    axios.get(`${domain}/api/admin/get-activated-client?page=${pageNumber}`,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        console.log(res.data)
        this.setState({data:res.data.data, meta:res.data.meta, isActive:false})
    })
    .catch(error=>{
      console.log(error)
    });
  }


  // activate account
  activateAccount=(id)=>{
    let tempClient = this.state.client;
    let tempData = this.state.data;
    axios.post(`${domain}/api/admin/activate-client/${id}/account`,null,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
      console.log(res.data)
      let selected = tempClient.find(item=>item.id === id);
      selected.isActive = "active";
      selected.id = tempData.length + 1;
      tempData.push(selected);
      console.log(tempData)
      let newData = tempClient.filter(item => item.id !== id);
      this.setState({client:newData, data:tempData, modal:true, alertmessage:"Account Activated!"})

    })
    .catch(error=>{
      console.log(error)
    })
  }
  //block client
  blockClient=(id)=>{
    let tempData = this.state.data;
      axios.post(`${domain}/api/admin/block/${id}/client-account`,null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
          console.log(res.data);
          let selected = tempData.find(item=>item.id === id);
          selected.isActive = "inactive"
          this.setState({data:tempData, modal:true,alertmessage:"Account Blocked!"})
      })
      .catch(error=>{
          console.log(error);
      })
  }

  unBlockClient=(id)=>{
    let tempData = this.state.data;
      axios.post(`${domain}/api/admin/unblock/${id}/client-account`,null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
          console.log(res.data);
          let selected = tempData.find(item=>item.id === id);
          selected.isActive = "active"
          this.setState({data:tempData, modal:true, alertmessage:"Account Unblocked!"})
      })
      .catch(error=>{
          console.log(error);
      })
  }

  handleView=( id)=>{
          this.props.history.push("/admin/client-details",{id:id})
      
  }

  //handleReject
handleReject=(id)=>{
  let tempData = this.state.client;
  axios.post(`${domain}/api/admin/reject/${id}/client-account`,null,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
    console.log(res.data);
    let newData = tempData.filter(item=>item.id !== id)
    this.setState({client:newData, modal:true, alertmessage:"Accounut Rejected"})
  })
  .catch(error=>{
    console.log(error)
  })
}


  render() {
    return (
      <>
        <Header />
        
        {/* Page content */}
        <Container className="mt--8" fluid>
        {this.state.isActive?
          <Row>
            <Col md="12" style={{textAlign:"center"}}>
             <h4>Please Wait <Spinner size="sm" style={{marginLeft:"5px"}}/></h4> 
            </Col>
          </Row>
          :
          <>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
            <Nav role="tablist" tabs>
                <NavItem>
                <NavLink
                style={{cursor:"pointer", fontWeight:600, fontSize:"13px"}}
                    className={classnames({ active: this.state.activeTab === "1" })} 
                    onClick={() => { this.toggle("1"); console.log("1") }}
                >
                CLIENT ACTIVITIES
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                style={{cursor:"pointer", fontWeight:600, fontSize:"13px"}}
                    className={classnames({ active: this.state.activeTab === "2" })}
                    onClick={() => { this.toggle("2"); }}
                >
                NEW CLIENTS
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
                    <h3 style={{fontSize:"13px", fontWeight:600}}>NEW CLIENTS</h3>
                    </CardHeader>
                        <CardBody style={{overflowX:"scroll"}}>
                        <Table bordered>
                        <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                              <tr>
                              <th>#</th>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Company Name</th>
                              <th>Created At</th>
                              <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                            {this.state.client.map((value,index)=>(
                                  <tr>
                                  <th>{index+1}</th>
                                  <th>{value.id}</th>
                                  <th>{value.name}</th>
                                  <th>{value.email}</th>
                                  <th>{value.phone1}</th>
                                  {value.company === null?
                                  <th>None</th>
                                  :
                                  <th>{value.company.name}</th>
                                  }
                                  <th>{value.created_at.date} {value.created_at.time}</th>
                                  <th>
                                      <Col className="ml-auto mr-auto">
                                      <Row><Button id="unblock" color="success" style={{padding:'0px 6px 0px 6px', marginBottom:"3px" }} onClick={()=>this.activateAccount(value.id)}><i className="fa fa-unlock"/></Button></Row>
                                      <Row><Button  color="info"  style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.handleView(value.id)}><i className="fa fa-eye"/></Button></Row>
                                      <Row><Button color="danger" style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.setState({id:value.id, deleteModal:true})}><i className="fa fa-close"/></Button></Row>
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
                <h3 style={{fontSize:"13px", fontWeight:600}}>CLIENT ACTIVITIES</h3>
                    </CardHeader>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company Name</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((value, index)=>(
                        <tr key={index}>
                        <th>{index+1}</th>
                            <th>{value.name}</th>
                            <th>{value.email}</th>
                            <th>{value.phone1}</th>
                            {value.company === null?
                                  <th>None</th>
                                  :
                                  <th>{value.company.name}</th>
                                  }
                            <th>{value.created_at.date} {value.created_at.time}</th>
                            <th>{value.isActive}</th>
                                  <th>{value.last_login}</th>
                            <th>
                                <Col className="ml-auto mr-auto">
                                <Row><Button  color="info"  style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.handleView(value.id)}><i id="view" className="fa fa-eye"/></Button></Row>
                               
                                <Row>
                                {value.isActive !== "active"?
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
        </>
        }
        <Modal isOpen={this.state.modal}>
          <ModalHeader style={{color:"black"}}>
          {this.state.alertmessage}
          </ModalHeader>
          <ModalFooter>
          <Button color="danger" onClick={()=>this.setState({modal:false})}>
            close
          </Button>
          </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.deleteModal}>
          <ModalHeader style={{color:"black"}}>
          Reject Account?
          </ModalHeader>
          <ModalFooter>
          <Button color="danger" onClick={()=>{this.handleReject(this.state.id); this.setState({deleteModal:false})}}>
            Yes
          </Button>
          <Button color="info" onClick={()=>this.setState({deleteModal:false})}>
            No
          </Button>
          </ModalFooter>
          </Modal>
        </Container>
      </>
    );
  }
}

export default Clients;
