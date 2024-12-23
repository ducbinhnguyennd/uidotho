import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ onMenuSelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://baominh.shop/theloaisanpham");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchCategories();
  }, []);



  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="menu">
          <li className="menu-item has-submenu">
            <span className="menu-title">
              <i className="fas fa-bars"></i> Danh mục sản phẩm
            </span>
            <ul className="submenu">
              {categories.map((category) => (
                <li
                  key={category._id}
                  onClick={() => onMenuSelect && onMenuSelect(category.name)}
                >
                   <Link to={`/san-pham/${category.namekhongdau}`}>
                    {category.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

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
