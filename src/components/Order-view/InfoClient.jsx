import React from 'react';

const SetInfo = (props) => {
  const options = ['Select a table', 'A1', 'A2', 'A3'];
  const handleChange = (e) => {
    props.handleInputChange(e.target);
  };
  return (
    <div className="input-section">
      <input
        className="input"
        type="text"
        placeholder="Client name"
        name="client"
        onChange={handleChange}
        value={props.resetInput.client}
      />
      <select
        className="select"
        name="table"
        onChange={handleChange}
        value={props.resetInput.table}
      >
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </div>
  );
};
export default SetInfo;
