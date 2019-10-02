import React, { Component } from "react";
import SingleSlide from "./SingleSlide";
import axios from "axios";

export default class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: null
    };
    this.getData();
  }
  getData() {
    axios({
      method: "get",
      url: `https://bookscrap-server.herokuapp.com/blogs`
    })
      .then(response => {
        this.setState({
          blogs: response.data
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  showSlide(blogs) {
    if (blogs == null) {
      return null;
    } else
      return blogs.map(blog => {
        return <SingleSlide key={blog.id} blog={blog}></SingleSlide>;
      });
  }
  render() {
    const { blogs } = this.state;
    console.log(blogs);
    return (
      <section className="welcome-post-sliders owl-carousel">
        {this.showSlide(blogs)}
      </section>
    );
  }
}
