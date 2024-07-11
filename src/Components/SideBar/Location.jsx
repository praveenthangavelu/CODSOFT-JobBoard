import React from "react";
import InputField from "./InputField";
import '../Home/style.css'

const Location = ({ handleChange }) => {
  return (
    <div>
      <div className=" my-2 mb-2  rounded px-5 py-5 card">
        <h1 className="text-white text-2xl font-mono font-semibold mb-2 bg-transparent">Job Location</h1>
        <div className="grid grid-cols-3">


        <InputField
          handleChange={handleChange}
          value="Banglore"
          title="Banglore"
          name="test"
          />
        <InputField
          handleChange={handleChange}
          value="Chennai"
          title="Chennai"
          name="test"
          />
        <InputField
          handleChange={handleChange}
          value="Hydrabad"
          title="Hydrabad"
          name="test"
          />
        <InputField
          handleChange={handleChange}
          value="Madurai"
          title="Madurai"
          name="test"
          />
          </div>
      </div>
    </div>
  );
};

export default Location;
