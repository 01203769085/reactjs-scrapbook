import React, { Component } from "react";
import BreadCumb from "../Components/BreadCumb";
import BreadCumbNav from "../Components/BreadCumbNav";
import ContactArea from "../Components/ContactArea";

export default class Upload extends Component {
  render() {
    return (
      <div>
        <BreadCumb menu="Upload"></BreadCumb>
        <BreadCumbNav menu="Upload"></BreadCumbNav>
        <ContactArea></ContactArea>
      </div>
    );
  }
}
