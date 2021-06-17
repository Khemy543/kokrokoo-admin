import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button
  ,Spinner, Tooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";
import SubCompanyCard from "components/SubCompanyCard";

function CRateSelectMediaHouse(props) {
 const [media_houses, setMedia_houses] = React.useState([]);
 const [isActive, setIsActive] = React.useState(true);
 const [tooltipOpen, setTooltipOpen] = React.useState(false);


 const toggle = () => setTooltipOpen(!tooltipOpen);

 let user =localStorage.getItem('access_token');
 var domain = "https://admin.test.backend.kokrokooad.com";
 React.useEffect(()=>{
   setIsActive(true)
    axios.get(`${domain}/api/get/${props.location.state.id}/media-house`,{
    headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        setMedia_houses(res.data);
    }).catch(error=>{
    /* if(!error.response){
        alert("check your internet connection");
    } */
    console.log(error)
    })
    .finally((_)=>{
        setIsActive(false)
    })
    },[])


    return (
      <>
      <Header/>
        <Container className=" mt--8" fluid>
        {isActive?
              <Row>
            <Col md="12" style={{textAlign:"center"}}>
             <h4>Please Wait <Spinner size="sm" style={{marginLeft:"5px"}}/></h4> 
            </Col>
          </Row>
          :
          <>
          {!isActive && media_houses.length<=0?
            <Row>
            <Col md="12" style={{textAlign:"center"}}>
             <h4>No Company Has Been Published Yet</h4> 
            </Col>
          </Row>
          :
          <>
        <p
            style={{fontSize:"13px", fontWeight:500}}
            >Which Media House Do You Want To Place An <span style={{color:"red"}}>Ad Campaign</span> With? Select A Media House.</p>
          <Row style={{marginTop:"20px"}}>
              {media_houses.map((value,index)=>(
                <SubCompanyCard data={value} {...props} path="rate-card-title"/>
              ))}
            
          </Row>
          </>
          }
          <br/>
          <Row>
              <Col>
              <Link to="/admin/create-ratecard">
              <Button
              color="danger"
              
              >
              Back
                  </Button>
                 </Link> 
              </Col>
              
              </Row>
        </>}
        
        </Container>
      </>
    );
  }


export default CRateSelectMediaHouse;
