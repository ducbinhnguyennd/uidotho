import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ChiTietLayout.scss";

const ChiTietLayout = () => {
  const { tieude } = useParams(); // Lấy "tieude" từ URL
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://baominh.shop/chitietsanpham/${tieude}`
        );
        const data = await response.json();
        if (response.ok) {
          setProduct(data);
          console.log(data);
        } else {
          console.error("Không tìm thấy sản phẩm");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [tieude]);

  if (isLoading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (!product) {
    return <p>Không tìm thấy sản phẩm!</p>;
  }

  return (
    <div className="container">
      {/* <header>
        <h1>{product.name}</h1>
      </header> */}
      <div className="main">
        <div className="product-detail">
          <div className="product-image">
            <div className="chitiet-discount">
              <div className="chitiet-number-discount">13%</div>
            </div>
            <img src={product.image} alt={product.name} className="pdt-img" />

          </div>

          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="price">
              Giá:{" "}
              <span className="old-price">
                {product.price.toLocaleString()} đ
              </span> {" "}
              <span className="current-price">
                {product.price.toLocaleString()} đ
              </span>
            </p>
            <p className="description">{product.mota}</p>
            <div className="buttons">
              <button className="buy-now">Đặt hàng ngay</button>
              <button className="contact">Liên hệ</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Miễn phí vận chuyển | Giá tốt nhất | Bảo hành trọn đời</p>
      </footer>
    </div>
  );
};

export default ChiTietLayout;
