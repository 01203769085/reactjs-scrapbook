import React, { Component } from "react";
import BreadCumb from "../Components/BreadCumb";
import BreadCumbNav from "../Components/BreadCumbNav";
import AllBlogsArea from "../Components/AllBlogsArea";

export default class Blogs extends Component {
  render() {
    // console.log(this.props.match);
    return (
      <div>
        <BreadCumb menu="All Blogs"></BreadCumb>
        <BreadCumbNav menu="All Blogs"></BreadCumbNav>
        <AllBlogsArea></AllBlogsArea>
      </div>
    );
  }
}
