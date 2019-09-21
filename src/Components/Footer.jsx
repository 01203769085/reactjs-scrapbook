import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-content">
                {/* Logo Area Start */}
                <div className="footer-logo-area text-center">
                  <a href="/" className="yummy-logo">
                    Yummy Blog
                  </a>
                </div>
                {/* Menu Area Start */}
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#yummyfood-footer-nav"
                    aria-controls="yummyfood-footer-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars" aria-hidden="true" /> Menu
                  </button>
                  {/* Menu Area Start */}
                  <div
                    className="collapse navbar-collapse justify-content-center"
                    id="yummyfood-footer-nav"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/blogs">
                          Blogs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/upload">
                          Upload
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Copywrite Text */}
              <div className="copy_right_text text-center">
                <p>
                  Copyright @2018 All rights reserved | This template is made
                  with <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com">Đức Thuận</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
