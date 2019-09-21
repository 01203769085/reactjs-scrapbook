import React, { Component } from "react";

export default class BreadCumb extends Component {
  render() {
    return (
      <div
        className="breadcumb-area"
        style={{ backgroundImage: "url(./static/img/bg-img/breadcumb.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="bradcumb-title text-center">
                <h2>{this.props.menu}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
