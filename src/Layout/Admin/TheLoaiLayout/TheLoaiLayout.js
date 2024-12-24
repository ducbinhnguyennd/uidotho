import { useState, useEffect } from 'react'
import './TheLoaiLayout.scss'

function TheLoaiLayout () {
  const [data, setdata] = useState([])

  const fetchdata = async () => {
    try {
      const response = await fetch('https://baominh.shop/theloaisanpham')
      if (response.ok) {
        const data = await response.json()
        setdata(data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div>
      <table className='tablenhap'>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên thể loại</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td className='tdchucnang'>
                <button>Chi tiết</button>
                <button>Xóa</button>
                <button>Cập nhật</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TheLoaiLayout
