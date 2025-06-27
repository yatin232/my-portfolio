import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube, // <-- Add this import
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col className="text-center">
          <ul className="footer-icons">
            <li className="social-icon-item">
              <a
                href="https://github.com/yatin232"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://x.com/YatinderRawat"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://www.linkedin.com/in/yatinder-singh-rawat-453182240/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://www.instagram.com/the_rambhakt07/"
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icon-item">
              <a
                href="https://www.youtube.com/@ysrvlogs0007" // replace with your YouTube channel
                className="footer-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
          </ul>
          <div className="footer-text mt-3">
            <h5>
              Designed and Developed by{" "}
              <span className="purple">Yatinder Singh Rawat</span>
            </h5>
            <h6>
              Copyright © {year} <span className="purple">YSR</span>
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
