import React, { useState } from "react";
import "../assets/css/styles.css";
import react from "../assets/images/tech/react.png";
import html5 from "../assets/images/tech/html5.png";
import css3 from "../assets/images/tech/css3.png";
import tailwind from "../assets/images/tech/tailwind.png";
import node from "../assets/images/tech/nodejs.png";
import cpp from "../assets/images/tech/c++.png";
import postgresql from "../assets/images/tech/postgresql.svg";
import mongodb from "../assets/images/tech/mongodb.png";
import github from "../assets/images/tech/github.png";
import redux from "../assets/images/tech/redux.png";

function Tech() {
  const [toggle, setoggle] = useState(1);

  return (
    <div className="tech">
      <h2>why invest In Bizdateup</h2>
      <p>
        Discover the Benefits of Investing with Bizdateup - Your Trusted Partner
        for Start-up Investment. Maximize your Returns with our Expertise and
        Proven Track Record.
      </p>
      <div className="tabs">
        <button
          className={toggle === 1 ? "active" : ""}
          onClick={() => setoggle(1)}
        >
          Frontend
        </button>
        <button
          className={toggle === 2 ? "active" : ""}
          onClick={() => setoggle(2)}
        >
          Backend
        </button>
        <button
          className={toggle === 3 ? "active" : ""}
          onClick={() => setoggle(3)}
        >
          Database
        </button>
        <button
          className={toggle === 4 ? "active" : ""}
          onClick={() => setoggle(4)}
        >
          Other
        </button>
      </div>
      <div className="skills">
        <div className={toggle === 1 ? "onactive" : "inactive"}>
          <img src={react} alt="react" />
        </div>
        <div className={toggle === 1 ? "onactive" : "inactive"}>
          <img src={html5} alt="html5" />
        </div>
        <div className={toggle === 1 ? "onactive" : "inactive"}>
          <img src={css3} alt="css3" />
        </div>
        <div className={toggle === 1 ? "onactive" : "inactive"}>
          <img src={tailwind} alt="tailwind" />
        </div>
        <div className={toggle === 2 ? "onactive" : "inactive"}>
          <img src={node} alt="node" />
        </div>
        <div className={toggle === 2 ? "onactive" : "inactive"}>
          <img src={cpp} alt="cpp" />
        </div>

        <div className={toggle === 3 ? "onactive" : "inactive"}>
          <img src={postgresql} alt="postgresql" />
        </div>
        <div className={toggle === 3 ? "onactive" : "inactive"}>
          <img src={mongodb} alt="mongodb" />
        </div>
        <div className={toggle === 4 ? "onactive" : "inactive"}>
          <img src={github} alt="github" />
        </div>
        <div className={toggle === 4 ? "onactive" : "inactive"}>
          <img src={redux} alt="redux" />
        </div>
      </div>
    </div>
  );
}

export default Tech;
