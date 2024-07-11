import React from 'react';
import '../Home/style.css'; // Make sure to import the custom CSS

const InputField = ({ handleChange, value, title, name }) => {
  return (
    <div>
      <div className="flex bg-transparent tems-center mb-1">
        <input 
          id={value} 
          type="radio" 
          name={name} 
          onChange={handleChange} 
          value={value} 
          className="custom-radio bg-transparent h-4 w-4 border-gray-300" 
        />
        <label htmlFor={value} className="font-medium bg-transparent text-white ml-2 block text-lg">
          {title}
        </label>
      </div>
    </div>
  );
};

export default InputField;
