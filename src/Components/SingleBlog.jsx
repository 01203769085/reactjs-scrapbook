import React, { Component } from "react";

export class SingleBlog extends Component {
  render() {
    const { blog } = this.props;
    return (
      <div className="col-12 col-md-6">
        <div className="single-post wow fadeInUp" data-wow-delay=".6s">
          {/* Post Thumb */}
          <div className="post-thumb">
            <img src={blog.url} alt="" />
          </div>
          {/* Post Content */}
          <div className="post-content">
            <div className="post-meta d-flex">
              <div className="post-author-date-area d-flex">
                {/* Post Date */}
                <div className="post-date">
                  <a href="/">{this.converTime(blog.timeUp)}</a>
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
      </div>
    );
  }

  converTime(time) {
    let param = time.split("-");
    let day = param[0];
    let month = param[1];
    let year = param[2];

    switch (month) {
      case "1":
        month = "Jan";
        break;
      case "2":
        month = "Feb";
        break;
      case "3":
        month = "Mar";
        break;
      case "4":
        month = "Apr";
        break;
      case "5":
        month = "May";
        break;
      case "6":
        month = "Jun";
        break;
      case "7":
        month = "Jul";
        break;
      case "8":
        month = "Aug";
        break;
      case "9":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
        break;
      default:
        month = "null";
    }
    param = "" + month + " " + day + ", " + year;
    return param;
  }
}
