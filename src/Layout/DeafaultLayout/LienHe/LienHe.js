import React, { useEffect } from "react";
import "./LienHe.scss";
import { Helmet } from "react-helmet";

const LienHe = () => {
    
    return (
        
        <div id="lienHe">
            <Helmet>
        <title>Tiêu đề mới</title>
      </Helmet>
            <div className="lienhe-title">Liên hệ</div>
            <div className="contact-info">
                <div id="name-contact">
                    Cơ sở sản xuất đồ thờ - đồ gỗ <span className="red">Đồ thờ Công Hương</span>
                </div>

                <p className="description">
                    Địa chỉ: <br />
                    <a href="https://maps.app.goo.gl/z3xmqsCTZzZCacS4A"
            target="_blank"
            rel="noopener noreferrer" className="address-lienhe">
            Cơ sở 1: Ngã 3 Cát Đằng, Xã Yên Tiến, Huyện Ý Yên, Tỉnh Nam Định
          </a>
          <br />
                    <a href="https://maps.app.goo.gl/KZkD3xqo1Mgpsypt8"
                        target="_blank"
                        rel="noopener noreferrer" className="address-lienhe">
                        Cơ sở 2: Ngã 3 Cát Đằng đi về hướng Ninh Bình 300m, Xã Yên Tiến, Huyên Ý Yên, Tỉnh Nam Định
                    </a>
                </p>
                <p className="description">
                    Hotline: <span className="red">0985.963.784 - 0982.560.805</span>
                </p>
                <p className="description">
                    Tên chủ cơ sở: <span className="bold">Anh Công</span>
                </p>
                <p className="description">
                    Fanpage:{" "}
                    <a
                        href="https://www.facebook.com/dothoconghuong/"
                        className="red">
                        https://www.facebook.com/dothoconghuong/
                    </a>
                </p>
                <p className="description">
                    Email: <span className="red">ducbinhnguyennd@gmail.com</span>
                </p>
            </div>
        </div>
    );
};

export default LienHe;
