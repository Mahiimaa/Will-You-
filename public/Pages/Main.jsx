import React, { useState, useEffect, useRef } from 'react';
import './Main.css'; // Make sure to add CSS for the chase effect

const Proposal = () => {
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '50%' });
  const noButtonRef = useRef(null);

  // Function to randomly move the "No" button
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50)) + 'px';
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100)) + 'px';
    setNoPosition({ top: randomTop, left: randomLeft });
  };

  useEffect(() => {
    const noButton = noButtonRef.current;

    // Add an event listener to the "No" button to trigger movement on hover
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
    alert('Yay! She said Yes!');
  };

  return (
    <div className="proposal-container">
      <img
        src="https://example.com/bouquet.png" // Replace with actual bouquet image URL
        alt="Bouquet of Flowers"
        className="bouquet"
      />
      <h1>Will you be my Girlfriend?</h1>
      <div className="buttons-container">
        <button className="yes-button" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="no-button"
          ref={noButtonRef}
          style={{ top: noPosition.top, left: noPosition.left, position: 'absolute' }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Proposal;
