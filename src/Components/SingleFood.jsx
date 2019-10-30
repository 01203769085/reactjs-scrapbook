import React, { Component } from "react";
import converTime from "../xulyjs/converTime";

export class SingleFood extends Component {
  componentDidMount() {
    this.setState({
      ...converTime
    });
  }
  render() {
    let { blog } = this.props;
    return (
      <div className="single-populer-post d-flex">
        <img src={blog.url} alt="" />
        <div className="post-content">
          <a href="/">
            <h6>{blog.title}</h6>
          </a>
          <p>
            {this.state === null ? "" : this.state.converTime(blog.timeShot)}
          </p>
        </div>
      </div>
    );
  }
}

export default SingleFood;
