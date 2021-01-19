import React from 'react';
import PropTypes from 'prop-types';

const SetInfo = (props) => {
  const { handleInputChange, resetInput } = props;

  const options = ['Select a table', 'A1', 'A2', 'A3'];
  const handleChange = (e) => {
    handleInputChange(e.target);
  };
  return (
    <div className="input-section">
      <input
        className="input"
        type="text"
        placeholder="Client name"
        name="client"
        onChange={handleChange}
        value={resetInput.client}
      />
      <select
        className="select"
        name="table"
        onChange={handleChange}
        value={resetInput.table}
      >
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </div>
  );
};

SetInfo.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  resetInput: PropTypes.shape.isRequired,
};

export default SetInfo;
