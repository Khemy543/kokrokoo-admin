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
import { Link } from "react-router-dom";
import axios from "axios";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";
import { RateConsumer } from "../../context.js";

let user = localStorage.getItem('access_token')
var domain = "https://admin-backend.kokrokooad.com"

class AdminNavbar extends React.Component {
state={
    username:""
  }

componentDidMount(){
  axios.get(`${domain}/api/admin`,{
    headers:{ 'Authorization':`Bearer ${user}`}
        }
        )
        .then(res=>{
        console.log(res.data)
        if(res.data !== null){
          this.setState({username:res.data.name})
        }

        }).catch(error=>{
        console.log(error)
        });
}
  
  
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark shadow" expand="md" id="navbar-main">
          <Container fluid>
            <div
              className="h4 mb-0 text-uppercase d-none d-lg-inline-block"
              
            >
              {this.props.brandText}
            </div>
          {/*   <Form className="navbar-search navbar form-inline mr-3 d-none d-md-flex ml-lg-auto" style={{color:"rgba(50, 50, 93, 0.62)"}}>
              <FormGroup className="mb-0" style={{color:"rgba(50, 50, 93, 0.62)"}}>
                <InputGroup className="input-group-alternative" style={{color:"rgba(50, 50, 93, 0.62)"}}>
                  <InputGroupAddon addonType="prepend" style={{color:"rgba(50, 50, 93, 0.62)"}}>
                    <InputGroupText style={{color:"rgba(50, 50, 93, 0.62)"}}>
                      <i className="fa fa-search" style={{color:"rgba(50, 50, 93, 0.62)"}}/>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search" type="text" style={{color:"rgba(50, 50, 93, 0.62)"}}/>
                </InputGroup>
              </FormGroup>
            </Form> */}
            <RateConsumer>
              {value=>(
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                   {/*  <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span> */}
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold" style={{color:"#32325d"}}>
                        {this.state.username}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/user-profile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => value.logout()} style={{cursor:'pointer'}}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          )}
            </RateConsumer>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
