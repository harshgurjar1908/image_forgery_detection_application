import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import AboutContent from "./AboutContent";
import "./about.css";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const titleref = useRef(null);
  useEffect(() => {
    const el = titleref.current;
    gsap.to(
      el,
      {
        x: -200,
        duration: 5,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "restart complete none none",
          // markers:true
        },
      },
      []
    );
  });

  return (
    <>
      <div className="about" id="about">
        <div className="abouttitle" ref={titleref}>
          <h1 className="aboutmaintitle">About</h1>
        </div>
        <AboutContent />
      </div>
    </>
  );
}

export default About;
