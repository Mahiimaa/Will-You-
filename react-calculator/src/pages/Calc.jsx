import React, { useState } from 'react';
import '../styles/Calc.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [buttonColors, setButtonColors] = useState({});

  // Function to handle button click
  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(eval(input)); 
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }

    // Generate random button colors after each click
    const newColors = {};
    for (let i = 0; i <= 9; i++) {
      newColors[i] = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color hex
    }
    setButtonColors(newColors);
  };

  // Calculator buttons
  const buttons = [
    1, 2, 3, '+',
    4, 5, 6, '-',
    7, 8, 9, '*',
    'C', 0, '=', '/'
  ];

  return (
    <div className="calculator">
    <p> Calculator</p>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        {buttons.map((btn, index) => (
          <button
            key={index}
            style={{ backgroundColor: buttonColors[btn] || '#f0f0f0' }}
            onClick={() => handleClick(btn.toString())}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
