import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/discord.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/twitter.svg";
import navIcon4 from "../assets/img/youtube.svg";

import "animate.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="" target="_blank">
                <img src={navIcon1} alt="Discord" />
              </a>
              <a href="" target="_blank">
                <img src={navIcon2} alt="Github" />
              </a>
              <a href="" target="_blank">
                <img src={navIcon3} alt="Twitter" />
              </a>
              <a href="https://youtube.com" target="_blank">
                <img src={navIcon4} alt="Youtube" />
              </a>
            </div>
            <p>powered by Devastro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
