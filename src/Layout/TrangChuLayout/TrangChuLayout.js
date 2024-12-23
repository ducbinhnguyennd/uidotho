import { useState, useEffect } from 'react'
import './TrangChuLayout.scss'
function TrangChuLayout () {
  const [data, setdata] = useState([])

  const fetchdata = async () => {
    try {
      const response = await fetch('http://localhost:8080/sanpham')
      const data = await response.json()
      if (response.ok) {
        setdata(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])

  const handleAddToCart = product => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [] // Lấy mảng giỏ hàng từ localStorage
    const updatedCart = [...existingCart, product] // Thêm sản phẩm mới vào mảng
    localStorage.setItem('cart', JSON.stringify(updatedCart)) // Cập nhật lại localStorage
    alert(`${product.name} đã được thêm vào giỏ hàng!`)
  }

  console.log(data)
  return (
    <div>
      {data.map(item => (
        <div style={{ marginTop: '70px' }}>
          <h4>Hãng {item.name}</h4>
          <div className='divsp'>
            {item.sanpham.map(sanpham => (
              <div className='divtungsp'>
                <img src={`${sanpham.image}`} alt='' />
                <h5>{sanpham.name}</h5>
                <h5>{sanpham.price.toLocaleString()} đ</h5>
                <div className='divpropsp'>
                  <h5>Chip:</h5>
                  <p>{sanpham.chip}</p>
                </div>
                <div className='divpropsp'>
                  <h5>Ram:</h5>
                  <p>{sanpham.ram}</p>
                </div>
                <div className='divpropsp'>
                  <h5>Dung lượng:</h5>
                  <p>{sanpham.dungluong}</p>
                </div>
                <div className='divpropsp'>
                  <h5>Màn hình:</h5>
                  <p>{sanpham.manhinh}</p>
                </div>
                <div className='divpropsp'>
                  <h5>Pin sạc:</h5>
                  <p>{sanpham.pinsac}</p>
                </div>
                <div className='divpropsp'>
                  <h5>Sạc:</h5>
                  <p>{sanpham.congsac}</p>
                </div>
                <button
                  className='btnthemgiohang'
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
  )
}

export default TrangChuLayout
