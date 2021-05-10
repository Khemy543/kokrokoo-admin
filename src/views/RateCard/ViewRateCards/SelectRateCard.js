import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Input,
  Button,
  Spinner,
  Nav,NavItem,NavLink,TabContent,TabPane,Form,FormGroup,Label, Modal, ModalHeader, ModalFooter
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";

let user = localStorage.getItem("access_token");
var domain = "https://admin.test.backend.kokrokooad.com";

function VSelectRateCard(props) {
    const [isActive, setIsActive] = React.useState(false);
    const [isActiveSpinner, setIsActiveSpinner] = React.useState(false);
    const [titles, setTitles] = React.useState([]);
    const [id,setId] = React.useState(null);
    const [modal, setModal] = React.useState(false);
    const [message, setMessage] = React.useState("")


    React.useEffect(()=>{
        setIsActiveSpinner(true)
        axios.get(`${domain}/api/admin/ratecard/company/${props.location.state.media_house_id}/ratecards`,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            setTitles(res.data.data);
            if(res.data.data.length > 0){
              setId(res.data.data[0].id)
            }
            setIsActiveSpinner(false)
        })
        .catch(error=>{
            console.log(error);
            if(error.response.data.status === "Forbidden"){
              setModal(true);
              setMessage("Access Denied")
            }
        })
    },[])

    const pass=()=>{
        /* axios.post("https://media-kokrokooad.herokuapp.com/api/admin/ratecard/1/create-from-existing",title,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error.response.data)
        }) */
        if(props.location.state.id === "3"){
          props.history.push("/admin/print-details",{id:props.location.state.id, rate_card_id:id, media_house_id:props.location.state.media_house_id });
        }
        else{
          props.history.push("/admin/video-details",{id:props.location.state.id, rate_card_id:id, media_house_id:props.location.state.media_house_id });
        }
       
    }
    

    
    return (
      <>
      <LoadingOverlay 
      active = {isActive}
      spinner={<FadeLoader color={'#4071e1'}/>}
      >
      <Header/>
        <Container className=" mt--8" fluid>
        {isActiveSpinner?
          <Row>
            <Col md="12" style={{textAlign:"center"}}>
             <h4>Please Wait <Spinner size="sm" style={{marginLeft:"5px"}}/></h4> 
            </Col>
          </Row>
          :
          <>
          {!isActiveSpinner && titles.length<=0?
            <Row>
                <Col md="12" style={{textAlign:"center"}}>
                <h4>You Have No Existing Ratecards</h4> 
                </Col>
              </Row>
              :
          <>
          <Row>
            <Col md="10" sm="12" lg="10" xl="10" xs="12">
            <p style={{fontSize:"13px", fontWeight:500}}
            >Create RateCard From Existing RateCards, Select A RateCard <span style={{color:"red"}}>Title</span></p>
            <Card className="shadow">
            <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">ENTER NEW TITLE</h3>
            </CardHeader>

            <CardBody>
            <Row>
                <Col md="12">
                <Input type="select" value={id} onChange={e=>setId(e.target.value)}>
                {titles.map((value)=>(
                    <option key={value.id} value={value.id}>{value.rate_card_title}</option>
                ))}
                </Input>
                <br/> 
                    <Button
                    color="info"
                    onClick={pass}
                    >
                    Next
                    </Button>
                    </Col>
                </Row>
            </CardBody>    
            </Card>    
            </Col>
            </Row>
          </>
        }
          </>
        }

        </Container>
        <Modal isOpen={modal}>
          <ModalHeader>
            {message}
          </ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={()=>setModal(false)}>Close</Button>
          </ModalFooter>
        </Modal>
        </LoadingOverlay>
      </>
    );
  }


export default VSelectRateCard;
