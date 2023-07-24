import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiTwotoneMail,
  AiFillSkype,
} from "react-icons/ai";
import { FaTelegram, FaPlaceOfWorship } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ville Salmi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} V.S.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/white01312"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="mailto:black.cat01312@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                <AiTwotoneMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://join.skype.com/invite/xisLaU16JalB"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://telegram.me/Sunshinee0213"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.google.com/maps/place/Makati,+Metro+Manila,+Philippines/@14.5546333,121.0125903,14z/data=!3m1!4b1!4m6!3m5!1s0x3397c90264a0ed01:0x2b066ed57830cace!8m2!3d14.554729!4d121.0244452!16zL20vMDFkdnp5?authuser=0&entry=ttu"                  
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaPlaceOfWorship />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
