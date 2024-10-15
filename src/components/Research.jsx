import React from "react";
import { Image , Container, Row, Col, Card } from "react-bootstrap";
import place from "../images/place.png";

function Research() {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h1>Research</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <h2 className="mt-4">Battery Materials Discovery</h2>
        <Col md={4}>
          <Image src={place} className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
              Cathode material discovery involves the employment of the Density Functional Theory (DFT)
              via packages such as VASP integrated with machine learning to concoct some promising candidate
              materials that can be used as cathodes in Na/Li-ion batteries. Our group has addressed the 
              unique problem of predicting the properties of non-stoichimetric compounds. The work involves 
              running DFT simulations to calculate crystal structures, stability, etc. At the same time, 
              the ML model is trained on data acquired from sources such as Materials Project and ICSD. 
              Using ML reduces the time and resources required. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Machine Learning & Neural Networks</h2>
        <Col md={4}>
          <Image src={place} className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Machine Learning Force Fields</h2>
        <Col md={4}>
          <Image src={place} className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
              The development of machine learning force fields is a 
              game-changer technique for running the quantum simulation 
              at the cost of classical. We generate data by running 
              Ab-initio Molecular Dynamics (AIMD) and use machine learning 
              algorithms to fit a Moment Tensor Potential (MTP), which can 
              then be independently used for running Molecular Dynamics Simulation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Electronic Structure Studies</h2>
        <Col md={4}>
          <Image src={place} className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Reaction Dynamics Studies</h2>
        <Col md={4}>
          <Image src={place} className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <style>
        {`
          h1 {
            font-size: 50px;
            font-weight: bold;
          }

          h2 {
            color: var(--secondary-color);
          }

          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 10px;
            height: 250px;
          }
          
          .res-img {
            border-radius: 10px;
            width: 100%;
            height: 250px;
          }
          
          .card-text {
            font-size: 18px;
            line-height: 1.5;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
          @media (max-width: 767px) {
            .card {
                height: var(--bs-card-height);
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Research;
