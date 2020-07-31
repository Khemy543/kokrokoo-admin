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
  Col,Input,InputGroup,InputGroupAddon,Label,InputGroupText,Form,Alert
} from "reactstrap";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";


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


function ChangePassword (){

    const [old_password, setPassword] = React.useState("");
    const [new_password, setNewPassword] = React.useState("");
    const [confirmPassword, setComfirmPassword] = React.useState("");
    const [alert, setAlert] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);
    const [error, setError]= React.useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
        setIsActive(true);
        if(confirmPassword !== new_password){
            setMessage("Passwords do not match");
            setAlert(true);
            setIsActive(false);
            setError(true);
        }
        else{
        axios.post("https://admin-kokrokooad.herokuapp.com/api/admin/change-password",
        {new_password,old_password},
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            if(res.data.status === "invalid password"){
                setMessage(res.data.status);
                setAlert(true);
                setIsActive(false);
                setError(true);
            }
            else if(res.data.status === "updated"){
                setMessage(res.data.status);
                setAlert(true);
                setIsActive(false);
                setError(false)
                
            }
        })
        .catch(error=>{
            console.log(error);
            setIsActive(false);
            
        })
        }
    }

    return (
      <>
      <LoadingOverlay 
      active = {isActive}
      spinner={<FadeLoader color={'#4071e1'}/>}
      >
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="10" lg="10">
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardHeader>
                      CHANGE PASSWORD
                  </CardHeader>    
                  <CardBody>
                     <Form role="form" onSubmit={handleSubmit}>
                     {alert?
                        <Alert color={error?"warning":"success"} fade={true} style={{textAlign:"center",height:"50px"}}>
                        {message}
                        </Alert>
                        :
                        <div>
                        </div>
                    }
                     <Label>Old Password</Label>    
                     <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Old Password" type="password" name="password" value={old_password} onChange={e=>setPassword(e.target.value)} required/>
                    </InputGroup>
                    <br/>
                     <Label>New Password</Label> 
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="New Password" type="password" name="npassword" value={new_password} onChange={e=>setNewPassword(e.target.value)} required/>
                </InputGroup>
                <br/>
                <Label>Confirm Password</Label> 
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Confirm Password" type="password" name="cpassword" value={confirmPassword} onChange={e=>setComfirmPassword(e.target.value)} required/>
                </InputGroup>
                <br/>
                <Row>
                    <Col>
                    <Button
                    type="submit"
                    color="info"
                    >
                    Change Password
                    </Button>    
                    </Col>
                </Row>    
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


export default ChangePassword;
