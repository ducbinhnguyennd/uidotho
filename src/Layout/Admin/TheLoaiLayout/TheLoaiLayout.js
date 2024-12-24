import { useState, useEffect } from 'react'
import './TheLoaiLayout.scss'
import { FaPlus } from 'react-icons/fa'
import { AddTheLoai } from './AddTheLoai'

function TheLoaiLayout () {
  const [data, setdata] = useState([])
  const [isOpen,setIsOpen] =useState(false)

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
      <button className='btnthemtheloai'>
        <FaPlus className='icons' onClick={() => setIsOpen(true)}/>
        Thêm thể loại
      </button>
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
