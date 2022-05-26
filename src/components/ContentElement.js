import React, { Component } from "react";

export default class ContentElement extends Component {
  render() {
    const { img, heading, copy, btnCopy, authorImg, authorName, authorEmail } = this.props;

    return (
      <div className="content-element col-12 col-md-12 col-lg-4 ">
        <div className="test">
          <div className="testBox">Box One</div>
          <div className="testBox">Box Two</div>
          <div className="testBox">Box Three</div>
        </div>

        {/* Author */}
        <div className="content-element__author">
          <img className="content-element__author-img img-fluid" src={authorImg} alt={authorName} />
          <h3 className="content-element__author-name">{authorName}</h3>
          <a href={`mailto:${authorEmail}`} className="content-element__author-email">
            {authorEmail}
          </a>
        </div>

        {/* Book */}
        <div className="content-element__content">
          <img className="content-element__content-img img-fluid" src={img} alt={heading} />
          <h2 className="content-element__content-heading">{heading}</h2>
          <div className="content-element__content-copy">{copy}</div>
          <button className="content-element__content-btn btn btn-primary">{btnCopy}</button>
        </div>
      </div>
    );
  }
}

ContentElement.displayName = "ContentElement";

ContentElement.defaultProps = {
  authorImg: "",
  authorName: "",
  authorEmail: "",
  img: "",
  heading: "",
  copy: "",
  btnCopy: "",
};
