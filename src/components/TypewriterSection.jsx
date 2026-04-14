'use client';

import React, { useState, useEffect } from 'react';
import Typewriter from "typewriter-effect";

export default function TypewriterSection({ strings }) {
  // Prevent hydration mismatches with a simple wrapper
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !strings || strings.length === 0) return <h3 className="type">...</h3>;

  return (
    <h3 className="type">
      <Typewriter
        options={{
          cursor: "_",
        }}
        onInit={(typewriter) => {
          let tw = typewriter;
          strings.forEach((str, idx) => {
            tw = tw.typeString(str);
            if (idx < strings.length - 1) {
              tw = tw.pauseFor(1000);
            }
          });
          tw.start();
        }}
      />
    </h3>
  );
}
