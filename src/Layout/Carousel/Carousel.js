import React, { useState, useEffect } from "react";
import "./Carousel.scss"; // Import file CSS

const Carousel = () => {
  const images = [
    "https://noithatsondong.com/wp-content/uploads/2021/04/phong-tho-dep-5.jpg",
    "https://dothotamquang.com/upload/images/bo-do-tho-gia-tien.jpg",
    "https://xuonggoanlac.com/wp-content/uploads/2023/08/combo-do-tho-go-du-Lao-xin-6.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
