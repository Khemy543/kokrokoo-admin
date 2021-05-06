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
  Container,
  Row,
  Col,Input,InputGroup,InputGroupAddon,Label,InputGroupText,Form,Alert,
  Modal,
  ModalHeader,ModalFooter
} from "reactstrap";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";


import Header from "components/Headers/Header.js";

let user = localStorage.getItem('access_token')
var domain = "https://admin.test.backend.kokrokooad.com"


function ChangePassword (){

    const [old_password, setPassword] = React.useState("");
    const [new_password, setNewPassword] = React.useState("");
    const [confirmPassword, setComfirmPassword] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [modal, setModal] = React.useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e);
        if(confirmPassword !== new_password){
            setMessage("Passwords do not match");
            setModal(true)
        }
        else{
        axios.post(`${domain}/api/admin/change-password`,
        {new_password,old_password},
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            if(res.data.status === "invalid password"){
                setMessage(res.data.status);
                setModal(true);
            }
            else if(res.data.status === "updated"){
                setMessage(res.data.status);
                setModal(true);
                
            }
        })
        .catch(error=>{
            console.log(error);
            
        })
        }
    }

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mr-auto ml-auto" md="6" sm="12" xs="12" xl="6" lg="6">
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardHeader style={{fontSize:"14px", fontWeight:600}}>
                      CHANGE PASSWORD
                  </CardHeader>    
                  <CardBody>
                     <Form  onSubmit={handleSubmit}>
                     <Label style={{fontSize:"13px",fontWeight:600}}>Old Password</Label>    
                     <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Old Password" type="password" name="password" value={old_password} onChange={e=>setPassword(e.target.value)} required/>
                    </InputGroup>
                    <br/>
                     <Label style={{fontSize:"13px",fontWeight:600}}>New Password</Label> 
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="New Password" type="password" name="npassword" value={new_password} onChange={e=>setNewPassword(e.target.value)} required/>
                </InputGroup>
                <br/>
                <Label style={{fontSize:"13px",fontWeight:600}}>Confirm Password</Label> 
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
        <Modal isOpen={modal}>
          <ModalHeader style={{color:"black"}}>
          {message}
          </ModalHeader>
          <ModalFooter>
          <Button color="danger" onClick={()=>setModal(false)}>
            close
          </Button>
          </ModalFooter>
          </Modal>
      </>
    );
  }


export default ChangePassword;
