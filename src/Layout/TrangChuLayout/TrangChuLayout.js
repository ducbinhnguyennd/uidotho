import { useState, useEffect } from "react";
import "./TrangChuLayout.scss";
import Loading from "../../components/Loading/Loading";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link,useLocation } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import ThanhDinhHuong from "../../components/ThanhDinhHuong/ThanhDinhHuong";

function TrangChuLayout() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
          document.title = "Trang Chủ";
        }, []);
  const fetchdata = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://baominh.shop/sanpham");
      const data = await response.json();
      if (response.ok) {
        setdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  const convertToSlug = (str) => {
    const slug = str
      .toLowerCase()
      .normalize("NFD") // Chuyển đổi sang dạng ký tự cơ bản
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
      .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu '-'
      .replace(/[^\w\-]+/g, "") // Loại bỏ các ký tự không phải chữ và số
      .replace(/\-\-+/g, "-") // Loại bỏ dấu '-' thừa
      .replace(/^-+/, "") // Loại bỏ dấu '-' ở đầu chuỗi
      .replace(/-+$/, ""); // Loại bỏ dấu '-' ở cuối chuỗi

    // Chuyển chữ cái đầu tiên thành hoa
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  };
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          {location.pathname !== "/" && (
        <ThanhDinhHuong
          breadcrumbs={[
            { label: "Trang Chủ", link: "/" },
          ]}
        />
      )}
          <Carousel />
          {data.map((item) => (
            <div key={item.name}>
              <div className="title-product">
                <p className="namesp">{item.name}</p>
                <Link to={`/san-pham/${convertToSlug(item.name)}`} className="see-all">
                  
                    Xem tất cả{" "}
                    <MdKeyboardArrowRight
                      style={{
                        color: "#ffffffbe",
                        fontSize: "20px",
                        display: "inline",
                        marginLeft: "5px",
                      }}
                    />
                  
                </Link>
              </div>

              <div className="divsp">
                {item.sanpham.map((sanpham) => (
                  <div
                    className="divtungsp"
                    key={sanpham.name}
                    onClick={() =>
                      (window.location.href = `/chitietsanpham/${sanpham.namekhongdau}`)
                    }
                  >
                    <div className="discount">
                      <p className="number-discount">13%</p>
                    </div>
                    <img src={`${sanpham.image}`} alt="" />
                    <div>{sanpham.name}</div>
                    <div className="original-price">
                      Giá gốc: <span>50.000.000đ</span>
                    </div>
                    <div className="price">
                      {sanpham.price.toLocaleString()} đ
                    </div>
                    <Link to={`/chitietsanpham/${sanpham.namekhongdau}`}>
                      <button
                        className="btnthemgiohang"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Xem chi tiết
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrangChuLayout;
