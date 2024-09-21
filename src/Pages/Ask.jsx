import React, { useState, useEffect, useRef } from 'react';
import '../Style/ask.css'; 
import bouquet from "../Assets/bouquet.png";
import back from "../Assets/back.png";
import character from "../Assets/character.png";

const Ask = () => {
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '50%' });
  const noButtonRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);

  // Function to randomly move the "No" button
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50)) + 'px';
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  useEffect(() => {
    const noButton = noButtonRef.current;

    if (noButton) {
      noButton.addEventListener('mouseover', moveNoButton);
    }

    return () => {
      if (noButton) {
        noButton.removeEventListener('mouseover', moveNoButton);
      }
    };
  }, []);

  const handleYesClick = () => {
    setShowDialog(true); // Show the dialog box
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="proposal-container">
      <div className="main">
      <img
      src={back} 
        alt="Bouquet of Flowers"
        className="back"
      />
      </div>
      <div className="top">
      <img
      src= {bouquet}
        alt="Bouquet of Flowers"
        className="bouquet"
      />
      <h1>Will you be my Date?</h1>
      <div className="buttons-container">
        <div className="for-yes">
        <button className="yes-button" onClick={handleYesClick}>
          Yes
        </button>
        <img src={character} alt="Cartoon Character" class="character"/>
        </div>
        <button
          className="no-button"
          ref={noButtonRef}
          style={{ top: noPosition.top, left: noPosition.left, position: 'absolute' }}
        >
          No
        </button>
      </div>
      </div>
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Yay!🎉</h2>
            <p>My person said Yes! 😍</p>
            <button className="close-button" onClick={closeDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ask;
