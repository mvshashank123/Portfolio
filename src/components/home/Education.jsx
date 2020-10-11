import React from "react";
import "./subcomponents.css";

const Education = () => {
  return (
    <div
      id="experience"
      className="parent"
      style={{ backgroundColor: "gray" }}
    >
    <br/>
      <h1 className="display-4 mb-5 text-center">Education</h1>
      <div className="parent">
        <div className="education">
          <p className="p__style1" style={{ fontSize: "28px" }}>
            <strong>Bachelor of Engineering in Mechanical</strong>
            <br />
            - Bangalore Institute of Technology
            <br/>
            <p className="p__style3" style={{ fontSize: "20px" }}>
            Grade - 8.6
          </p>
          </p>
          <p className="p__style2" style={{ fontSize: "22px" }}>2015-2019</p>
        </div>
        
        <div className="education">
          <p className="p__style1" style={{ fontSize: "28px" }}>
            <strong>Pre - University Course </strong>- Jain College
            <br/>
            <p className="p__style3" style={{ fontSize: "20px" }}>
            Percentage - 92.12
          </p>
          </p>
          <p className="p__style2" style={{ fontSize: "22px" }}> 2013-2015</p>
        </div>
        <br />
        <div className="education">
          <p className="p__style1" style={{ fontSize: "28px" }}>
            <strong>CBSE Class X </strong>- JSS Public School
            <br/>
            <p className="p__style3" style={{ fontSize: "20px" }}>
            Grade - 8.2
          </p>
          </p>
          <p className="p__style2" style={{ fontSize: "22px" }}> 2010-2013</p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Education;
