import { useState, useEffect } from 'react';
import './TrangChuLayout.scss';
import Loading from '../../components/Loading/Loading';

function TrangChuLayout() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchdata = async () => {
    try {
      setIsLoading(true); // Bắt đầu loading
      const response = await fetch('https://baominh.shop/sanpham');
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
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          {data.map((item) => (
            <div style={{ marginTop: '70px' }} key={item.name}>
              <h4>Hãng {item.name}</h4>
              <div className="divsp">
                {item.sanpham.map((sanpham) => (
                  <div className="divtungsp" key={sanpham.name}>
                    <img src={`${sanpham.image}`} alt="" />
                    <h5>{sanpham.name}</h5>
                    <h5>{sanpham.price.toLocaleString()} đ</h5>
                    {/* <div className="divpropsp">
                      <h5>Chip:</h5>
                      <p>{sanpham.chip}</p>
                    </div> */}
                    <button
                      className="btnthemgiohang"
                      onClick={() => handleAddToCart(sanpham)}
                    >
                      Thêm vào giỏ hàng
                    </button>
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
