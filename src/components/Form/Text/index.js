import React from "react";
const Text = ({ text, name, value }) => {
  return (
    <div className="profile-data">
      <div className="field-title">{text}</div>
      <div>
        <input className="field-data" name={name} value={value} type="text" />
      </div>
    </div>
  );
};
export default Text;
