import React from 'react'
import { Route,Redirect } from 'react-router-dom';

class ProtectedLoginRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const path = this.props.path;
        
        const isAuthenticated = localStorage.getItem('access_token')
        
        if(isAuthenticated !== null){
            return (
                <Redirect to={{ pathname: '/admin/index' }} />
        )} 
        else{
        return(
            <Route path ={path} component={Component} />
        )}
    }
}

export default ProtectedLoginRoute;  