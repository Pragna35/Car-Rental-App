import React from "react";
import "../../styles/becomeDriver.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriver = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className=" become__driver-btn mt-4">
              <Link to="/contact">Become a Driver</Link>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriver;
