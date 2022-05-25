import React from "react";
import imgXs from "../assets/images/360px.png";
import imgSm from "../assets/images/576px.png";
import imgMd from "../assets/images/768px.png";
import imgLg from "../assets/images/992px.png";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={imgLg} alt="992px" width="200" />
      </div>
    );
  }
}
export default Home;
