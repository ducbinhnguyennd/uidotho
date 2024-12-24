import React from "react";
import "./LienHe.scss";

const LienHe = () => {
    return (
        <div id="lienHe">
            <h2 className="title">Liên hệ</h2>
            <div className="contact-info">
                <h4>
                    Cửa hàng <span className="red">Đồ thờ Công Hương</span>
                </h4>
                <p className="description">
                    Địa chỉ: Ngã ba Cát Đằng, Yên Tiến, Ý Yên, Nam Định
                </p>
                <p className="description">
                    Hotline: <span className="red">0387 988 996</span>
                </p>
                <p className="description">
                    Tên: <span className="bold">Nguyễn Văn Công</span>
                </p>
                <p className="description">
                    Tên: <span className="bold">Đỗ Thị Hương</span>
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
                    Email: <span className="red">cskh@dothoconghuong.vn</span>
                </p>
            </div>
        </div>
    );
};

export default LienHe;
