import React from "react";
import InputField from "./InputField";

const JobType = ({ handleChange }) => {
  return (
    <div>
            <div className=" my-2 mb-2  rounded px-5 py-5 card">
            <h1 className="text-white text-2xl font-mono font-semibold mb-2 bg-transparent">Job Type</h1>
        <div className="grid grid-cols-2 gap-3">

        <InputField
          handleChange={handleChange}
          value="Full-Time"
          title="Full-Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Temporvary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Part-Time"
          title="Part-Time"
          name="test"
        />
        </div>
      </div>
    </div>
  );
};

export default JobType;
