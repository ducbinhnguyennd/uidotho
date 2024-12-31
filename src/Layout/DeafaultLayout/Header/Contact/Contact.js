import React from "react";
import "./Contact.scss";
import { MdLocationOn } from "react-icons/md";


const Contact = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <MdLocationOn style={{ color: "#334862", fontSize: "20px", display: "inline-block" }} />
        <p className="contact-name">
          ĐỒ THỜ CÔNG HƯƠNG, Ngã 3 Cát Đằng, Yên Tiến, Ý Yên, Nam Định
        </p>
      </div>

      <div className="top-bar-right">
        <p className="contact-phone">

          Liên hệ: <span style={{color: 'red', fontWeight: 'bold'}}>0985.963.784 - 0982.560.805</span>
        </p>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Contact;
