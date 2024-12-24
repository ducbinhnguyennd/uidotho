import { Modal } from '../../../../components/Modal'
import { useState } from 'react'
function AddTheLoai ({ isOpen, onClose, fetchdata }) {
  const [name, setname] = useState('')
  const handelAddTheLoai = async () => {
    try {
      const response = await fetch('http://localhost:3010/posttheloai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name
        })
      })
      if (response.ok) {
        onClose()
        fetchdata()
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Modal>
      <div className='addtheloai'>
        <h2>Thêm thể loại</h2>
        <div className='input-group'>
          <label>Tên thể loại:</label>
          <input
            type='text'
            value={name}
            onChange={e => setname(e.target.value)}
          />
        </div>
        <div className='button-group'>
          <button onClick={onClose}>Hủy</button>
          <button onClick={handelAddTheLoai}>Thêm</button>
        </div>
      </div>
    </Modal>
  )
}

export default AddTheLoai
