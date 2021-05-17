import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Input,
  Button
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";

var domain = "https://admin.test.backend.kokrokooad.com"
let user =localStorage.getItem('access_token');


function AddDiscount(props){
    const [first , setFirst] =  React.useState("");
    const [second, setSecond] = React.useState("")
    const [percentage, setPercentage] = React.useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        let amountRange = `${first}-${second}`;
        console.log(amountRange,props.location.state.id, percentage)
        axios.post(`${domain}/api/admin/set/company/volume-discount`,{
            amount_range:amountRange,
            discount_percentile:percentage,
            media_company_id:props.location.state.id
        },{ headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            alert("saved")
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--8" fluid>
          <Row>
            <Col md="8" className="mr-auto ml-auto">
            <p
            style={{fontSize:"13px", fontWeight:500}}
            >Add Volume Discount To Media House.</p>
              <Card className=" shadow" style={{marginTop:"20px"}}>
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">SELECT MEDIA HOUSE</h3>
                </CardHeader>
                <CardBody>
                <form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                    <label>First Amount(GH¢)</label>
                    <Input type="number" value={first} onChange={e=>setFirst(e.target.value)}/>
                    </Col>
                    <Col>
                    <label>Second Amount(GH¢)</label>
                    <Input type="number" value={second} onChange={e=>setSecond(e.target.value)}/>
                    </Col>
                </Row>
                  <br/>
                  <label>Percentage Discount(%)</label>
                  <Input value={percentage} onChange={e=>setPercentage(e.target.value)}/>
                  <br/>
                  <Button color="info" type="submit">Save</Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

      </>
    );
  }


export default AddDiscount;


        