import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TheLoaiLayout = () => {
  const { slug } = useParams(); // Lấy slug từ URL
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://baominh.shop/sanpham/${slug}`); 
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!productDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{productDetails.name}</h1>
    </div>
  );
};

export default TheLoaiLayout;
