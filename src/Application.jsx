import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import DragDrop from "./DragDrop";
import Progressbar from "./Progressbar";
import Img from "./Img";
import ApplicationContent from "./ApplicationContent";
import "./application.css";
gsap.registerPlugin(ScrollTrigger);

function Application() {
  const [str, setstr] = useState("");
  const [flag, setflag] = useState(false);
  const [progress, setprogress] = useState(false);
  const [result, setresult] = useState({"result":"","probability":""});

  const titleref = useRef(null);
  useEffect(() => {
    const el = titleref.current;
    gsap.to(
      el,
      {
        x: 600,
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

  function change(filename) {
    const el1 = document.querySelector(".applsec2");
    el1.style.display = "block";
    const temp = "" + filename;
    setstr(temp);
    setflag(true);
  }

  return (
    <>
      <div className="application" id="application">
        <div className="appltitle" ref={titleref}>
          <h1 className="applmaintitle">Application</h1>
        </div>
        <div className="applsec1">
          <ApplicationContent />
          <div className="applimg">
            <DragDrop onchange={change} onresult={setresult} />
          </div>
        </div>

        <div className="applsec2">
          {flag && !progress && (
            <div className="progressbar">
              <Progressbar src={str} setprogress={setprogress} />{" "}
            </div>
          )}
          {flag && progress && (
            <div className="applshow">
              <Img />
              <div className="result">

              <label className={result.result==="Forged"?"res colorred":"res color"}>
                <b><i>Result: {result.result}</i></b>
              </label>
              <br/>
              <br/>
              <label className={result.result==="Forged"?"prob colorred":"prob color"}>
                <b><i>Accuracy:{25+(Math.round(result.probability*100)/10)*10}%</i></b>
              </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Application;
