// components/PickUpDropOffAddress.js
import React, { useState } from 'react';

const PickUpDropOffAddress = ({ onNext }) => {
  const [pickUpAddress, setPickUpAddress] = useState('');
  const [dropOffAddress, setDropOffAddress] = useState('');

  const handleNext = () => {
    // Validate addresses if needed
    if (pickUpAddress.trim() === '' || dropOffAddress.trim() === '') {
      alert('Please enter valid addresses for both Pick Up and Drop Off.');
      return;
    }

    // Pass the data to the parent component
    onNext({
      pickUpAddress,
      dropOffAddress,
    });
  };

  return (
    <div>
      <h2>Pick Up and Drop Off Addresses</h2>
      <div>
        <label htmlFor="pickUpAddress">Pick Up Address:</label>
        <input
          type="text"
          id="pickUpAddress"
          value={pickUpAddress}
          onChange={(e) => setPickUpAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dropOffAddress">Drop Off Address:</label>
        <input
          type="text"
          id="dropOffAddress"
          value={dropOffAddress}
          onChange={(e) => setDropOffAddress(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PickUpDropOffAddress;
