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
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,Container,Alert
} from "reactstrap";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import AuthNavbar from "../../components/Navbars/AuthNavbar.js"

var domain = "https://admin-backend.kokrokooad.com"

function Login({history}){
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isActive , setIsActive] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [eye, setEye] = React.useState(false);
  const toggleEye=()=>setEye(!eye);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e)
    setIsActive(true);

    axios.post(`${domain}/oauth/token`,{
      grant_type: "password",
      client_id: 1, 
      client_secret:"wMLCpjqZs0rZnYESOeTSpWi6r58abMuQxWyEq3PM",
      username: username,
      password: password,
      provider: "admins",
    headers:{"Content-Type": "application/json", "Accept": "application/json"}}
  )
    .then(res=>{
      console.log(res.data)
      if(res.data.status === "success"){
        const token_data  = res.data.access_token;
        localStorage.setItem('access_token',token_data);
        window.location.reload("/");
        setIsActive(false);
      }
    })
    .catch(error=>{
      console.log(error.response.data)
      setIsActive(false);
      setAlert(true)
    })
  }

    return (
      <>
      <LoadingOverlay 
      active = {isActive}
      spinner={<FadeLoader color={'#4071e1'}/>}
      >
      <AuthNavbar />
      <Container>
        <Row>
        <Col lg="5" md="7" className="ml-auto mr-auto mt-7 mb-auto">
          <Card className="shadow border-0">
            
            <CardBody className="px-lg-5 py-lg-5">
              <h3 className="text-center">ADMIN LOGIN</h3>
              {alert?
                  <Alert color="warning" fade={true} style={{textAlign:"center",height:"50px"}}>
                  Incorrect Credentials
                </Alert>
                :
                <div>
                </div>
                }
              <div className="text-center text-muted mb-4">
                
              </div>
              <Form role="form" onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" name="username" value={username} onChange={e=>setUsername(e.target.value)} required/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Password" type={eye?"text":"password"} name="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                  <InputGroupAddon addonType="append">
                  <InputGroupText>
                  <i className={!eye?"fa fa-eye-slash":"fa fa-eye"} onClick={toggleEye} style={{cursor:"pointer"}}/>
                  </InputGroupText>
                </InputGroupAddon>
                </InputGroup>
              </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
        </Row>
        </Container>
        </LoadingOverlay>
      </>
    );
  }


export default Login;
