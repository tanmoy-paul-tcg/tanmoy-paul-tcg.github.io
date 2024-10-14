import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rimage from "./Rimage";
import Bio from "./Bio";
import Buttons from "./Buttons";
import Typewriter from "typewriter-effect";

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
