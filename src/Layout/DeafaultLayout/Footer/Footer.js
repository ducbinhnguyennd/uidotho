import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
      <div className= 'container'>
        <div className= 'column'>
          <img
            src="https://dogovinhdinh.vn/wp-content/uploads/2020/09/vinh-dinh-logo-800x223.png"

            alt="Vinh Đỉnh Logo"
            className= 'logo'
          />
          <p>ĐỒ GỖ CÔNG HƯƠNG, ngã 3 Cát Đằng, Xã Yên Tiến, Huyên Ý Yên, Tỉnh Nam Định</p>
          <p>
          <IoMdCall/> 0985965784
          </p>
          <p>
          <IoMdMail/> ducbinhnguyennd@gmail.com
          </p>
        </div>

        <div className= 'column'>
          <h3>THÔNG TIN</h3>
          <ul>
            <li>Về chúng tôi</li>
            <li>Liên hệ</li>
            <li>Chính sách giao hàng - đổi trả</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Kiến Thức Phong Thủy</li>
          </ul>
          <h3>ĐĂNG KÝ TƯ VẤN</h3>
          <p>
            Hãy để lại thông tin để được tư vấn sản phẩm chất lượng tốt nhất, phù hợp với nhu cầu của bạn.
          </p>
          <form>
            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Số điện thoại" />
            <button type="submit">TƯ VẤN CHO TÔI</button>
          </form>
        </div>

        

        <div className= 'column'>
          <h3>GIỚI THIỆU</h3>
          <p>
            Đồ gỗ Vinh Đỉnh là website giới thiệu các sản phẩm về đồ gỗ dưới sự sáng tạo, tinh tế dưới bàn tay nghệ nhân thương hiệu Vinh Đỉnh.
          </p>
          <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className= 'socialIcons'>
          <FaFacebook className="icons" /> 
           <IoMdMail className="icons"/>
           <IoMdCall className="icons"/>
           <SiZalo className="icons"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
