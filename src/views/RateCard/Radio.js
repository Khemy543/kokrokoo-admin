
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
  Col
} from "reactstrap";
import Header from "components/Headers/Header.js";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";

let user = localStorage.getItem('access_token')
var domain = "https://admin.test.backend.kokrokooad.com"

class Radio extends React.Component {
    state={
        details:[],
        isActive:false,
    }

    componentDidMount(){
        this.setState({isActive:true})
            axios.get(`${domain}/api/admin/get-media/2/companies`,
            {headers:{ 'Authorization':`Bearer ${user}`}})
            .then(res=>{
              console.log(res.data);
              this.setState({isActive:false})
            })
            .catch(error=>{
              console.log(error);
            })
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
        <Container className="mt--7" fluid>
          <Row>
            
          </Row>
        </Container>
        </LoadingOverlay>
      </>
    );
  }
}

export default Radio;
