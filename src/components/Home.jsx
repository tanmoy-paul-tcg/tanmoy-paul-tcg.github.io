import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Rimage from "./Rimage";
import Bio from "./Bio";
import Buttons from "./Buttons";
import Typewriter from "typewriter-effect";
import Caro from "./Caro";

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
        <h3 className="type">
        <Typewriter
            options={{
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to ")
                .pauseFor(1000)
                .typeString("Materials Modelling Laboratory")
                .start();
            }}
          />
        </h3>
        <p className="mt-3 catch">
          <span className="sec">{'{  '}</span>
          At the forefront of computational materials science, 
          our lab pioneers the use of advanced computational techniques 
          to design and discover cutting-edge materials for next-generation 
          batteries and energy storage devices. 
          Applying ab initio molecular dynamics, 
          Density Functional Theory (DFT), and advanced methods 
          including machine learning and neural networks, 
          allows us to investigate material behavior at the atomic level.  
          Our interdisciplinary team of computational physicists and chemists 
          pushes the boundaries of materials innovation, leveraging AI/ML-driven models 
          and high-performance simulations to accelerate the discovery of sustainable energy solutions. 
          <span className="sec">{'  }'}</span>
        </p>
      </Row>
      <Row>
        <Col lg={8} className="my-4">
          <Caro />
        </Col>
        <Col lg={4} className="my-4">
        <ListGroup className="mb-3">
          <ListGroup.Item className="lg-head">Machines</ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <ListGroup.Item>NVIDIA RTX A5000 GPU</ListGroup.Item>
          <ListGroup.Item>NVIDIA RTX 4060 GPU</ListGroup.Item>
          <ListGroup.Item>AMD EPIC 7453 CPU</ListGroup.Item>
          <ListGroup.Item>
            Intel Xeon Cascadelake 8268 CPU <br/>
            PARAM Brahma <br/>
            (IISER Pune)
          </ListGroup.Item>
          <ListGroup.Item>
            Intel Xeon Skylake 6148 CPU <br/>
            PARAM Shakti <br/>
            (IIT Kharagpur)
          </ListGroup.Item>
          <ListGroup.Item>
            Intel Xeon Gold 6130 CPU <br/>
            Tetralith <br/>
            (Linköping University)
          </ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
      <style>
       {`
       .col-lg-4 {
          justify-content: center;
        }

        .type {
          font-weight: bold;
          text-align: center;
          font-size: 28px;
        }

        .catch {
          font-size: 18px;
          font-weight: bold;
        }

        .catch .sec {
          color: var(--secondary-color);
          font-size: 22px;
        }

        .list-group-item {
          font-weight: bold;
          font-size: 18px;
        }

        .lg-head {
          background-color: var(--secondary-color);
          color: var(--primary-color);
          font-size: 24px;
        }

        @media (max-width: 767px) {
            .catch {
              text-align: justify;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Home;
