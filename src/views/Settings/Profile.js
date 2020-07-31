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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";

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


class Profile extends React.Component {

  state={
    username:"",
    email:"",
    phone:"",
    role:"",
    title:"", 
    id:"",
    isActive:false
  }

componentDidMount(){
  this.setState({isActive:true})
  axios.get("https://admin-kokrokooad.herokuapp.com/api/admin",{
    headers:{ 'Authorization':`Bearer ${user}`}
        }
        )
        .then(res=>{
        console.log(res.data)
        if(res.data !== null){
          this.setState({
            username:res.data.name, 
            email:res.data.email,
            phone:res.data.phone,
            title:res.data.title,
            id:res.data.id,
            role:res.data.role,
            isActive:false
          })
        }

        }).catch(error=>{
        console.log(error)
        });
}


handleSubmit=(e)=>{
  e.preventDefault();
  console.log(e);
  this.setState({isActive:true})
  console.log(this.state.id)
  axios.post("https://admin-kokrokooad.herokuapp.com/api/admin/update-profile",{ _method:"PATCH",
  name:this.state.username, email:this.state.email,phone:this.state.phone,title:this.state.title,role:this.state.role},{
    headers:{ 'Authorization':`Bearer ${user}`}})
  .then(res=>{
    console.log(res.data)
  })
  .catch(error=>{
    console.log(error.response.data)
  })
}

  render() {
    return (
      <>
      <LoadingOverlay 
      active = {this.state.isActive}
      spinner={<FadeLoader color={'#4071e1'}/>}
      >
        <UserHeader userName={this.state.username}/>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                
                <CardBody className="pt-0 pt-md-4">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <div className="text-center">
                    <h3>
                      {this.state.username}
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {this.state.title}
                    </div>
                    
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form onSubmit = {this.handleSubmit}>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.username}
                              id="input-username"
                              placeholder="Username"
                              type="text"
                              onChange={e=>this.setState({username:e.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Email"
                              value={this.state.email}
                              type="email"
                              onChange={e=>this.setState({email:e.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Phone
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.phone}
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              onChange={e=>this.setState({phone:e.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Role
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.role}
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              onChange={e=>this.setState({role:e.target.value})}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                        <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-title"
                            >
                              Title
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.title}
                              id="input-title"
                              placeholder="Title"
                              type="text"
                              onChange={e=>this.setState({title:e.target.value})}
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                    </div>
                    <hr className="my-4" />
                    
                    <Button
                      color="info"
                      type="submit"
                    >
                  Edit profile
                </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </LoadingOverlay>
      </>
    );
  }
}

export default Profile;
