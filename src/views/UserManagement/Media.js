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
  Col,Tooltip,TabContent,
  TabPane, CardFooter,Spinner,Modal,ModalFooter,ModalHeader
} from "reactstrap";
import Pagination from "react-js-pagination";


import Header from "components/Headers/Header.js";

let user = localStorage.getItem('access_token');

var domain = "https://admin-backend.kokrokooad.com";

class Media extends React.Component {

  state={
    tool1:false,
    tool2:false,
    tool3:false,
    activeTab:"1",
    data:[],
    meta:[],
    media:[],
    isActive:false,
    modal:false,
    alertmessage:"",
    deleteModal:false,
    id:null
  }

  componentDidMount(){
    axios.get(`${domain}/api/admin/fetch-new-registered-media-accounts`,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        console.log(res.data);
        this.setState({media:res.data.data});
    })
    .catch(error=>{
        console.log(error.response.data);
        this.setState({isActive:false})
    })

    this.getMedia()
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) this.setState({activeTab:tab});
  }

  togglePublish=(id,isPublished)=>{
    let tempData = [...this.state.data];
    let url = `${domain}/api/admin/publish/${id}/media-company`;
    if(isPublished == 1){
      url = `${domain}/api/admin/unpublish/${id}/media-company`
    }
    axios.post(url, null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(response=>{
      let selected = tempData.find(item=>item.company && item.company.id == id);
      console.log(selected)
      if(isPublished == 1){
        selected.company.isPublished = 0;
      }
      else{
        selected.company.isPublished = 1;
      }
      this.setState({data:tempData})
      
    })
    .catch(error=>{

    })
  }

  toggle1=()=>this.setState({tool1:!this.state.tool1})
  toggle2=()=>this.setState({tool2:!this.state.tool2})
  toggle3=()=>this.setState({tool3:!this.state.tool3})

  //get media
  getMedia(pageNumber=1){
    this.setState({isActive:true})
  axios.get(`${domain}/api/admin/get-activated-media-admin?page=${pageNumber}`,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
      console.log(res.data)
      this.setState({data:res.data.data, meta:res.data.meta,isActive:false})
  })
  .catch(error=>{
    console.log(error)
  });
}


// activate account
activateAccount=(id)=>{
  let tempMedia = this.state.media;
  let tempData = this.state.data;
  axios.post(`${domain}/api/admin/activate-user/${id}/account`,null,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
    console.log(res.data)
      let selected = tempMedia.find(item=>item.id === id);
      selected.isActive = "active";
      selected.id = tempData.length + 1;
      console.log(selected)/* 
      tempData.push(selected); */
      let newData = tempMedia.filter(item => item.id !== id);
      this.setState({modal:true, alertmessage:"Account Activated Successfully"})
  })
  .catch(error=>{
    console.log(error)
  })
}

//block media
blockMedia=(id)=>{
  console.log("blocking...")
  let tempData = this.state.data
  axios.post(`${domain}/api/admin/block/${id}/client-account`,null,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
      console.log(res.data);
      let selected = tempData.find(item=>item.id === id);
      selected.isActive = "inactive";
      this.setState({data:tempData,modal:true, alertmessage:"Account Blocked!"})
  })
  .catch(error=>{
      console.log(error.response.data);
  })
}


//unblock media
unBlockMedia=(id)=>{
  let tempData = this.state.data
  console.log("unblocking ....")
  axios.post(`${domain}/api/admin/unblock/${id}/client-account`,null,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
      console.log(res.data);
      let selected = tempData.find(item=>item.id === id);
      selected.isActive = "active";
      this.setState({data:tempData,modal:true, alertmessage:"Account Unblocked!"})
  })
  .catch(error=>{
      console.log(error.response.data);
  })
}

//handle VIew
handleView=( id)=>{
  this.props.history.push("/admin/company-details",{id:id})

}

//handleReject
handleReject=(id)=>{
  let tempData = this.state.media;
  axios.post(`${domain}/api/admin/reject/${id}/media-account`,null,
  {headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
    console.log(res.data);
    let newData = tempData.filter(item=>item.id !== id)
    this.setState({media:newData, modal:true, alertmessage:"Accounut Rejected"})
  })
  .catch(error=>{
    console.log(error.response.data)
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
                MEDIA ACTIVITIES
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                style={{cursor:"pointer", fontWeight:600, fontSize:"13px"}}
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
                  <h3 style={{fontSize:"13px", fontWeight:600}}>NEW MEDIA COMPANIES</h3>
                </CardHeader>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Media Type</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created At</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.media.map((value,index)=>(
                        <tr>
                            <th>{index+1}</th>
                            <th>{value.company.name}</th>
                            <th>{value.company.media_type.mediaType}</th>
                            <th>{value.name}</th>
                            <th>{value.email}</th>
                            <th>{value.phone1}</th>
                            <th>{value.created_at.date} {value.created_at.time}</th>
                            <th>
                               <Row>
                                <Col className="ml-auto mr-auto">
                                <Button style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.props.history.push("/admin/company-details",{id:value.id})}><i id="view" className="fa fa-eye"/></Button>
                                <Button color="info" style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.activateAccount(value.id)}><i className="fa fa-unlock"/></Button>
                                <Button color="danger" style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.setState({id:value.id, deleteModal:true})}><i className="fa fa-close"/></Button>
                               </Col>
                                </Row>
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
            <h3 style={{fontSize:"13px", fontWeight:600}}>MEDIA ACTIVITIES</h3>
                </CardHeader>
                  <CardBody style={{overflowX:"scroll"}}>
                   <Table bordered>
                   <thead style={{backgroundColor:"#01a9ac",color:"black"}}>
                        <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Media Type</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th>Action</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((value, index)=>(
                        <tr>
                        <th>{index+1}</th>
                            <th>{value.company.name}</th>
                            <th>{value.company.media_type}</th>
                            <th>{value.name}</th>
                            <th>{value.email}</th>
                            <th>{value.phone1}</th>
                            <th>{value.created_at.date}<br/> {value.created_at.time}</th>
                            <th>{value.isActive}</th>
                            <th>{value.last_login}</th>
                            <th>
                                <Col className="ml-auto mr-auto">
                                <Row><Button  color="info"  style={{padding:'0px 6px 0px 6px', marginBottom:"3px"}} onClick={()=>this.handleView(value.id)}><i id="view" className="fa fa-eye"/></Button></Row>
                                <Tooltip placement="right" isOpen={this.state.tool1} target="view" toggle={()=>this.toggle1}>
                                  view company
                                </Tooltip>
                                {value.isActive !=="active"?
                                <Row><Button id="unblock" color="success" style={{padding:'0px 6px 0px 6px', marginBottom:"3px" }} onClick={()=>this.unBlockMedia(value.id)}><i className="fa fa-unlock"/></Button></Row>
                                :
                                <Row><Button id="block" color="danger" style={{padding:'0px 7px 0px 7px'}} onClick={()=>this.blockMedia(value.id)}><i className="fa fa-lock"/></Button></Row>
                                }
                                </Col>
                            </th>
                            <th>
                            <label class="switch">
                              <input type="checkbox" checked={value.company && value.company.isPublished == 1} onChange={e=>this.togglePublish(value.company && value.company.id,value.company && value.company.isPublished)}/>
                              <span class="slider round"></span>
                            </label>
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
                   onChange={(pageNumber)=>this.getMedia(pageNumber)}
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

export default Media;
