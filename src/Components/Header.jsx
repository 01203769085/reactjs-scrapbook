import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header_area">
        <div className="container">
          <div className="row">
            {/* Logo Area Start */}
            <div className="col-12">
              <div className="logo_area text-center">
                <a href="/" className="yummy-logo">
                  Yummy Blog
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#yummyfood-nav"
                  aria-controls="yummyfood-nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars" aria-hidden="true" /> Menu
                </button>
                {/* Menu Area Start */}
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="yummyfood-nav"
                >
                  <ul className="navbar-nav" id="yummy-nav">
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
      </header>
    );
  }
}
