import React, { useState, useEffect } from "react";
import { showBlog, FirstName } from "../editable-stuff/configurations.json";
import { Link } from "react-scroll";

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 200;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${
        isTop ? "bg-transparent" : "bg-gradient"
      } `}
    >
      <Link
        className="navbar-brand"
        smooth={true}
        duration={1500}
        delay={200}
        spy={true}
        to="home"
      >
        {`<${FirstName} />`}
      </Link>
      <button
        className="d-none navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link lead"
              to="aboutme"
              smooth={true}
              delay={200}
              duration={1500}
              spy={true}
            >
              <b>About</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link lead"
              to="skills"
              smooth={true}
              delay={200}
              duration={1500}
              spy={true}
            >
              <b>Skills</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link lead"
              to="projects"
              smooth={true}
              delay={200}
              duration={1500}
              spy={true}
            >
              <b>Projects</b>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b>Resume</b>
            </a>
          </li> */}
          <li className="nav-item">
            <Link
              className="nav-link lead"
              to="experience"
              smooth={true}
              delay={200}
              duration={1500}
              spy={true}
            >
              <b>Experience</b>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#leadership"}
            >
              <b>Leadership</b>
            </a>
          </li> */}
          <li className="nav-item">
            <Link
              className="nav-link lead"
              to="interests"
              smooth={true}
              delay={200}
              duration={1500}
              spy={true}
            >
              <b>Interests</b>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              <b>Contact</b>
            </a>
          </li> */}
          {/* {showBlog && (
            <li className="nav-item">
              <Link
                className="nav-link lead"
                to={process.env.PUBLIC_URL + "/blog"}
              >
                <b>Blog</b>
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
