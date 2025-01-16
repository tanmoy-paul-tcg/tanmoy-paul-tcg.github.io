import React from "react";
import { Container, Image, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { teamMembers } from "../data/teamData";

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
        {teamMembers.map((member) => (
          <Col lg={4} md={6} className="mb-4" key={member.name}>
            <Card>
              <Card.Img variant="top" src={member.image} alt={`${member.name} profile`} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className="c-text">
                  {member.title}
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    href={member.links.github}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                  <Button
                    variant="primary"
                    href={member.links.scholar}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGoogleScholar} />
                  </Button>
                  <Button
                    variant="primary"
                    href={member.links.linkedin}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr className="my-4" />
      <h2 className="mt-4">Research Interests</h2>
      {teamMembers.filter(member => member.research).map((member) => (
        <Row key={`research-${member.name}`}>
          <Col md={4}>
            <Image src={member.research.image} className="res-img my-2" fluid/>
          </Col>
          <Col md={8}>
            <Card className="int my-2">
              <Card.Body>
                <Card.Text>
                  <span className="sec">{member.name}</span> {member.research.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
      <hr className="my-4" />
      <h2 className="mt-4 blinking-text">Join the team!</h2>
      <Row>
        <p>
          We are actively on the lookout for motivated <span className="sec">students </span>and <span className="sec">post-docs </span>to join our group!
          <br/>
          <h4 className="sec">Prospective students:</h4>
          If you would like to work with us, please write to the PI. PhD admissions usually have to go through the procedures setup by <span className="sec">AcSIR</span>, followed by an interview with the <span className="sec">TCG CREST </span>department. 
          <h4 className="sec">Prospective Post-doctoral researchers:</h4>
          Please write to the PI along with your CV to discuss possibilities. Post-doctoral fellows usually get institutional funding, however projects occasionally provide financing as well.
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
          }
        `}
      </style>
    </Container>
  );
}

export default Team;
