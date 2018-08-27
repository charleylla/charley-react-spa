import React, { Component } from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import { NotFoundPage } from "@/page/notFound";
import { HomePage } from "@/page/home";
import { RegisterPage } from "@/page/register";
import { LoginPage } from "@/page/login";
import { OrderPage } from "@/page/order";

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/order" exact component={OrderPage}/>
        <Route path="/404" exact component={NotFoundPage}/>
        <Redirect to="/404" />
      </Switch>
    );
  }
}