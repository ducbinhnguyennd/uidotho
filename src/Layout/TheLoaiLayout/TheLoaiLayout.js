import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CategoryList from "../../components/ListTheLoai/CategoryList";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";
import "./TheLoaiLayout.scss";
import { FaFilter } from "react-icons/fa6";
import ListBlog from "../../components/ListBlog/ListBlog";
const TheLoaiLayout = () => {
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null); 
  const filterButtonRef = useRef(null); 


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current && !filterRef.current.contains(event.target) &&
        filterButtonRef.current && !filterButtonRef.current.contains(event.target)
      ) {
        setShowFilter(false); // Đóng menu khi bấm ra ngoài
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  if (!productDetails) return <Loading />;

  return (
    <div className="theloailayout">
   
      <div className="category-sidebar">
        <CategoryList />
        <ListBlog/>

      </div>

      <div
        className="filter-button"
        ref={filterButtonRef} 
        onClick={() => setShowFilter(!showFilter)}
      >
        <FaFilter /> Bộ Lọc
      </div>

      <div
        className={`category-filter ${showFilter ? "show" : ""}`}
        ref={filterRef} 
      >
        <CategoryList />
      </div>
      <div className="theloaisp">
        {loading ? (
          <Loading />
        ) : (
          productDetails.map((category) => (
            <div
              className="divtungsp"
              key={category._id}
              onClick={() =>
                (window.location.href = `/chitietsanpham/${category.namekhongdau}`)
              }
            >
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
                <button className="btnthemgiohang" onClick={() => setLoading(true)}>
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
