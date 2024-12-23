import { useState, useEffect } from "react";
import "./TrangChuLayout.scss";
import Loading from "../../components/Loading/Loading";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import  Carousel from "../Carousel/Carousel";
function TrangChuLayout() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          <Carousel />
          {data.map((item) => (
            <div key={item.name}>
              <div className="title-product">
                <p className="namesp">{item.name}</p>
                <a href="#" className="see-all">
                  <p className="text-see-all">Xem tất cả</p>
                  <MdKeyboardArrowRight
                    style={{
                      color: "#ffffffbe",
                      fontSize: "20px",
                      display: "inline",
                      marginLeft: "5px",
                    }}
                  />
                </a>
              </div>

              <div className="divsp">
                {item.sanpham.map((sanpham) => (
                  <div className="divtungsp" key={sanpham.name}>
                    <div className="discount">
                      <p className="number-discount">13%</p>
                    </div>
                    <img src={`${sanpham.image}`} alt="" />
                    <div>{sanpham.name}</div>
                    <div className="original-price">Giá gốc: <span>50.000.000đ</span></div>
                    <div>
                      {sanpham.price.toLocaleString()} đ
                    </div>
                    <Link to={`/chitietsanpham/${sanpham.namekhongdau}`}>
                      <button className="btnthemgiohang">Xem chi tiết</button>
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
