import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import rb from "../images/rb.jpeg";
import nm from "../images/nm.jpeg"
import pj from "../images/pj.jpeg"

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
            <Card.Img variant="top" src={rb} alt="Card cap" />
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
            <Card.Img variant="top" src={nm} alt="Card cap" />
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
            <Card.Img variant="top" src={pj} alt="Card cap" />
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
