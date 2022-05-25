import React, { Component } from "react";
import ContentElement from "../components/ContentElement";
import authorImage from "../assets/images/stephen-king.jpg";
import contentImage from "../assets/images/content-img.jpg";

export default class ContentLayoutChallenge extends Component {
  constructor(props) {
    super(props);

    this.contentItems = [
      {
        authorImg: authorImage,
        authorName: "Stephen King",
        authorEmail: "stephen@king.com",
        img: contentImage,
        heading: "Book 1",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, facilisis at odio nec, lacinia ultrices ante.",
        btnCopy: "Learn More",
      },
      {
        authorImg: authorImage,
        authorName: "Stephen King",
        authorEmail: "stephen@king.com",
        img: contentImage,
        heading: "Book 2",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, facilisis at odio nec, lacinia ultrices ante.",
        btnCopy: "Learn More",
      },
      {
        authorImg: authorImage,
        authorName: "Stephen King",
        authorEmail: "stephen@king.com",
        img: contentImage,
        heading: "Book 3",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus libero, facilisis at odio nec, lacinia ultrices ante.",
        btnCopy: "Learn More",
      },
    ];
  }

  render() {
    return (
      <div className="page container container-fluid overflow-hidden">
        <h1 className="mt-3 mb-5">Content Layout Challenge</h1>

        <div className="content-element-list row gx-5">
          {this.contentItems.map((item, idx) => (
            <ContentElement key={idx} authorImg={item.authorImg} authorName={item.authorName} authorEmail={item.authorEmail} img={item.img} heading={item.heading} copy={item.copy} btnCopy={item.btnCopy} />
          ))}
        </div>
      </div>
    );
  }
}
