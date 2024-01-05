// components/Bedroom.js
import React, { useState } from 'react';

const Bedroom = ({ onNext }) => {
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);

  const handleButtonClick = (value) => {
    // Pass the selected number of bedrooms to the parent component
    setSelectedBedrooms(value);
    onNext({ numberOfBedrooms: value });
  };

  return (
    <div>
      <h2>Number of Bedrooms</h2>
      <div>
        <button onClick={() => handleButtonClick(1)}>1</button>
        <button onClick={() => handleButtonClick(2)}>2</button>
        <button onClick={() => handleButtonClick(3)}>3</button>
        <button onClick={() => handleButtonClick(4)}>4</button>
        <button onClick={() => handleButtonClick('5+')}>5+</button>
      </div>
    </div>
  );
};

export default Bedroom;
