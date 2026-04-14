import React from "react";

function Bio({ bio }) {
  if (!bio) return null;
  return (
    <div>
      <div className="greet">
        <h1>
          {bio.name}
        </h1>
        <h2>
          <span className="sec">{bio.title}</span>
        </h2>
      </div>
      <p className="lead" dangerouslySetInnerHTML={{ __html: bio.description.replace(/className=/g, 'class=') }}></p>
      <style>{`
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
      `}</style>
    </div>
  );
}

export default Bio;
