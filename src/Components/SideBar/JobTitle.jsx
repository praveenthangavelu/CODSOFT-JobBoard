import React from "react";
import InputField from "./InputField";

const JobTitle = ({handleChange}) => {
  return (
    <div className=" my-2 mb-2 rounded px-5 py-5 card">
  <h1 className="text-white text-2xl font-mono font-semibold mb-2 bg-transparent">Job Title</h1>
      <div className="grid grid-cols-2">
        <InputField handleChange={handleChange} value="Web Developer" title="Web Developer" name="test" />
        <InputField handleChange={handleChange} value="Software Engineer" title="Software Engineer" name="test" />
        <InputField handleChange={handleChange} value="Data Scientist" title="Data Scientist" name="test" />
        <InputField handleChange={handleChange} value="UI/UX Designer" title="UI/UX Designer" name="test" />
        <InputField handleChange={handleChange} value="Frontend Developer" title="Frontend Developer" name="test" />
        <InputField handleChange={handleChange} value="DevOps Engineer" title="DevOps Engineer" name="test" />
      </div>
    </div>
  );
};

export default JobTitle;
