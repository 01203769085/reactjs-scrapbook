import React, { Component } from "react";
import axios from "axios";

export default class ContactArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtTitle: "",
      txtDescription: "",
      txtTimeUp: "",
      fileImg: "",
      urlImg: "./static/img/bg-img/contact.jpg"
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.handleSelectImg = this.handleSelectImg.bind(this);
  }
  onHandleChange(event) {
    let { target } = event;
    let { name } = target;
    let { value } = target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  onSelectedImg = e => {
    if (e.target.files[0])
      this.setState({
        fileImg: e.target.value,
        urlImg: URL.createObjectURL(e.target.files[0])
      });
    console.log(this.state);
  };
  async onHandleSubmit(event) {
    event.preventDefault();
    let { txtTitle, txtDescription, txtTimeUp, fileImg } = this.state;
    if (
      txtTitle !== "" &&
      txtDescription !== "" &&
      txtTimeUp !== "" &&
      fileImg !== ""
    ) {
      await axios({
        method: "POST",
        url: "http://localhost:3000/upload",
        data: {
          txtTitle,
          txtDescription,
          txtTimeUp,
          fileImg
        }
      })
        .then(request => {
          console.log(request);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      alert("Không được để trống !!!");
    }
  }
  handleSelectImg() {}
  render() {
    return (
      <div className="contact-area section_padding_80">
        <div className="container">
          {/* Contact Form  */}
          <div className="contact-form-area">
            <div className="row">
              <div className="col-12 col-md-6">
                <div
                  className="contact-form-sidebar item wow fadeInUpBig"
                  data-wow-delay="0.3s"
                  style={{
                    backgroundImage: `url(${this.state.urlImg})`,
                    height: "544px"
                  }}
                ></div>
              </div>
              <div className="col-12 col-md-6 item">
                <div
                  className="contact-form wow fadeInUpBig"
                  data-wow-delay="0.6s"
                >
                  <h2 className="contact-form-title mb-30">
                    Post bài viết ở đây !!!
                  </h2>
                  {/* Contact Form */}
                  <form method="post" onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtTitle"
                        className="form-control"
                        id="contact-name"
                        placeholder="Chủ Đề"
                        onChange={this.onHandleChange}
                        onBlur={this.onHandleChange}
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
                        onBlur={this.onHandleChange}
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
                        onBlur={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control"
                        name="fileImg"
                        id="contact-website test"
                        placeholder="Ảnh"
                        onChange={this.onSelectedImg}
                        onBlur={this.onSelectedImg}
                        accept=".gif,.jpg,.jpeg,.png"
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
