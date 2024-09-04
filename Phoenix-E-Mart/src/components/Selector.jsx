import React, { useState } from 'react';

const Selector = (props) => {
  // State to manage the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Dummy options for the selector
  const options = props.option;

  // Event handler for option selection
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    props.onSelect(event.target.value)
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>
      {/* <label htmlFor="selector">Select an option:</label> */}
      <select
        id="selector"
        value={selectedValue}
        onChange={handleSelectChange}
        style={{
          backgroundColor: 'purple',
          color: 'white',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid black',
          outline: 'none',
        }}
      >
        <option value="" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {selectedValue && (
        <p style={{ marginTop: '10px' }} className='text-slate-400'>
          You selected: <strong>{selectedValue}</strong>
        </p>
      )}
    </div>
  );
};

export default Selector;
