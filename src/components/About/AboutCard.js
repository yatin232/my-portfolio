import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const edu = [
    {
      degree: "Bachelor of Computer Applications",
      abbr: "BCA",
      college: "BPIBS (Guru Gobind Singh Indraprastha University)",
      result: "8.7 CGPA",
      delay: "0s",
      url: "https://www.bpibs.in/",
    },
    {
      degree: "Master of Computer Applications",
      abbr: "MCA",
      college: "BCIIT (Guru Gobind Singh Indraprastha University)",
      result: "8.7 CGPA",
      delay: "1.2s",
      url: "https://www.bciit.ac.in/",
    },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* ---------- INTRO ---------- */}
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am{" "}
          <span className="purple">Yatinder Singh Rawat</span> from{" "}
          <span className="purple">Greater Noida, Uttar Pradesh</span>. I am passionate about full-stack
          development and always eager to learn new technologies.
          <br />
          <br />
          Apart from coding, here are some things I love doing:
        </p>

        <ul>
          <li className="about-activity">
            <ImPointRight /> Listening to Music
          </li>
          <li className="about-activity">
            <ImPointRight /> Exploring Tech Gadgets
          </li>
          <li className="about-activity">
  <ImPointRight />{" "}
  <a
    href="https://www.youtube.com/@ysrvlogs0007" 
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    Vlogging – Subscribe my Channel CLICK ME!
  </a>
</li>

        </ul>
        <h2 className="timeline-heading purple mb-3 mt-4">Education Timeline</h2>

        <div className="timeline">
          <span className="timeline-progress" />

          {edu.map(({ degree, abbr, college, result, delay, url }, i) => (
            <div
              className="timeline-item"
              key={i}
              style={{ "--delay": delay }}
            >
              <h5 className="degree">
                <span className="purple">{abbr}</span> — {degree}
              </h5>
              <p className="college mb-1">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purple"
                  style={{ textDecoration: "none" }}
                >
                  {college}
                </a>
              </p>
              <span className="result purple fw-bold">{result}</span>
            </div>
          ))}
        </div>

        <p className="quote-text mt-4" style={{ color: "rgb(155 126 172)" }}>
          "Keep learning, keep building, and keep evolving!"
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
