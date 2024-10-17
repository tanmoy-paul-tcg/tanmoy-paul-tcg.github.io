import React from "react";
import { Image } from "react-bootstrap";

function Rimage() {
  return (
    <div className="image-p">
      <Image src='https://raw.githubusercontent.com/RISE-Crystals/RISE-Crystals.github.io/main/src/images/pfp.jpg' alt="my-pic" className="mb-4" roundedCircle fluid />
      <style>
        {`
          .image-p {
              display: flex;
              justify-content: center;
          }
              
          .rounded-circle {
            width: 80%;
            height: 80%;
            border: 12px solid var(--primary-color);
            -webkit-transition: all 0.5s linear;
            -o-transition: all 0.5s linear;
            transition: all 0.5s linear;
          }

          .rounded-circle:hover {
            border: 12px solid var(--secondary-color);
          }

          @media (max-width: 767px) {
            .image-p {
              display: flex;
              justify-content: center;
            }
          }
      `}
      </style>
    </div>
  );
}

export default Rimage;
