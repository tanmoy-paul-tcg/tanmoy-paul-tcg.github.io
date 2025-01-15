import React from "react";
import { Image , Container, Row, Col, Card } from "react-bootstrap";
import pos1 from "../images/pos1.jpg";
import pos2 from "../images/pos2.jpg";
import pos3 from "../images/pos3.jpg";
import pos4 from "../images/pos4.jpg";

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
        <h2 className="mt-4">Battery Materials Discovery :</h2>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/bmd.png' className="res-img mb-2"/>
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
        <h2 className="mt-4">Machine Learning & Neural Networks :</h2>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/mlnn.webp' className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Our research group specializes in creating cutting-edge predictive 
                models using advanced machine learning techniques and neural networks. 
                These models enable us to predict key material properties with remarkable accuracy, 
                which plays a crucial role in discovering novel materials for batteries. 
                Our regression models have accurately predicted average voltage performance in various materials. 
                In parallel, our generative neural network models are yielding promising results, 
                showing great potential for accelerating the discovery of novel materials. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Machine Learning Force Fields :</h2>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/mlff.png' className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Our group utilizes machine learning force fields, 
                with a particular emphasis on Moment Tensor Potentials (MTPs), 
                to enhance the accuracy and efficiency of atomistic simulations. 
                MTPs allow us to model interatomic interactions with high precision, 
                bridging the gap between computational speed and quantum-level accuracy. 
                These force fields are especially useful in studying complex material systems 
                where traditional methods fall short. By integrating MTPs, we can perform large-scale 
                molecular dynamics simulations, enabling the prediction of material behavior under various conditions, 
                from mechanical properties to phase transitions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Electronic Structure Studies :</h2>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/esc.png' className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                The study of electronic structure, including the distribution of 
                electronic states and spin configurations, is crucial for 
                understanding the behavior of battery materials such as cathodes and 
                solid electrolytes. A material's suitability for energy storage relies 
                heavily on its electronic properties, such as the presence of a band-gap, 
                which determines ionic conductivity and stability. Through advanced Density 
                Functional Theory (DFT) calculations, we analyze electronic density, band structures, 
                and charge transfer, ensuring that materials predicted by neural networks are viable 
                candidates for battery applications with optimal performance and stability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 className="mt-4">Reaction Dynamics Studies :</h2>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/rds.png' className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                To better predict the efficiency and lifespan of an electrochemical cell, 
                a deep understanding of reaction dynamics, including interface reactions 
                and site-specific processes, is essential. Computationally, 
                we achieve this by conducting extensive molecular dynamics (MD) simulations. 
                These simulations, both classical and Ab initio, 
                allow us to model the interactions and transformations at the atomic level. 
                By analyzing the resulting distribution curves, we can gain insights into the reaction pathways, 
                energetics, and progression of chemical reactions, enabling us to make accurate 
                predictions about the performance and stability of battery materials and interfaces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
        <h2>Presented Posters :</h2>
      </Row>
      <Row className="my-2">
        <Image src={pos1} className="poster-img" fluid />
      </Row>
      <Row className="my-2">
        <Image src={pos2} className="poster-img" fluid />
      </Row>
      <Row className="my-2">
        <Image src={pos3} className="poster-img" fluid />
      </Row>
      <Row className="my-2">
        <Image src={pos4} className="poster-img" fluid />
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
            height: 270px;
            overflow: auto;
          }
          
          .res-img {
            border-radius: 10px;
            width: 100%;
            height: 270px;
            border: 0.5px solid #9ed203;
          }
          
          .card-text {
            font-size: 18px;
            line-height: 1.5;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }

          .poster-img {
            border-radius: 20px;
            padding: 10px;
            border: 1px solid #9ed203;
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
