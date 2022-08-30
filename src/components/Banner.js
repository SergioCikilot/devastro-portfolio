import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/astrotech.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">{date}</span>
                  <h1>{`Devastro⚡`} </h1>
                  <h4>Fly with us, to the moon</h4>
                  <br></br>
                  <i>
                    <q>
                      We offer cutting-edge software solutions for businesses of
                      all sizes. We have a team of experienced developers who
                      are passionate about creating innovative software that
                      helps our clients succeed. We offer a wide range of
                      software products and services, including web development,
                      mobile app development, e-commerce solutions, and custom
                      software development. We are committed to providing our
                      clients with the best possible services with latest
                      technologies. Even an artificial intelligence wrote this
                      paragraph! Contact us for best solutions! Thank you for
                      choosing our software company!
                    </q>
                  </i>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated  animate__slideInUp" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
