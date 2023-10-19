import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import mercury from "./assets/mercury.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "./assets/logo1.gif";
import "./header.css";

gsap.registerPlugin(ScrollTrigger);
function Header() {
  const mercuryref = useRef(null);
  useEffect(() => {
    const el = mercuryref.current;
    gsap.to(
      el,
      {
        x: 50,
        duration: 8,
        scrollTrigger: {
          trigger: el,
          start: "top 5",
          end: "top -40%",
          scrub: 1,
          toggleActions: "restart none none none",
          // markers: true,
        },
      },
      []
    );
  });

  const innerlogoref = useRef(null);
  useEffect(() => {
    const el = innerlogoref.current;
    gsap.to(
      el,
      {
        x: 90,
        duration: 5,
        scrollTrigger: {
          trigger: el,
          start: "top 0%",
          end: "top 100%",
          scrub: 1,
          toggleActions: "restart none none none",
          // markers: true
        },
      },
      []
    );
  });

  const [menu, openmenu] = useState(false);

  const handlemenu = () => {
    openmenu(!menu);
  };
  return (
    <div className="header">
      <nav className="nav">
        <img className="innerlogo1" src={logo} ref={innerlogoref} />
        <img className="mercury" src={mercury} ref={mercuryref} />
        {!menu && (
          <div className="menuicon" onClick={handlemenu}>
            <MenuIcon />
          </div>
        )}
        {menu && (
          <span className="navbar" id="navbar">
            <Link smooth to="./Home.jsx#home" className="links" id="a1">
              Home
            </Link>
            <Link smooth to="./About.jsx#about" className="links" id="a2">
              About
            </Link>
            <Link smooth to="./Application.jsx#application" className="links" id="a3">
              Application
            </Link>
            {menu && (
              <div className="closeicon" onClick={handlemenu}>
                <CloseIcon />
              </div>
            )}
          </span>
        )}
      </nav>
    </div>
  );
}

export default Header;
