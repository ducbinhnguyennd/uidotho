import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"; // Đảm bảo bạn tạo file CSS riêng để quản lý style

const Navbar = ({ onMenuSelect }) => {
  const handleSubmenuClick = (content) => {
    if (onMenuSelect) {
      onMenuSelect(content);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="menu">
          <li className="menu-item has-submenu">
            <span className="menu-title">
              <i className="fas fa-bars"></i> Danh mục sản phẩm
            </span>
            <ul className="submenu">
              <li onClick={() => handleSubmenuClick("Nội dung Tượng Phật")}>
                <Link to="/cart">TƯỢNG PHẬT</Link>
              </li>
              <li onClick={() => handleSubmenuClick("Nội dung Tượng Quan Âm")}>
                <Link to="/thanhcong">TƯỢNG PHẬT QUAN ÂM</Link>
              </li>
              <li onClick={() => handleSubmenuClick("Nội dung Tượng Di Lặc")}>
                <Link to="/tuong-di-lac">TƯỢNG PHẬT DI LẶC</Link>
              </li>
            </ul>
          </li>

          {/* Các mục khác */}
          <li className="menu-item">
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li className="menu-item">
            <Link to="/gioi-thieu">GIỚI THIỆU</Link>
          </li>
          <li className="menu-item">
            <Link to="/san-pham">SẢN PHẨM</Link>
          </li>
          <li className="menu-item">
            <Link to="/kien-thuc-phong-thuy">KIẾN THỨC PHONG THỦY</Link>
          </li>
          <li className="menu-item has-submenu">
            <span className="menu-title">HƯỚNG DẪN</span>
            <ul className="submenu">
              <li>
                <Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link>
              </li>
              <li>
                <Link to="/huong-dan-thanh-toan">Hướng dẫn thanh toán</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <Link to="/lien-he">LIÊN HỆ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
