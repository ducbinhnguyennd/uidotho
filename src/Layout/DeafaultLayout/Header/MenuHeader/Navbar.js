import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ onMenuSelect }) => {
  const [categories, setCategories] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

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

  const handleSubmenuClick = () => {
    setMenuOpen(false); // Close the menu when a submenu item is clicked
    setSubmenuOpen(false); // Close the submenu as well
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
          <li
            className={`menu-item has-submenu ${
              submenuOpen ? "submenu-active" : ""
            }`}
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <span
              className="menu-title"
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              <i className="fas fa-bars"></i> Danh mục sản phẩm
            </span>
            <ul className={`submenu ${submenuOpen ? "submenu-open" : ""}`}>
              {categories.map((category) => (
                <li key={category._id} onClick={handleSubmenuClick}>
                  <Link to={`/san-pham/${category.namekhongdau}`}>
                    {category.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/gioi-thieu-do-tho-y-yen">GIỚI THIỆU</Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/">SẢN PHẨM</Link>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/">KIẾN THỨC PHONG THỦY</Link>
          </li>
          <li
            className="menu-item has-submenu"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            HƯỚNG DẪN
            <ul className="submenu">
              <li onClick={handleSubmenuClick}>
                <Link to="/chinh-sach-van-chuyen">Chính sách vận chuyển</Link>
              </li>
              <li onClick={handleSubmenuClick}>
                <Link to="/huong-dan-thanh-toan">Hướng dẫn thanh toán</Link>
              </li>
              <li onClick={handleSubmenuClick}>
                <Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link>
              </li>
              <li onClick={handleSubmenuClick}>
                <Link to="/doi-tra">Chính sách giao hàng - đổi trả</Link>
              </li>
              <li onClick={handleSubmenuClick}>
                <Link to="/cam-ket">Cam kết và quy định chung</Link>
              </li>
              <li onClick={handleSubmenuClick}>
                <Link to="/bao-mat">Bảo mật thông tin</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item" onClick={() => setMenuOpen(false)}>
            <Link to="/lien-he">LIÊN HỆ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
