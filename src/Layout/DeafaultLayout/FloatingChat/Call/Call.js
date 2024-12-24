import React from "react";
import "./Call.scss";
const Call = () => {
  return (
    <div className="circle-call" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <img
        src="https://ducdongduongquangha.com/wp-content/plugins/button-contact-vr/img/phone.png"
        alt="Logo Phone"
        className="logo-call"
      />
      <span style={{ "--i": 0 }}></span>
      <span style={{ "--i": 1 }}></span>
      <span style={{ "--i": 2 }}></span>
      <span style={{ "--i": 3 }}></span>
    </div>
  );
};
export default Call;
