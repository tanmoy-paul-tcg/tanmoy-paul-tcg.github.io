import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rimage from "./Rimage";
import Bio from "./Bio";
import Buttons from "./Buttons";

function Home() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
        <Rimage />
        <Buttons />
        </Col>
        <Col lg={8}>
          <Bio />
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <p>
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
          <br/>   
        </p>
      </Row>
      <style>
       {`
       .col-lg-4 {
          justify-content: center;
        }
        `}
      </style>
    </Container>
  );
}

export default Home;
