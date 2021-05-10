import React from "react";
import axios from "axios";
import decode from "jwt-decode";
import LoadingOverlay from "react-loading-overlay";
import FadeLoader from "react-spinners/FadeLoader";

const RateContext = React.createContext();

let user = localStorage.getItem('access_token')
var domain = "https://admin-backend.kokrokooad.com"

class RateProvider extends React.Component{

    state={
        isActive:false,
    }


    componentDidMount(){
       this.isTokenExpired();/* 
       localStorage.clear(); */
    }

    isTokenExpired() {
        try {
            const decoded = decode(user);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                localStorage.clear();
            }
        }
        catch (err) {
            return false;
        }
    }

    //get Media and Clients
    


    


    /* blockMedia=()=>{
        axios.post("",
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            
        })
        .catch(error=>{
            console.log(error);
        })
    }

    unBlockMedia=()=>{
        axios.post("",
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            
        })
        .catch(error=>{
            console.log(error);
        })
    } */

    //logout
    logout=()=>{
        axios.post(`${domain}/api/admin/logout`,null,
        {headers:{ 'Authorization':`Bearer ${user}`}})
        .then(res=>{
            console.log(res.data);
            if(res.data.status === "logout success"){
                localStorage.clear();
                window.location.reload("/")
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }


    render(){
        return(
            <RateContext.Provider value={{
                ...this.state,
                logout:this.logout
            }}>
            <LoadingOverlay 
            active = {this.state.isActive}
            spinner={<FadeLoader color={'#4071e1'}/>}
            >
            {this.props.children}
            </LoadingOverlay>
            </RateContext.Provider>
        );
    }
}

const RateConsumer = RateContext.Consumer;



export {RateProvider,RateConsumer};