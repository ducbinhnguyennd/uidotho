import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryList from "../../components/ListTheLoai/CategoryList";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import "./TheLoaiLayout.scss";

const TheLoaiLayout = () => {
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); 
        const response = await fetch(`https://baominh.shop/san-pham/${slug}`);
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProduct();
  }, [slug]);

  if (!productDetails) return <div>Loading toàn bộ...</div>;

  return (
    <div className="theloailayout">
      <CategoryList />
      <div className="theloaisp">
        {loading ? (
          <Loading /> // Hiển thị loading khi đang tải
        ) : (
          productDetails.map((category) => (
            <div className="divtungsp" key={category.id}>
              <div className="discount">
                <p className="number-discount">-14%</p>
              </div>
              <img src={`${category.image}`} alt={category.name} />
              <div className="product-name">{category.name}</div>
              <div className="original-price">
                Giá gốc: <span>2000000đ</span>
              </div>
              <div className="price">{category.price} đ</div>
              <Link to={`/chitietsanpham/${category.namekhongdau}`}>
                <button
                  className="btnthemgiohang"
                  onClick={() => setLoading(true)} // Kích hoạt loading khi click
                >
                  Xem chi tiết
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TheLoaiLayout;
