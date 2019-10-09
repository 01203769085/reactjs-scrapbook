import React, { Component } from "react";

export default class TopHeader extends Component {
  render() {
    return (
      <div className="top_header_area">
        <div className="container">
          <div className="row">
            <div className="col-5 col-sm-6">
              {/*  Top Social bar start */}
              <div className="top_social_bar">
                <a href="/">
                  <i className="fa fa-facebook" />
                </a>
              </div>
            </div>
            {/*  Login Register Area */}
            <div className="col-7 col-sm-6">
              <div className="signup-search-area d-flex align-items-center justify-content-end">
                <div className="login_register_area d-flex">
                  <div className="register">
                    <a href="/">Ngũ Đức Thuận</a>
                  </div>
                  &nbsp;❤&nbsp;
                  <div className="register">
                    <a href="/">Trần Huỳnh Hồng Hạnh</a>
                  </div>
                </div>
                {/* Search Form */}
                <div className="search-hidden-form">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      id="search-anything"
                      placeholder="Search Anything..."
                    />
                    <input type="submit" defaultValue className="d-none" />
                    <span className="searchBtn">
                      <i className="fa fa-times" aria-hidden="true" />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
