import React, { Component } from "react";
import converTime from "../xulyjs/converTime";

export class SingleBlog extends Component {
  componentDidMount() {
    this.setState({
      ...converTime
    });
  }
  showVideo(blog) {
    return (
      <div>
        <div className="post-thumb">
          <video src={blog.url} alt="" controls="controls"></video>
        </div>

        <div className="post-content">
          <div className="post-meta d-flex">
            <div className="post-author-date-area d-flex">
              <div className="post-date">
                <a href="/">
                  {this.state === null
                    ? ""
                    : this.state.converTime(blog.timeShot)}
                </a>
              </div>
            </div>
            {/* Post Comment & Share Area */}
            <div className="post-comment-share-area d-flex">
              {/* Post Favourite */}
              <div className="post-favourite">
                <a href="/">
                  <i className="fa fa-heart-o" aria-hidden="true" /> 10
                </a>
              </div>
              {/* Post Comments */}
              <div className="post-comments">
                <a href="/">
                  <i className="fa fa-comment-o" aria-hidden="true" /> 12
                </a>
              </div>
              {/* Post Share */}
              <div className="post-share">
                <a href="/">
                  <i className="fa fa-share-alt" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <a href="/">
            <h4 className="post-headline">{blog.title}</h4>
          </a>
        </div>
      </div>
    );
  }
  render() {
    const { blog } = this.props;
    return (
      <div className="col-12 col-md-6">
        <div className="single-post wow fadeInUp" data-wow-delay=".6s">
          {this.showVideo(blog)}
        </div>
      </div>
    );
  }
}
