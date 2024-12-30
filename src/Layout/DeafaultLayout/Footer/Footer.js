import React from "react";
import "./Footer.scss";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Renders the footer section of the webpage including company information,
 * contact details, and navigation links.
 * 
 * The footer contains:
 * - Company logo and address links to two locations.
 * - Contact information with phone numbers and email.
 * - Informational links such as about us, contact, shipping policy, etc.
 * - A subscription form for consultations.
 * - Social media icons for connecting with the company.
 * 
 * This component uses various icons from react-icons for visual representation
 * and applies styles from the associated CSS classes to structure and format
 * the content.
 */

/******  52a52a3c-50de-47a0-8894-76d7be5d67d0  *******/
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='column'>
          <img
            src="/logo.png"
            alt="Logo"
            className="logo"
          />
          <p>ĐỒ GỖ CÔNG HƯƠNG</p>
          <div className="address-container">
            <a href="https://maps.app.goo.gl/z3xmqsCTZzZCacS4A"
              target="_blank"
              rel="noopener noreferrer" className="address">
              Cơ sở 1: Ngã 3 Cát Đằng, Xã Yên Tiến, Huyện Ý Yên, Tỉnh Nam Định
            </a>
            <br />
            <br />
            <a href="https://maps.app.goo.gl/KZkD3xqo1Mgpsypt8"
              target="_blank"
              rel="noopener noreferrer" className="address">
              Cơ sở 2: Ngã 3 Cát Đằng đi về hướng Ninh Bình 300m, Xã Yên Tiến, Huyên Ý Yên, Tỉnh Nam Định
            </a>
          </div>
          <p>
            <IoMdCall /> 0985.963.784 - 0982.560.805
          </p>
          <p>
            <IoMdMail /> ducbinhnguyennd@gmail.com
          </p>
        </div>
        <div style={{ display: 'flex', height: '500px', alignItems: 'center' }}>

          <div class="crack-column"></div>
        </div>
        <div className='column'>
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


        <div style={{ display: 'flex', height: '500px', alignItems: 'center' }}>
          <div class="crack-column"></div>
        </div>
        <div className='column'>
          <h3>GIỚI THIỆU</h3>
          <p>
            Đồ gỗ Công Hương là website giới thiệu các sản phẩm về đồ gỗ dưới sự sáng tạo, tinh tế dưới bàn tay nghệ nhân thương hiệu Công Hương.
          </p>
          <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
          <div className='socialIcons'>
            <FaFacebook
              className="icons"
              onClick={() => window.open("https://www.facebook.com/dothoconghuong/", "_blank")}
            />

            <IoMdMail className="icons" />
            <IoMdCall
              className="icons"
              onClick={() => window.location.href = "tel:0985963784"}
            />

            <SiZalo className="icons" onClick={() => window.open("https://zalo.me/0985963784", "_blank")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
