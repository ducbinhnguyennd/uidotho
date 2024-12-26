import React from "react";
import "./Zalo.scss";
const Zalo = () => {
  return (
    <a
      href="https://zalo.me/0985963784"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="circle-zalo">
        <img
          src="data:image/png;base64,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"
          alt="Logo Zalo"
          className="logo-zalo"
        />

        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
    </a>
  );
};
export default Zalo;
