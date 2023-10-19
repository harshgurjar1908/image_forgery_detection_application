import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Flip} from "gsap/Flip";
import { useRef, useEffect } from "react";
import logo from "./assets/logo1.gif";
import "./home.css";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);


function Home() {
  const imgref = useRef(null);
  useEffect(() => {
    const el = imgref.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 5,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "top top",
          // scrub:true,
          toggleActions: "play reverse reverse play",
        },
      }
    );
  }, []);

  const titleref = useRef(null);
  useEffect(() => {
    const el = titleref.current;
    gsap.to(
      el,
      {
        x: 400,
        duration: 5,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "restart complete none none",
        },
      },
      []
    );
  });
  return (
    <>
      <div className="home" id="home">
        <div className="div1">
          <div className="logo">
            <img className="innerlogo" src={logo} ref={imgref} />
          </div>
        </div>
        <div className="div2">
          <div className="title">
            <h1 className="maintitle" ref={titleref}>
              IMAGE FORGERY DETECTION APPLICATION
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
