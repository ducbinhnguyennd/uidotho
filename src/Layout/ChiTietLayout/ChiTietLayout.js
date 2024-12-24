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
              Giá: <span className="old-price">50.000.000đ</span>{" "}
              <span className="current-price">
                {product.price.toLocaleString()}đ
              </span>
            </p>
            <p className="description">{product.mota}</p>
            <div className="short-description">
              <p>
                <span style={{ color: "red" }}>Quý khách lưu ý:</span> khi lựa
                chọn mua bất kì sản phẩm nào nên chọn những cửa hàng có thương
                hiệu lâu năm trên thị trường , chế độ bảo hành sản phẩm , mức độ
                hoàn thiện chi tiết sản phẩm :
              </p>
              <ul>
                <li>
                  <strong>Cửa hàng lâu năm</strong> trên thị trường vì họ đã có
                  chỗ đứng nhất định cả về chất lượng cũng như giá cả vì với họ
                  uy tín quý hơn vàng
                </li>
                <li>
                  <strong>Chế độ bảo hành dài lâu :</strong> bảo hành trước và
                  sau khi mua sản phẩm , chế độ bảo hành dài lâu , khi sử dụng
                  cũ hoặc thời tiết hanh khô nứt có thể gửi về cửa hàng bảo hành
                  miễn phí phun mới và sửa lại sản phẩm
                </li>
                <li>
                  <strong>Mức độ sản phẩm :</strong> hoàn thiên kĩ đi hết vào
                  các nét của tác phẩm , ko quật máy làm tù hết các đường nét
                  tượng như hàng chợ giá rẻ hoặc 1 số cửa hàng buôn bán chộp
                  giật , mọi đường nét được chải chuốt tinh sảo. Sử dụng sơn
                  Oseven ( O7 Paint ) dòng Sơn cao cấp nhất , hoàn thiện 2 lớp
                  lót , 1 lớp mờ nên khi nên tượng nhìn rất mòng hàng , bụi bẩn
                  có thể phụt rửa thoải mái mà không sợ bay sơn Tượng làm đủ
                  kích thước chuẩn , đúng tỉ lệ, ko co , ko độn kích tượng bằng
                  cách nâng đế tượng, giảm chiều cao và chiều sâu thân tượng
                  .Quý khách hãy thật thông thái khi lựa chọn sản phẩm để tránh
                  mua phải hàng kém chất lượng
                </li>
              </ul>
            </div>
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
