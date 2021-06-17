
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

class ViewSubMediaDetails extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col  xl="10" lg="10">
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
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.props.location.state.value.company_name}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Media House</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.props.location.state.value.media_house}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>isPublished</label>
                                {this.props.location.state.value.isPublished===1?
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
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.props.location.state.value.address}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Media Type</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.props.location.state.value.media_type}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Website</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.props.location.state.value.website}</h3>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                            <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Purpose</label>
                                <h3 style={{fontSize:"14px", fontWeight:600}}>{this.props.location.state.value.purpose}</h3>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Business Cert</label><br/>
                                <a target="_blank" href={`https://uploads.kokrokooad.com/${this.props.location.state.value.business_cert}`}><Button color="info"><i className="fa fa-file-text"/> Open File</Button></a>
                                </Col>
                                <Col>
                                <label style={{fontSize:"10px", fontWeight:600, textTransform:"uppercase"}}>Operation Cert</label><br/>
                                <a target="_blank" href={`https://uploads.kokrokooad.com/${this.props.location.state.value.operation_cert}`}><Button color="info"><i className="fa fa-file-text"/> Open File</Button></a>
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
                                  src={`https://uploads.kokrokooad.com/${this.props.location.state.value.logo}`}
                                  style={ {width: "120px",marginBottom:"10px"} }
                                ></img>
                                </Col>
                            </Row>
                          </Col>
                      </Row>
                  </CardBody>
              </Card> 
              <br/>  
              {/* {this.state.company.hasBankDetails?
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
              null} */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ViewSubMediaDetails;
