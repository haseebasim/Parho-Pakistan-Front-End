import React, { Component } from 'react';
import Header from './headerComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{

    constructor(props){
        super(props);

    }



    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" />  
                    <Redirect to="/home"/>    
                </Switch>
            </div>

        );


    }
}


export default Main;