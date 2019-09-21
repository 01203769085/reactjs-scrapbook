import React, { Component } from "react";

export default class ContactArea extends Component {
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
                  <form action="#" method="post">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-name"
                        placeholder="Chủ Đề"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="contact-email"
                        placeholder="Mô tả"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        id="contact-website"
                        placeholder="Ngày chụp"
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
