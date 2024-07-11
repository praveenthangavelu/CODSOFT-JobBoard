import React from "react";
import InputField from "./InputField";

const Salary = ({handleChange}) => {
  return (
    <div className=" my-2 mb-2  rounded px-5 py-5 card">
<h1 className="text-white text-2xl font-mono font-semibold mb-2 bg-transparent">Salary</h1>
      <div className="grid grid-cols-4">
      <InputField handleChange={handleChange} value="50" title="50" name="test" />
        <InputField handleChange={handleChange} value="75" title="$75" name="test" />
        <InputField handleChange={handleChange} value="80" title="$80" name="test" />
        <InputField handleChange={handleChange} value="120" title="$120" name="test" />
        
      </div>
    </div>
  );
};

export default Salary;
