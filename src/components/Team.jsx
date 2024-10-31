import React from "react";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import rajdeep from "../images/rajdeep.jpg";
import nishant from "../images/nishant.jpg";
import pritish from "../images/pritish.jpg";

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
              <Card.Text className="c-text">
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
              <Card.Text className="c-text">
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
              <Card.Text className="c-text">
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
          <Image src={rajdeep} className="res-img my-2" fluid/>
        </Col>
        <Col md={8}>
          <Card className="int my-2">
            <Card.Body>
              <Card.Text>
                <span className="sec">Rajdeep Boral</span> has a background in Theoretical Condensed Matter Physics. He completed his Master's degree at Ramakrishna Mission Residential College.
                <br/>
                His research interests center on the design of battery materials, specifically examining their electronic and magnetic properties in strongly correlated systems.
                <br/>
                Rajdeep employs Density Functional Theory (DFT) and Machine Learning (ML) to explore these complex materials. 
                <br/>
                In addition, he is developing machine-learning-based force fields to reduce the reliance on computationally expensive ab initio Molecular Dynamics (AIMD) simulations.
                <br/>
                Rajdeep joined TCG Crest in 2023 as a Junior Research Fellow.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src={nishant} className="res-img my-2" fluid/>
        </Col>
        <Col md={8}>
          <Card className="int my-2">
            <Card.Body>
              <Card.Text>
              <span className="sec">Nishant Mishra</span> has a background in Physics. He did his Master's from National Institute of Technology Silchar.
                <br/>
                His research interest lies on computational material discovery using DFT and Machine Learning (ML).
                <br/>
                He is also working on construction of Machine Learning Interatomic Potential to study rection dynamics of Solid Electrolyte interfaces. 
                <br/>
                He has been working with TCG CREST since 2023 and will soon be joining PennState University for a Doctoral programme.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Image src={pritish} className="res-img my-2" fluid/>
        </Col>
        <Col md={8}>
          <Card className="int my-2">
            <Card.Body>
              <Card.Text>
              <span className="sec">Pritish Joshi</span> has a background in Computational Chemistry and Biophysics. He did his Master's from Indian Institute of Technology Dhanbad.
                <br/>
                His research interest lies on Inverse material design for cathodes using Deep Neural Networks and DFT studies.
                <br/>
                He is also studying rection dynamics of Solid Electrolyte Interfaces using ab initio Molecular Dynamics (AIMD). 
                <br/>
                He joined TCG Crest in 2024 and has previously worked on Computational drug discovery using Machine Learning (ML) and Classical Molecular Dynamics (CMD).
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr className="my-4" />
      <h2 className="mt-4 blinking-text">Join the team!</h2>
      <Row>
        <p>
          We are actively on the lookout for motivated <span className="sec">students </span>and <span className="sec">post-docs </span>to join our group!
          <br/>
          <h4 className="sec">Prospective students:</h4>
          If you would like to work with us, please write to the PI. PhD admissions usually have to go through the procedures setup by <span className="sec">AcSIR</span>, followed by an interview with the <span className="sec">TCG CREST </span>department. 
          Prospective Post-doctoral researchers:
          Please write to the PI to discuss possibilities. Listed below are some of the fellowship opportunities that post-docs joining IISc typically avail.
          <ul>
            <li>National Post Doctoral Fellowship: Science and Engineering</li>
            <li>UGC D.S. Kothari Fellowships</li>
          </ul>
        </p>
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
          
          .c-text {
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

          .int {
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
          
          .int .card-text {
            font-size: 18px;
            line-height: 1.5;
          }
          
          .int:hover {
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          .blinking-text {
            animation: blink 1s infinite;
          }

          @media (max-width: 767px) {
            .button-container {
              display: flex;
              justify-content: center;
            }

            .int {
                height: var(--bs-card-height);
          }
        `}
      </style>
    </Container>
  );
}

export default Team;