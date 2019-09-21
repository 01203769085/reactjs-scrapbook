import React, { Component } from "react";

export default class BreadCumbNav extends Component {
  render() {
    return (
      <div className="breadcumb-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">
                      <i className="fa fa-home" aria-hidden="true" /> Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {this.props.menu}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
