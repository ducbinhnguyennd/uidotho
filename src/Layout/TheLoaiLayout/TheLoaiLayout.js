import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TheLoaiLayout = () => {
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  console.log(slug);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://baominh.shop/san-pham/${slug}`);
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
      {productDetails.map((category) => (
        <h1 key={category._id}>{category.name}</h1>
      ))}
    </div>
  );
};

export default TheLoaiLayout;
