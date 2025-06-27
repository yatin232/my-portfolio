import React, { useEffect, useState } from 'react';
import '../Resume/YSRLogo.css';

const YSRLogo = ({ size = 'medium', animated = true }) => {
  const [lettersAnimated, setLettersAnimated] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setLettersAnimated(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const sizeClasses = {
    small: 'ysr-logo-small',
    medium: 'ysr-logo-medium', 
    large: 'ysr-logo-large'
  };

  return (
    <div className={`ysr-logo-container ${sizeClasses[size]} ${animated ? 'animated' : ''}`}>

      <div className="bg-grid"></div>
      

      <div className="glow-orb"></div>

      <div className="code-brackets bracket-left">&lt;</div>
      <div className="code-brackets bracket-right">/&gt;</div>

      <div className="ysr-container">
        <div className="floating-text text-1">DEVELOPER</div>
        <div className="floating-text text-2">CREATIVE</div>
        <div className="floating-text text-3">INNOVATOR</div>
        <div className="floating-text text-4">DESIGNER</div>
        
        <div className="letter-wrapper">
          <span className={`letter letter-y ${lettersAnimated ? 'animate' : ''}`} data-letter="Y">Y</span>
        </div>
        <div className="letter-wrapper">
          <span className={`letter letter-s ${lettersAnimated ? 'animate' : ''}`} data-letter="S">S</span>
        </div>
        <div className="letter-wrapper">
          <span className={`letter letter-r ${lettersAnimated ? 'animate' : ''}`} data-letter="R">R</span>
        </div>
      </div>
      
      <div className="particles">
        {Array.from({length: 12}, (_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              width: `${Math.random() * 4 + 3}px`,
              height: `${Math.random() * 4 + 3}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default YSRLogo;