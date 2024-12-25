import React from "react";
import "./LienHe.scss";

const LienHe = () => {
    return (
        <div id="lienHe">
            <div className="lienhe-title">Liên hệ</div>
            <div className="contact-info">
                <div id="name-contact">
                    Cơ sở sản xuất đồ thờ - đồ gỗ <span className="red">Đồ thờ Công Hương</span>
                </div>
              
                <p className="description">
                Địa chỉ: <br/>
                    Cơ sở 1: Ngã 3 Cát Đằng, Xã Yên Tiến, Huyện Ý Yên, Tỉnh Nam Định <br/>
                    Cơ sở 2: Ngã 3 Cát Đằng đi về hướng Ninh Bình 300m, Xã Yên Tiến, Huyên Ý Yên, Tỉnh Nam Định
                </p>
                <p className="description">
                    Hotline: <span className="red">0985.963.784 - 0982.560.805</span>
                </p>
                <p className="description">
                    Tên chủ cơ sở: <span className="bold">Anh Công</span>
                </p>
                <p className="description">
                    Tên: <span className="bold">Chị Hương</span>
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
