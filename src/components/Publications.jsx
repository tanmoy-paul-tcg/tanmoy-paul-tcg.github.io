import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "./Cards";

function Publications() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
        <h1>Publications</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <Cards />
      </Row>
      <style>
        {`
        h1 {
          font-size: 50px;
          font-weight: bold;
        }
        `}
      </style>
    </Container>
  );
}

export default Publications;
