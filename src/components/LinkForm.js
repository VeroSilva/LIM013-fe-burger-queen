import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const LinkForm = () => {
  
  const initialStateValues = {
    url: '',
    webName: '',
    description: '',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="https://someurl.com" name="url" onChange={handleInputChange}/>
      </div>

      <div>
        <input type="text" placeholder="Website name" name="webName" onChange={handleInputChange}/>
      </div>

      <div>
        <textarea name="description" placeholder="Write a description" onChange={handleInputChange}></textarea>
      </div>

      <button>
        Save
      </button>
    </form>  
  )
};

export default LinkForm;