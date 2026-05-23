import React from 'react';
import { FaReact, FaJsSquare, FaNode, FaDatabase, FaGitAlt, FaCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { icon: <FaReact />, name: 'React', level: 90 },
    { icon: <FaJsSquare />, name: 'JavaScript', level: 85 },
    { icon: <FaNode />, name: 'Node.js', level: 80 },
    { icon: <FaDatabase />, name: 'MongoDB', level: 75 },
    { icon: <FaGitAlt />, name: 'Git', level: 85 },
    { icon: <FaCode />, name: 'HTML/CSS', level: 90 },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
            <p>{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;