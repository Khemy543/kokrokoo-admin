
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
  Col,Spinner
} from "reactstrap";
import Header from "components/Headers/Header.js";

let user = localStorage.getItem('access_token')
var domain = "https://admin.test.backend.kokrokooad.com"

class ViewMediaCompany extends React.Component {
    state={
        details:[],
        company:[],
        isActive:false,
        role:[]
    }

    componentDidMount(){
        this.setState({isActive:true})
            axios.get(`${domain}/api/admin/user/${this.props.location.state.id}/view`,
            {headers:{ 'Authorization':`Bearer ${user}`}})
            .then(res=>{
              console.log(res.data);
              this.setState({details:res.data.data.user, role:res.data.data.user.role, company:res.data.data.company, isActive:false});
            })
            .catch(error=>{
              console.log(error);
            })
    }
 
  render() {
      
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        {this.state.isActive?
          <Row>
            <Col md="12" style={{textAlign:"center"}}>
             <h4>Please Wait <Spinner size="sm" style={{marginLeft:"5px"}}/></h4> 
            </Col>
          </Row>
          :
          <Row>
            <Col  xl="10" lg="10">
            <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardHeader>
                      <h3 style={{fontWeight:600, fontSize:"14px"}}>User Information</h3>
                  </CardHeader>  
                  <CardBody>
                      <Row>
                          <Col md="12">
                            <Row>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Title</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.title}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Name</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.name}</h3>
                                </Col>
                                <Col>

                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Email</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.email}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Phone 1</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.phone1}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Phone 2</label>
                                {this.state.phone2 == null?
                                    <h3 style={{fontSize:"14px", fontWeight:600}}>Not Available</h3>
                                    :
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.phone2}</h3>
                                }
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Role</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.role.role}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Status</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.isActive}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Last Login</label>
                                {this.state.details.last_login === null?
                                <h3 style={{fontSize:"14px", fontWeight:600}}>User Not Logged In Yet</h3>
                                :
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.details.last_login}</h3>
                                }
                                </Col>
                            </Row>
                          </Col>
                      </Row>
                  </CardBody>
              </Card> 
              <br/>  
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardHeader>
                      <h3 style={{fontWeight:600, fontSize:"14px"}}>Company Information</h3>
                  </CardHeader>  
                  <CardBody>
                      <Row>
                          <Col md="12">
                            <Row>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Company Name</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.company_name}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Media House</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.media_house}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>isPublished</label>
                                {this.state.company.isPublished===1?
                                <h3 style={{fontSize:"14px", fontWeight:600}}>True</h3>
                                :
                                <h3 style={{fontSize:"14px", fontWeight:600}}>False</h3>
                                }
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Address</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.address}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Media Type</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.media_type}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Website</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.website}</h3>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Purpose</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.purpose}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Business Cert</label><br/>
                                <a target="_blank" href={`https://uploads.kokrokooad.com/${this.state.company.business_cert}`}><Button color="info"><i className="fa fa-file-text"/> Open File</Button></a>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Operation Cert</label><br/>
                                <a target="_blank" href={`https://uploads.kokrokooad.com/${this.state.company.operation_cert}`}><Button color="info"><i className="fa fa-file-text"/> Open File</Button></a>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                               <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Company Logo</label>
                                <br/>
                                <img
                                  alt="..."
                                  className=" img-fluid rounded-circle shadow"
                                  src={`https://uploads.kokrokooad.com/${this.state.company.logo}`}
                                  style={ {width: "120px",marginBottom:"10px"} }
                                ></img>
                                </Col>
                            </Row>
                          </Col>
                      </Row>
                  </CardBody>
              </Card> 
              <br/>  
              {this.state.company.hasBankDetails?
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardHeader>
                      <h3 style={{fontWeight:600, fontSize:"14px"}}>Bank Information</h3>
                  </CardHeader>  
                  <CardBody>
                      <Row>
                          <Col md="12">
                            <Row>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Bank Name</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.bank_details?.bank_name}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Bank Branch</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.bank_details?.bank_branch}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Account Name</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.bank_details?.account_name}</h3>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Account Number</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.state.company.bank_details?.account_number}</h3>
                                </Col>
                            </Row>
                          </Col>
                      </Row>
                  </CardBody>
              </Card> 
              :
              null}
            </Col>
          </Row>
        }
        </Container>
      </>
    );
  }
}

export default ViewMediaCompany;
