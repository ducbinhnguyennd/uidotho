import React from "react";
import "./Contact.scss";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <MdLocationOn style={{ color: "#334862", fontSize: "20px", display: "inline-block" }} />
        <p className="contact-name">
          ĐỒ THỜ CÔNG HƯƠNG, ngã ba Cát Đằng, Yên Tiến, Ý Yên, Nam Định
        </p>
      </div>

      <div className="top-bar-right">
        <p className="contact-phone">
          Liên hệ: <span style={{color: 'red', fontWeight: 'bold'}}>0985.963.784</span>
        </p>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Contact;
