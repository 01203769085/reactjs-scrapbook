import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    let currentPage = window.location.pathname;
    if (currentPage === "/blogs") currentPage = "/blogs?page=0";
    this.state = {
      page: ["/", "/blogs?page=0", "/upload"],
      currentPage
    };
  }
  showText = text => {
    switch (text) {
      case "/":
        text = "Home";
        break;
      case "/blogs?page=0":
        text = "Blogs";
        break;
      case "/upload":
        text = "Upload";
        break;
      default:
        text = "/";
    }
    return text;
  };
  changePage = currentPage => {
    this.setState({
      currentPage
    });
  };
  render() {
    let menu = this.state.page.map((page, index) => {
      return (
        <li
          key={index}
          className={
            this.state.currentPage === page ? "nav-item active" : "nav-item"
          }
        >
          <Link
            className="nav-link"
            to={page}
            onClick={() => {
              this.changePage(page);
            }}
          >
            {this.showText(page)}
          </Link>
        </li>
      );
    });
    return (
      <header className="header_area">
        <div className="container">
          <div className="row">
            {/* Logo Area Start */}
            <div className="col-12">
              <div className="logo_area text-center">
                <Link to="/" className="yummy-logo">
                  Yummy Blog
                </Link>
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
                    {menu}
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
