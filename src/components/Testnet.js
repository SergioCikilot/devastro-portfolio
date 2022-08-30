import React from "react";
import meter1 from "../assets/img/tidefi.png";
import meter2 from "../assets/img/sei.png";
import meter3 from "../assets/img/stride.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="testnet" id="testnet">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Projects✨</h2>
              <p>Our Projects </p>
              <a
                class="github-button"
                href=""
                target="_blank"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
              >
                Contact us!
              </a>
              <br></br>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <a href="" target="_blank">
                    {" "}
                    <img src={meter3} alt="Image" />
                  </a>
                  <a href="" target="_blank">
                    {" "}
                    <h5>Storybook</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="" target="_blank">
                    {" "}
                    <img src={meter1} alt="Image" />
                  </a>
                  <a href="" target="_blank">
                    {" "}
                    <h5>Arena</h5>
                  </a>
                </div>
                <div className="item">
                  <a href="" target="_blank">
                    {" "}
                    <img src={meter2} alt="Image" />
                  </a>
                  <a href="" target="_blank">
                    {" "}
                    <h5>Damage Calculator</h5>
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
