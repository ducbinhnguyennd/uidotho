/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark  mt-5 pt-5'>
      <div className='row px-xl-5 pt-5'>
        {/* Cột Thông Tin Liên Hệ */}
        <div className='col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5'>
          <h5 className=' text-uppercase mb-4'>THÔNG TIN LIÊN HỆ</h5>
          <p className='mb-4'>
            Chúng tôi luôn mang đến sự hài lòng cho khách hàng và những sản phẩm
            được bán ra luôn được đảm bảo nhất
          </p>
          <p className='mb-2'>
            <i className='fa fa-map-marker-alt text-primary mr-3'></i>
            Địa chỉ: 254 Xã Đàn, Đống Đa, Hà Nội
          </p>
          <p className='mb-2'>
            <i className='fa fa-envelope text-primary mr-3'></i>
            giahuymobile254xadan@gmail.com
          </p>
          <p className='mb-0'>
            <i className='fa fa-phone-alt text-primary mr-3'></i>
            +0827 254 254 - 0829 254 254
          </p>
        </div>

        {/* Đường Dẫn Nhanh */}
        <div className='col-lg-8 col-md-12'>
          <div className='row'>
            <div className='col-md-4 mb-5'>
              <h5 className=' text-uppercase mb-4'>ĐƯỜNG DẪN NHANH</h5>
              <div className='d-flex flex-column justify-content-start'>
                <a className=' mb-2' href='#' aria-label='Trang Chủ'>
                  <i className='fa fa-angle-right mr-2'></i>Trang Chủ
                </a>
                <a className=' mb-2' href='#' aria-label='Cửa Hàng'>
                  <i className='fa fa-angle-right mr-2'></i>Cửa hàng
                </a>
                <a className=' mb-2' href='#Phukien' aria-label='Phụ Kiện'>
                  <i className='fa fa-angle-right mr-2'></i>Phụ kiện
                </a>
                <a className=' mb-2' href='#' aria-label='Giỏ Hàng'>
                  <i className='fa fa-angle-right mr-2'></i>Giỏ hàng
                </a>
                <a className=' mb-2' href='#Blog' aria-label='Bài Viết Hữu Ích'>
                  <i className='fa fa-angle-right mr-2'></i>Bài viết hữu ích
                </a>
                <a className='' href='#' aria-label='Liên Hệ Cho Chúng Tôi'>
                  <i className='fa fa-angle-right mr-2'></i>Liên hệ cho chúng
                  tôi
                </a>
              </div>
            </div>

            {/* Bảng Tin */}
            <div className='col-md-4 mb-5'>
              <h5 className=' text-uppercase mb-4'>BẢNG TIN</h5>
              <p>Cập nhật thông tin mới nhất tại cửa hàng</p>
              <form action=''>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Email Address'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-primary'>Sign Up</button>
                  </div>
                </div>
              </form>
              <h6 className=' text-uppercase mt-4 mb-3'>THEO DÕI QUA</h6>
              <div className='d-flex'>
                <a
                  className='btn btn-primary btn-square mr-2'
                  href='https://www.facebook.com/giahuymobilehanoi'
                  aria-label='Gia Huy Mobile Twitter'
                >
                  <FontAwesomeIcon icon={faTwitter} />{' '}
                </a>
                <a
                  className='btn btn-primary btn-square mr-2'
                  href='https://www.facebook.com/giahuymobilehanoi'
                  aria-label='Gia Huy Mobile Facebook'
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className='btn btn-primary btn-square'
                  href='https://www.facebook.com/giahuymobilehanoi'
                  aria-label='Gia Huy Mobile Instagram'
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bản Quyền */}
      <div
        className='row border-top mx-xl-5 py-4'
        style={{ borderColor: 'rgba(256, 256, 256, .1)' }}
      >
        <div className='col-md-6 px-xl-0'>
          <p className='mb-md-0 text-center text-md-left '>
            &copy;{' '}
            <a className='text-primary' href='#' aria-label='Gia Huy Mobile'>
              Gia Huy Mobile
            </a>
            . Đã đăng ký Bản quyền. Designed by{' '}
            <a
              className='text-primary'
              href='https://www.facebook.com/giahuymobilehanoi'
            >
              TRAN DA
            </a>
          </p>
        </div>
        <div className='col-md-6 px-xl-0 text-center text-md-right'>
          <img
            className='img-fluid'
            src='https://www.giahuystore.com/img/payments.png'
            alt='Payment Methods'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
