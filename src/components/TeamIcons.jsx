'use client';

import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function TeamIcons({ links }) {
  if (!links) return null;

  return (
    <div className="button-container">
      <Button variant="primary" href={links.github} target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </Button>
      <Button variant="primary" href={links.scholar} target="_blank">
        <FontAwesomeIcon icon={faGoogleScholar} />
      </Button>
      <Button variant="primary" href={links.linkedin} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </Button>
    </div>
  );
}

export default TeamIcons;
