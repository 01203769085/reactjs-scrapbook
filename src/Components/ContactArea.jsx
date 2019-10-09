import React, { Component } from "react";
import axios from "axios";

export default class ContactArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtTitle: "",
      txtDescription: "",
      txtTimeUp: "",
      fileImg: ""
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(event) {
    let { target } = event;
    let { name } = target;
    let { value } = target;
    this.setState({
      [name]: value
    });
  }
  onHandleSubmit(event) {
    event.preventDefault();
    let { txtTitle, txtDescription, txtTimeUp, fileImg } = this.state;
    if (
      txtTitle !== "" &&
      txtDescription !== "" &&
      txtTimeUp !== "" &&
      fileImg !== ""
    ) {
      axios({
        method: "post",
        url: "https://bookscrap-server.herokuapp.com/upload",
        data: {
          txtTitle,
          txtDescription,
          txtTimeUp,
          fileImg
        }
      });
    } else {
      alert("Không được để trống !!!");
    }
  }
  render() {
    return (
      <div className="contact-area section_padding_80">
        <div className="container">
          {/* Contact Form  */}
          <div className="contact-form-area">
            <div className="row">
              <div className="col-12 col-md-5">
                <div
                  className="contact-form-sidebar item wow fadeInUpBig"
                  data-wow-delay="0.3s"
                  style={{
                    backgroundImage: "url(./static/img/bg-img/contact.jpg)",
                    height: "544px"
                  }}
                ></div>
              </div>
              <div className="col-12 col-md-7 item">
                <div
                  className="contact-form wow fadeInUpBig"
                  data-wow-delay="0.6s"
                >
                  <h2 className="contact-form-title mb-30">
                    Post bài viết ở đây !!!
                  </h2>
                  {/* Contact Form */}
                  <form action="#" onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtTitle"
                        className="form-control"
                        id="contact-name"
                        placeholder="Chủ Đề"
                        onChange={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="txtDescription"
                        id="contact-email"
                        placeholder="Mô tả"
                        onChange={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        name="txtTimeUp"
                        id="contact-website"
                        placeholder="Ngày chụp"
                        onChange={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        name="fileImg"
                        id="contact-website"
                        placeholder="Ảnh"
                        onChange={this.onHandleChange}
                      />
                    </div>

                    <button type="submit" className="btn contact-btn">
                      Đăng
                    </button>
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
