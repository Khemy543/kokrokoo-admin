import React from "react";
import {
    Card,
    Container,
    Row,
    Col,Table,Button,CardBody,Spinner
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import axios from "axios";
  import Pagination from "react-js-pagination";


  let user =localStorage.getItem('access_token');
  var domain = "https://admin-backend.kokrokooad.com"
  class ApprovedPo extends React.Component{

    state={
      po:[],
      meta:[],
      isActive:true
    }

    componentDidMount(){
        /* axios.get(`${domain}/api/admin/fetch/pending/pos`,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            this.setState({po:res.data.data,isActive:false})
        })
        .catch(error=>{
            console.log(error)
        }) */

        this.getPOs()
    }

    getPOs(pageNumber=1){
      this.setState({isActive:true})
    axios.get(`${domain}/api/admin/fetch/approved/pos?page=${pageNumber}`,
    {headers:{ 'Authorization':`Bearer ${user}`}})
    .then(res=>{
        console.log(res.data)
        this.setState({po:res.data.data, meta:res.data.meta, isActive:false})
    })
    .catch(error=>{
      console.log(error)
    });
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
        <>
        {this.state.po.length<=0?
          <Row>
              <Col style={{textAlign:"center"}}>
                  <h4>You Have No Approved Purchase Order</h4>
              </Col>
          </Row>
          :
          <Container className=" mt--8" fluid>
          <Row>
          <Col md="12" sm="12" xl="12" xs="12" lg="12">
          <p style={{fontSize:"13px", fontWeight:500}}>View Approved Purchase Order.</p>
          <Card style={{margin:"10px",boxShadow:"0 2px 12px rgba(0,0,0,0.1)"}}>
          <CardBody>
          <Table stripped bordered>
            <thead style={{backgroundColor:"#01a9ac",color:"black",height:""}}>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Company Name</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.po.map((value,key)=>(
              <tr>
              <td>{key+1}</td>
              <td>{value.id}</td>
              <td>{value.company.company_name}</td>
              <td>{value.status}</td>
              <td>{value.created_at}</td>
              <td>
              <Button color="info" style={{borderRadius:"100%", padding:"2px 5px 2px 5px"}} onClick={()=>this.props.history.push("/admin/view-approved-pos",{cart_id:value.cart_id})}><i className="fa fa-eye"/></Button>
              <Button color="success" style={{borderRadius:"100%", padding:"2px 5px 2px 5px"}}><a target="_blank" href={`https://uploads.kokrokooad.com/${value.file_path}`}><i className="fa fa-download"/></a></Button>
              </td>
                    
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
              onChange={(pageNumber)=>this.getPOs(pageNumber)}
              itemClass="page-item"
              linkClass="page-link"
              firstPageText="First"
              lastPageText = "Last"
              />
          </CardBody>
          </Card>
          </Col>
          </Row>
        </Container>
          }
          
        </>
        }
        </Container>
        </>
        
      )
  }
}

  export default ApprovedPo;