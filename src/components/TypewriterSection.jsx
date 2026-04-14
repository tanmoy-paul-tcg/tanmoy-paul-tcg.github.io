'use client';

import Typewriter from "typewriter-effect";

export default function TypewriterSection() {
  return (
    <h3 className="type">
      <Typewriter
        options={{
          cursor: "_",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome to ")
            .pauseFor(1000)
            .typeString("Materials Modelling Laboratory")
            .start();
        }}
      />
    </h3>
  );
}
