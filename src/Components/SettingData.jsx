import React from "react";

const SettingData = ({ data }) => {
  return (
    <div className="box">
      <ul>
        {data.map((el, idx) => (
          <li key={idx + 1}>
            {idx + 1} - {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingData;
