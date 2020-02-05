import React, { Component } from 'react';
import Header from './headerComponent';
import Login from './LoginComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            fields : {

            }
        }

    }

onChange = (fields)=>{
    this.setState({
        fields
    });
}

    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={() => <Login onChange= {(fields) => this.onChange(fields)}/>} />  
                    <Redirect to="/home"/>    
                </Switch>
            </div>

        );


    }
}


export default Main;