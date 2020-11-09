import React from "react";
import {
    Card,
    Container,
    Row,
    Col,Table,Button,CardBody,Spinner, CardFooter, Modal, ModalHeader, ModalFooter
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import Pagination from "react-js-pagination";


  let user =localStorage.getItem('access_token');
  var domain = "https://admin.test.backend.kokrokooad.com"
  class ViewPendingPo extends React.Component{

    state={
      po:[],
      isActive:true,
      acceptModal:false,
      rejectModal:false,
      data:[],
      meta:[]
    }

    componentDidMount(){
        console.log(this.props.location.state)
        this.getCampaigns();
       
    }

    getCampaigns=(pageNumber=1)=>{
      this.setState({isActive:false})
      axios.get(`${domain}/api/subscription/${this.props.location.state.cart_id}/transaction?page=${pageNumber}`,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
        console.log(res.data)
        this.setState({data:res.data.data, meta:res.data.meta, isActive:false})
      })
      .catch(error=>{
        console.log(error.response.data)
      })
    }


    handleReject=()=>{
      axios.post(`${domain}/api/admin/reject/${this.props.location.state.id}/po`,null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
        console.log(res.data)
        this.setState({rejectModal:false}) 
        setTimeout(
          function(){
              this.setState({modal:false});
              this.props.history.push("/admin/rejected-pos")
          }
          .bind(this),
          1500
      )
      })
      .catch(error=>{
        console.log(error.response.data)
      })
    }

    handleApprove=()=>{
      axios.post(`${domain}/api/admin/approve/${this.props.location.state.id}/po`,null,
      {headers:{ 'Authorization':`Bearer ${user}`}})
      .then(res=>{
        console.log(res.data)
        this.setState({acceptModal:false})
        setTimeout(
          function(){
              this.setState({modal:false});
              this.props.history.push("/admin/approved-pos")
          }
          .bind(this),
          1500
      )
      })
      .catch(error=>{
        console.log(error.response.data)
      })
    }
   
    render(){
      return(
        <>
        <Header />
        <Container className=" mt--8" fluid>
        {this.state.isActive?
        <Row>
            <Col md="12" style={{textAlign:"center"}}>
             <h4>Please Wait <Spinner size="sm" style={{marginLeft:"5px"}}/></h4> 
            </Col>
        </Row>
        :
          <Row>
          <Col md="12" sm="12" xl="12" xs="12" lg="12">
          <p style={{fontSize:"13px", fontWeight:500}}>View Approved Purchase Order.</p>
          <Card style={{margin:"10px",boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
          <CardBody>
          <Table stripped bordered>
            <thead style={{backgroundColor:"#01a9ac",color:"black",height:""}}>
            <tr>
              <th>#</th>
              <th>Campaign ID</th>
              <th>Title</th>
              <th>Ratecard Title</th>
              <th>Media House</th>
              <th>Media Type</th>
              <th>Date time</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((value,key)=>(
              <tr>
              <td>{key+1}</td>
              <td>{value.generated_id}</td>
              <td>{value.title}</td>
              <td>{value.rate_card_title.title}</td>
              <td>{value.company.media_house}</td>
              <td>{value.company.media_type}</td>
              <td>{value.date} {value.time}</td>        
            </tr>
            ))}
          </tbody>
          </Table>
          </CardBody>
          <CardBody>
            <Pagination
              totalItemsCount={this.state.meta.total}
              activePage={this.state.meta.current_page}
              itemsCountPerPage={this.state.meta.per_page}
              onChange={(pageNumber)=>this.getCampaigns(pageNumber)}
              itemClass="page-item"
              linkClass="page-link"
              firstPageText="First"
              lastPageText = "Last"
              />
          </CardBody>
          <CardFooter>
            <Button color="danger" onClick={()=>this.setState({rejectModal:true})}>Reject</Button>
            <Button color="info" onClick={()=>this.setState({acceptModal:true})}>Approve</Button>
          </CardFooter>
          </Card>
          </Col>
          </Row>
        }
        </Container>
        <Modal isOpen={this.state.acceptModal}>
          <ModalHeader>
            Approve Purcahse Order?
          </ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={()=>this.handleApprove()}>Yes</Button>
            <Button color="info" onClick={()=>this.setState({acceptModal:false})}>No</Button>
          </ModalFooter>
        </Modal>
        
        <Modal isOpen={this.state.rejectModal}>
          <ModalHeader>
            Reject Purchase Order?
          </ModalHeader>
          <ModalFooter>
            <Button color="danger" onClick={()=>this.handleReject()}>Yes</Button>
            <Button color="info" onClick={()=>this.setState({rejectModal:false})}>No</Button>
          </ModalFooter>
        </Modal>
        </>
      )
  }
}

  export default ViewPendingPo;