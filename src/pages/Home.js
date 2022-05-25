import React from "react";
import imgXs from "../assets/images/360px.png";
import imgSm from "../assets/images/576px.png";
import imgMd from "../assets/images/768px.png";
import imgLg from "../assets/images/992px.png";

class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <div className="container container-fluid mt-3">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2">
              <h1 className="mb-3">
                <a href="/content-layout">Content Layout Challenge</a>
              </h1>
              <p>
                Style the <a href="/content-layout">/content-layout</a> page (showing 3 responsive content elements) using flex-box / grid with the breakpoints defined below. Maximum width of the entire content area on desktop should be 1200px.{" "}
                <a href="https://www.loom.com/share/ff22e61d7e914976913985aa2390efbb" target="_blank" rel="noopener noreferrer">
                  View a video example.
                </a>
              </p>
              <p>
                Add as much or as little custom SCSS to the <span className="code">/src/assets/scss/_challenge.scss</span> file to adjust the layout/styles of elements. Define custom variables (if needed) in the <span className="code">/src/assets/scss/_variables.scss</span> file.
              </p>
              <p>The project includes Bootstrap 5.1.0 CSS if you would like to take advantage of that, but it's not required.</p>
              <h4 className="mt-4">Breakpoints</h4>
              <ul>
                <li>
                  <strong>360px:</strong> each content element is full-width and stacked one on top of the other, with each content element also being in a stacked view (author area above content area)
                </li>
                <li>
                  <strong>576px:</strong> each content element is full-width and stacked one on top of the other, with each content element having author area on the left, content area on the right (with text left-aligned)
                </li>
                <li>
                  <strong>768px:</strong> each content element is at most 50% of the page width, with each content element being in a stacked view
                </li>
                <li>
                  <strong>992px+:</strong> each content element is at most 1/3 of the page width, with each content element being in a stacked view.
                </li>
              </ul>
              <h4 className="mt-4">Example Screenshots of Solution</h4>
              <p>
                These examples images can be found in <span className="code">/src/assets/images/</span>.
              </p>
            </div>
            <div className="col-12">
              <div className="mt-3 d-flex flex-wrap align-items-start justify-content-center justify-content-lg-between">
                <div className="text-center mx-2 my-2">
                  <div className="mb-2">@ 360px</div>
                  <img src={imgXs} alt="360px" width="200" />
                </div>
                <div className="text-center mx-2 my-2">
                  <div className="mb-2">@ 576px</div>
                  <img src={imgSm} alt="576px" width="200" />
                </div>
                <div className="text-center mx-2 my-2">
                  <div className="mb-2">@ 768px</div>
                  <img src={imgMd} alt="768px" width="200" />
                </div>
                <div className="text-center mx-2 my-2">
                  <div className="mb-2">@ 992px</div>
                  <img src={imgLg} alt="992px" width="200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
