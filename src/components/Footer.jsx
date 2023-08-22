import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Shopify from "../assets/images/shopifypartner.png";
import Paypal from "../assets/images/paypal.png";
import AdWord from "../assets/images/adwords-certified.webp";
import Analytic from "../assets/images/google-analytics-certified.png";
import Trusted from "../assets/images/google-trusted.png";

const Footer = () => {
  return (
    <footer className="position-relative p-5 pt-4 pb-0">
      <div className="container text-white">
        <div className="row mb-5">
          <div className="col-3">
            <h4 className="fw-light">QUICK LINKS</h4>
            <ul className="d-flex flex-column gap-3 mt-4">
              <li>Services</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Quotation</li>
              <li>Partnership</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-3">
            <h4 className="fw-light">OUR SERVICES</h4>
            <ul className="d-flex flex-column gap-3 mt-4">
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Responsive Website Design</li>
              <li>CMS Website Design</li>
              <li>Custom Website Design</li>
              <li>UI & UX Website Design</li>
              <li>360 Virtual Tour</li>
            </ul>
          </div>
          <div className="col-3">
            <h3 className="opacity-0">OUR SERVICES</h3>
            <ul className="d-flex flex-column gap-3 mt-4">
              <li>Ecommerce Development</li>
              <li>WooCommerce Development</li>
              <li>osCommerce Development</li>
              <li>Magento Development</li>
              <li>BigCommerce Development</li>
              <li>SSL Certificate</li>
              <li>Promotin Video</li>
            </ul>
          </div>
          <div className="col-3">
            <h4 className="fw-light mb-4">OUR SERVICES</h4>
            <p className="fs-4">+65 6248 0838</p>
            <p>
              <i class="bi bi-envelope-fill me-3"></i>
              <span>info@visibleone.com</span>
            </p>
            <p>24 Sin Ming Lane Midview City #07-93, Singapore 573970</p>
            <p>Office Hour: Mon-Fri(9am-6pm)</p>
            <div className="d-flex mt-5 justify-content-between align-items-center">
              <button className="btn btn-primary">Contact Us</button>
              <p className="mb-0">Contact HK Office</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center border-top border-bottom">
          <div className="col-7">
            <div className="d-flex gap-3">
              <img src={Shopify} alt="" className="footer-logo " />
              <img src={Paypal} alt="" className="footer-logo " />
              <img src={AdWord} alt="" className="footer-logo " />
              <img src={Analytic} alt="" className="footer-logo " />
              <img src={Trusted} alt="" className="footer-logo " />
            </div>
          </div>
          <div className="col-5">
            <Form inline>
              <Row className="align-items-end justify-content-end">
                <Col xs="auto">
                  <Form.Label>
                    Subscribe to our news, tips and guidelines
                  </Form.Label>
                  <Form.Control
                    className="bg-white opacity-25 text-white border-black"
                    type="email"
                    placeholder="123@test.com"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="btn-primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="text-center my-3">
              <div>
                <i class="fs-2 mx-3 bi bi-facebook"></i>
                <i class="fs-2 mx-3 bi bi-twitter"></i>
                <i class="fs-2 mx-3 bi bi-instagram"></i>
                <i class="fs-2 mx-3 bi bi-linkedin"></i>
              </div>
              <div className="d-flex mx-auto gap-3 my-3">
                <p>
                  Shopping T&C <i class="bi bi-dot"></i>
                </p>
                <p>
                  Terms & Conditions <i class="bi bi-dot"></i>
                </p>
                <p>Privacy Policy</p>
                <p>
                  <i class="bi bi-c-circle"></i> 2018 - Visible One
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show-chat">
        <i class="bi bi-chat-right-fill"></i>
      </div>
    </footer>
  );
};

export default Footer;
