
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
  Col, Input
} from "reactstrap";
import Header from "components/Headers/Header.js";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";

let user = localStorage.getItem('access_token')
var domain = "https://admin.test.backend.kokrokooad.com"

class RegistrationAmount extends React.Component {
    state={
        isActive:false,
        amount:"",
        currency:"GHS"
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.currency, this.state.amount)
        axios.post(`${domain}/api/admin/set/registration/amount`,
        {amount:this.state.amount, currency:this.state.currency},
        {headers:{'Authorization':`Bearer ${user}`}})
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
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col md="6">
                <Card>
                    <CardHeader>
                        SET MEDIA REGISTRATION AMOUNT
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={this.handleSubmit}>
                        <Input type="number" value={this.state.amount} onChange={e=>this.setState({amount:e.target.value})}/>
                        <Input type="select" value={this.state.currency} onChange={e=>this.setState({currency:e.target.value})}>
                            <option value="GHS">GHS</option>
                            <option value="USD">USD</option>
                        </Input>
                        <Button type="submit">Save</Button>
                        </form>
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

export default RegistrationAmount;
