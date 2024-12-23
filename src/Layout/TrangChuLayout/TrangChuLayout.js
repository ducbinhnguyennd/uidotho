/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import "./TrangChuLayout.scss";
import Loading from "../../components/Loading/Loading";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
function TrangChuLayout() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchdata = async () => {
    try {
      setIsLoading(true); // Bắt đầu loading
      const response = await fetch("https://baominh.shop/sanpham");
      const data = await response.json();
      if (response.ok) {
        setdata(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Kết thúc loading
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
          {data.map((item) => (

            <div style={{ marginTop: "70px" }} key={item.name}>
              <div className="title-product">
                <p className="namesp">{item.name}</p>
                <p className="namesp">{item.namekhongdau}</p>
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
                  <div className="divtungsp" key={sanpham._id}>
                    <img src={`${sanpham.image}`} alt="" />
                    <h5>{sanpham.name}</h5>
                    <h5>{sanpham.price.toLocaleString()} đ</h5>
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
