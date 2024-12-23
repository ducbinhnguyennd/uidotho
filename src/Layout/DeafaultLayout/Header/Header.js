import React from 'react'
import './Header.scss' // Import file CSS để style
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <div className='header-left'>
      <img
            src="/logo.png"
            alt="Logo"
            className="logo"
          />
      </div>
      <div className='header-right'>
        <input
          type='text'
          className='search-input'
          placeholder='Tìm kiếm'
        />
        <button className='search-button'>
        <FaSearch style={{ color: "#fff", fontSize: "20px", display: "inline-block" }} />
        </button>
      </div>
    </div>
  )
}

export default Header
