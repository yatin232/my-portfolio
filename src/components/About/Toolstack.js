import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiJupyter } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode size={65} />, name: "VS Code" },
    { icon: <SiPostman size={65} />, name: "Postman" },
    { icon: <SiJupyter size={65} />, name: "Jupyter Notebook" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <span className="tooltip-text">{tool.name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
