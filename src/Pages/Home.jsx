import React, { Component } from "react";
import SlideShow from "../Components/SlideShow";
import HomeArea from "../Components/HomeArea";

export default class Home extends Component {
  render() {
    return (
      <div>
        <SlideShow></SlideShow>
        <HomeArea></HomeArea>
      </div>
    );
  }
}
