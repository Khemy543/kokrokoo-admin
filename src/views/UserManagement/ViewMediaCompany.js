
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

let user =null;
let loggedin_data = false;
let all_data = JSON.parse(localStorage.getItem('storageData'));
console.log("all_data:", all_data)
if(all_data !== null){
  user = all_data[0];
  loggedin_data = all_data[1];
  //get user
  console.log("user:",user);
}

class ViewMediaCompany extends React.Component {
    state={
        details:[],
        isActive:false,
    }

    componentDidMount(){
        this.setState({isActive:true})
            axios.get("https://admin-kokrokooad.herokuapp.com/api/admin/fetch/"+this.props.location.state.id+"/company",
            {headers:{ 'Authorization':`Bearer ${user}`}})
            .then(res=>{
              console.log(res.data);
              this.setState({details:res.data, isActive:false});
            })
            .catch(error=>{
              console.log(error);
            })
    }
 
  render() {
      const {id, address, business_cert,company_name, company_profile,company_type,email,industry_type,
         isPusblished, media_house,media_type,operation_cert,policy,website} = this.state.details;
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
            <Col className="mb-5 mb-xl-0" xl="10" lg="10">
              <Card style={{boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
                  <CardHeader style={{textTransform:"uppercase"}}>
                      {company_name}
                  </CardHeader>    
                  <CardBody>
                    <h4>{company_profile}</h4>
                    <h4>{company_type}</h4>
                    <h4>{address}</h4>
                    <h4>{email}</h4>
                    <h4>{industry_type}</h4>
                    <h4>{media_house}</h4>
                    <h4>{media_type}</h4>
                    <h4>{website}</h4>
                    <h4>{policy}</h4>
                    <h4>{business_cert}</h4>
                    <h4>{operation_cert}</h4>
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

export default ViewMediaCompany;
