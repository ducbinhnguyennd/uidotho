/* eslint-disable react-hooks/exhaustive-deps */
import { ModalBig } from '../../../components/ModalBig'
import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import { AddSanPham } from './AddSanPham'
import { XoaSanPham } from './XoaSanPham'

function SanPhamLayout ({ isOpen, onClose, idtheloai }) {
  const [data, setdata] = useState([])
  const [isOpenThem, setIsOpenThem] = useState(false)
  const [isOpenXoa, setIsOpenXoa] = useState(false)
  const [idsanpham, setidsanpham] = useState('')
  const [loading, setloading] = useState(true)
const fetchdata = async () => {
  if (idtheloai) {
    setloading(true) // Đặt loading thành true khi bắt đầu tải
    try {
      const response = await fetch(
        `http://localhost:3010/getsanpham/${idtheloai}`
      )
      if (response.ok) {
        const data = await response.json()
        setdata(data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setloading(false) // Đặt loading thành false khi kết thúc
    }
  } else {
    setloading(false) // Đặt loading thành false nếu idtheloai không tồn tại
  }
}


  useEffect(() => {
    fetchdata()
  }, [idtheloai])

  return (
    <ModalBig isOpen={isOpen} onClose={onClose}>
      <div>
        <button className='btnthemtheloai' onClick={() => setIsOpenThem(true)}>
          <FaPlus className='icons' />
          Thêm sản phẩm
        </button>
        <table className='tablenhap'>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='6'>Đang tải dữ liệu...</td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>
                    <img src={`${item.image}`} alt='' />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className='tdchucnang'>
                    <button
                      onClick={() => {
                        setIsOpenXoa(true)
                        setidsanpham(item._id)
                      }}
                    >
                      Xóa
                    </button>
                    <button>Cập nhật</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='6'>không có sản phẩm</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddSanPham
        isOpen={isOpenThem}
        onClose={() => setIsOpenThem(false)}
        idtheloai={idtheloai}
        fetchData={fetchdata}
      />
      <XoaSanPham
        isOpen={isOpenXoa}
        onClose={() => setIsOpenXoa(false)}
        idsanpham={idsanpham}
        fetchdata={fetchdata}
      />
    </ModalBig>
  )
}

export default SanPhamLayout
