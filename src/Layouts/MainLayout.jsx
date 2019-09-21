import React, { Component } from "react";
import TopHeader from "../Components/TopHeader";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <TopHeader></TopHeader>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}
