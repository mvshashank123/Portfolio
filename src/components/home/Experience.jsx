import React, { useState, useEffect, Profiler } from "react";
import "./subcomponents.css";

const Experience = () => {
  return (
    <div id="experience" className="parent" style={{ backgroundColor: "gray" }}>
      <br />
      <h1 className="display-4 mb-5 text-center">Experience</h1>
      <div className="education">
        <p className="p__style1" style={{ fontSize: "28px" }}>
          <strong> Software Engineer </strong>- Capgemini
        </p>
        <p className="p__style2" style={{ fontSize: "22px" }}>
          09/2019-Present
        </p>
      </div>
      <br />
      <div className="education">
        <p className="p__style1" style={{ fontSize: "28px" }}>
          <strong> Internship Trainee </strong>- SSS Springs
        </p>
        <p className="p__style2" style={{ fontSize: "22px" }}>
          06/2018-08/2018
        </p>
      </div>
      <br />
      <div className="education">
        <p className="p__style1" style={{ fontSize: "28px" }}>
          <strong>Lead Design Engineer </strong>- Team FireHawks
        </p>
        <p className="p__style2" style={{ fontSize: "22px" }}>
          03/2018-06/2018
        </p>
      </div>
    </div>
  );
};

export default Experience;
