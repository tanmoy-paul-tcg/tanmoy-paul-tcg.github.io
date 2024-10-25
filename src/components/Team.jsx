import React from "react";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <Container>
      <Row>
        <Col lg={6}>
        <h1>Team Members</h1>
        </Col>
      </Row>
      <hr className="my-4" />
      <Row>
      <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/rb.jpeg' alt="Card cap" />
            <Card.Body>
              <Card.Title>Rajdeep Boral</Card.Title>
              <Card.Text className="card-text">
                Doctoral Candidate
              </Card.Text>
              <div className="button-container">
                <Button
                  variant="primary"
                  href="https://github.com/WalterWhite1611"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGoogleScholar} />
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/rajdeep-boral-6621b9213"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/nm.jpeg' alt="Card cap" />
            <Card.Body>
              <Card.Title>Nishant Mishra</Card.Title>
              <Card.Text className="card-text">
                Project Associate
              </Card.Text>
              <div className="button-container">
                <Button
                  variant="primary"
                  href="https://github.com/nishantaMishra"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
                <Button
                  variant="primary"
                  href="#"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGoogleScholar} />
                </Button>
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4-%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img variant="top" src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/pj.jpeg' alt="Card cap" />
            <Card.Body>
              <Card.Title>Pritish Joshi</Card.Title>
              <Card.Text className="card-text">
                Project Associate
              </Card.Text>
              <div className="button-container">
                <Button
                  variant="primary"
                  href="https://github.com/DrtSinX98"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
                <Button
                  variant="primary"
                  href="https://scholar.google.com/citations?user=jUdY7OcAAAAJ&hl=en"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGoogleScholar} />
                </Button>
                <Button
                  variant="primary"
                  href="https://linkedin.com/in/pritish-joshi-b870bb242"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr className="my-4" />
      <h2 className="mt-4">Research Interests</h2>
      <Row>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/esc.png' className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                <span className="sec">Rajdeep Boral</span> is on holiday.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/esc.png' className="res-img mb-2"/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Nishant Mishra's research interest lies on computational material discovery using DFT and Machine Learning(ML). He is also working on
                construction of Machine Learning Interatomic Potential to study interface rections of Solid Electrolyte interfaces. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
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
      <style>
        {`
          h1 {
            font-size: 50px;
            font-weight: bold;
          }

          .card-img-top {
            padding: 5px;
            border-radius: 10px;
          }

          .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          }

          .card-body {
            border-radius: 10px;
          }

          .card-title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
          }
          
          .card-text {
            text-align: center;
            color: var(--secondary-color);
            font-size: 18px;
            line-height: 1.5;
          }
          
          .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }

        .button-container {
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: center;
          }

          .btn-primary {
            border-radius: 50px;
          }

          @media (max-width: 767px) {
            .button-container {
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Team;