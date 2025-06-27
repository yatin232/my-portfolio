import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit,
  DiPython, DiHtml5, DiCss3
} from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";

function Techstack() {
  const techStack = [
    { icon: <DiHtml5 size={70} />, name: "HTML5" },
    { icon: <DiCss3 size={70} />, name: "CSS3" },
    { icon: <SiBootstrap size={60} />, name: "Bootstrap" },
    { icon: <DiJavascript1 size={70} />, name: "JavaScript" },
    { icon: <DiReact size={70} />, name: "React" },
    { icon: <DiNodejs size={70} />, name: "Node.js" },
    { icon: <DiMongodb size={70} />, name: "MongoDB" },
    { icon: <DiGit size={70} />, name: "Git" },
    { icon: <FaGithub size={65} />, name: "GitHub" },
    { icon: <DiPython size={70} />, name: "Python" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map(({ icon, name }, i) => (
        <Col xs={4} md={2} className="tech-icons" key={i}>
          {icon}
          <span className="tooltip-text">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
