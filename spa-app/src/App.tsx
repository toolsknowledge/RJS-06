import React, { Component } from "react";

import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    };

    render(){
      return(
         <React.Fragment>
            <Router>
                <NavLink to="/home" activeStyle={{color:"pink"}} exact={true} strict style={{marginRight:100}}>Home</NavLink>
                <NavLink to="/product" activeStyle={{color:"pink"}} exact={true} strict style={{marginRight:100}}>Product</NavLink>
                <NavLink to="/cart" activeStyle={{color:"pink"}} exact={true} strict>Cart</NavLink>

                <br></br><br></br>
                <Route path="/home" component={HomeScreen} exact={true} strict></Route>
                <Route path="/product" component={ProductScreen} exact={true} strict></Route>
                <Route path="/cart" component={CartScreen} exact={true} strict></Route>

            </Router>
         </React.Fragment>
      )
    };


};

export default App;

