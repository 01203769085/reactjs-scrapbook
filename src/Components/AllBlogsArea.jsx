import React, { Component } from "react";
import axios from "axios";
import SinglePost from "./SinglePost";

export default class AllBlogsArea extends Component {
  constructor(props) {
    super(props);
    let current_page = window.location.search.match(/\d+/)[0];
    this.state = {
      blogs: null,
      numblogs: 0,
      current_page
    };
    this.getData(current_page);
    this.getNumData();
  }
  getNumData() {
    axios({
      method: "get",
      url: `http://bookscrap-server.herokuapp.com/blogs`
    })
      .then(response => {
        this.setState({
          numblogs: response.data.length
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  getData(page) {
    let limit = 9;
    axios({
      method: "get",
      url: `http://bookscrap-server.herokuapp.com/blogs/blogsbypage?page=${page}&limit=${limit}`
    })
      .then(response => {
        this.setState({
          blogs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  showListBlogs(blogs) {
    if (blogs == null) {
      return null;
    } else
      return blogs.map(blog => {
        return <SinglePost key={blog.id} blog={blog}></SinglePost>;
      });
  }
  showNumpage(blogs, numblogs) {
    if (blogs != null && numblogs != null) {
      let sum_page = Math.ceil(this.state.numblogs / 9.0);
      let { current_page } = this.state;
      let arrayNumPage = [];
      let s;
      for (let i = 0; i < sum_page; i++) {
        if (parseInt(current_page) === i * 9) {
          s = (
            <li key={i} className="page-item active">
              <a className="page-link" href={"/blogs?page=" + i * 9}>
                {i + 1} <span className="sr-only">(current)</span>
              </a>
            </li>
          );
        } else
          s = (
            <li key={i} className="page-item">
              <a className="page-link" href={"/blogs?page=" + i * 9}>
                {i + 1}
              </a>
            </li>
          );
        arrayNumPage.push(s);
      }
      return arrayNumPage;
    }
  }
  render() {
    let { blogs, numblogs } = this.state;
    return (
      <section className="archive-area section_padding_80">
        <div className="container">
          <div className="row">
            {this.showListBlogs(blogs)}
            <div className="col-12">
              <div className="pagination-area d-sm-flex mt-15">
                <nav aria-label="#">
                  <ul className="pagination">
                    {this.showNumpage(blogs, numblogs)}
                  </ul>
                </nav>
                <div className="page-status">
                  <p>9 blogs of {numblogs} results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
