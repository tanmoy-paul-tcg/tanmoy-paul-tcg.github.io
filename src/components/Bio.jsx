import React from "react";

function Bio() {
  return (
    <div>
      <div className="greet">
        <h1>
          Dr.Tanmoy Paul
        </h1>
        <h2>
          <span className="sec">Research Scientist</span>
        </h2>
      </div>
        <p className="lead">Tanmoy Paul is a research scientist of the Research Institute for Sustainable Energy <span className="sec">(RISE) </span>
        of TCG Centres for Research and Education in Science and Technology <span className="sec">(TCG-CREST)</span>. 
        Dr. Paul received his B.Sc degree from <span className="sec">University of Calcutta</span> with honours in Physics and M.Sc. 
        from <span className="sec">Indian Institute of Engineering Science and Technology</span>, Shibpur 
        (formerly Bengal Engineering and Science University) in Applied Physics with a distinction,
        and his PhD in Science from <span className="sec">Indian Association for the Cultivation of Science</span>. 
        Following postdoctoral appointments from Indian Association for the Cultivation of Science, 
        Technion-Israel Institute of Technology, National Taiwan University, 
        Academia Sinica and S N Bose National Centre for Basic Sciences, 
        he joined <span className="sec">TCG CREST</span> in August of 2022.</p>
      <style>
        {`
          h1 {
            font-size: 50px;
            font-weight: bold;
          }

          .lead {
            font-size: 17px;
            font-weight: bold;
          }

          .sec {
            color: var(--secondary-color);
          }

          @media (max-width: 767px) {
            .lead {
              text-align: justify;
            }

            .greet {
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Bio;
