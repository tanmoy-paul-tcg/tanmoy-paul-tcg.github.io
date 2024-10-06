import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Buttons() {
  return (
    <div className="button-container">
      <Button
        variant="primary"
        href="https://github.com/paultanmoy00"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Button>
      <Button
        variant="primary"
        href="https://scholar.google.co.in/citations?user=8YG_SSAAAAAJ&hl=en"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGoogleScholar} />
      </Button>
      <Button
        variant="primary"
        href="https://www.linkedin.com/in/tanmoy-paul-11b79924/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Button>
      <style>
        {`
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
    </div>
  );
}

export default Buttons;
