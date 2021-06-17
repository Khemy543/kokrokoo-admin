import React from "react";
import {
    Container,Row,Col, Table,Button,Modal,ModalHeader,ModalFooter, Input,Alert
} from "reactstrap";
import Header from "components/Headers/Header.js";
import axios from "axios";


let user =localStorage.getItem('access_token');
var domain = "https://admin.test.backend.kokrokooad.com"
class GetVolumeDiscount extends React.Component{
    
    state={
        volume:[],
        deleteModal:false,
        id:null,
        modal:false,
        editId:null,
        first:'',
        second:'',
        percentage:'',
        alert:false
    }

    componentDidMount(){
        console.log(this.props.location.state)
        axios.get(`${domain}/api/admin/get/company/${this.props.location.state.id}/volume-discount`,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            this.setState({volume:res.data})
        })
        .catch(error=>{
            console.log(error)
        })

    }

    handleDelete=(id)=>{
        let tempVolume = this.state.volume;
        axios.delete(`${domain}/api/admin/delete/company/${id}/volume-discount`,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            let newData = tempVolume.filter(item=>item.id !== id);
            this.setState({volume:newData, deleteModal:false})
        })
        .catch(error=>{
            console.log(error.response.data)
        })
    }

    handleEdit=(e)=>{
        e.preventDefault();
        let amount_range = `${this.state.first}-${this.state.second}`;
        axios.patch(`${domain}/api/admin/edit/company/${this.state.editId}/volume-discount`,
        {
            amount_range:amount_range,
            discount_percentile:this.state.percentage
        },{headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data)
            this.setState({alert:true})

        })
        .catch(error=>{
            console.log(error.response.data)
        })
    }


    handleEditClick=(value)=>{
        console.log(value);
        let range = value.amount_range.split("-");
        this.setState({
            modal:true,
            editId:value.id,
            first:range[0],
            second:range[1],
            percentage:value.discount_percentile
        })
    }
    render(){
        return(
            <>
            <Header />
            <Container className="mt--7" fluid>
            <p
            style={{fontSize:"13px", fontWeight:500}}
            >See All <span style={{color:"red"}}>Discounts</span> On Various Price Ranges.</p>
            <Row style={{marginTop:"20px"}}>
            <Col lg="12" xs="12" md="12" sm="12" xl="12">
            <h3>{this.props.location.state.mediaHouse.company_name}</h3>
            <p style={{fontWeight:500,fontSize:"13px"}}>{this.props.location.state.mediaHouse.media_house}</p>
            <Table striped bordered>
            <thead>
                <tr>
                <th>#</th>
                <th style={{fontWeight:1000}}>Amount Range (Min-Max) Ghs</th>
                <th style={{fontWeight:1000}}>Discount Offer(%)</th>
                <th style={{fontWeight:1000}}>Action</th>
                </tr>
            </thead>
            <tbody>
            {this.state.volume.map((value,key)=>(
                <tr>
                <th scope="row">{key+1}</th>
                <td>GH¢ {value.amount_range}</td>
                <td>{value.discount_percentile}%</td>
                <td>
                <Button style={{padding:'0px 6px 0px 6px'}} color="info" onClick={()=>this.handleEditClick(value)}><i className="fa fa-pencil"/></Button>
                <Button style={{padding:'0px 6px 0px 6px'}} color="danger" onClick={()=>this.setState({deleteModal:true, id:value.id})}><i className="fa fa-close"/></Button>
                </td>
                </tr>
                ))}
            </tbody>
            </Table>
            </Col>
            </Row>
            </Container>
            <Modal isOpen={this.state.deleteModal}>
            <ModalHeader style={{color:"black"}}>
            Delete  Discount?
            </ModalHeader>
            <ModalFooter>
            <Button color="danger" onClick={()=>{this.handleDelete(this.state.id); this.setState({deleteModal:false})}}>
                Yes
            </Button>
            <Button color="info" onClick={()=>this.setState({deleteModal:false})}>
                No
            </Button>
            </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modal}>
            <form onSubmit={this.handleEdit}>
            <ModalHeader style={{color:"black"}}>
            {this.state.alert?
            <Alert color="success" style={{textAlign:"center"}}>
                Updated!!
            </Alert>
            :
            <></>}
            <Row>
                <Col>
                    <label>First Amount(GH¢)</label>
                    <Input type="text" value={this.state.first} onChange={e=>this.setState({first:e.target.value})}/>
                </Col>
                <Col>
                    <label>Second Amount(GH¢)</label>
                    <Input type="text" value={this.state.second} onChange={e=>this.setState({second:e.target.value})}/>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col>
                <label>Discount Value(%)</label>
                    <Input type="number" value={this.state.percentage} onChange={e=>this.setState({percentage:e.target.value})}/>
                </Col>
            </Row>
            </ModalHeader>
            <ModalFooter>
            <Button color="danger" type="submit">
                Edit
            </Button>
            <Button color="info" onClick={()=>this.setState({modal:false})}>
                Cancel
            </Button>
            </ModalFooter>
            </form>
            </Modal>
            </>
        )
    }
}
export default GetVolumeDiscount;