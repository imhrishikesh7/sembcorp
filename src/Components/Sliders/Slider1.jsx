import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Component
const CustomArrow = ({ className, onClick, arrowImage }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: 'block',
        zIndex: 1,
        width: '30px',
        height: '30px',
      }}
    >
      <img
        src={arrowImage}
        alt="arrow"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
};

const Slider1 = () => {
  const data = [
    { number: "3rd", text: "Largest player in the country based on installed wind capacity" },
    { number: "60+", text: "Renewable assets" },
    { number: "2 GW*", text: "Wind capacity" },
    { number: "13", text: "States" },
    { number: "~0.7 GW*", text: "Solar capacity" },
    { number: "~2.7 GW*", text: "Total renewables capacity" }
  ];

  const settings = {
    dots: false,  // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 slides at a time
    slidesToScroll: 1,
    nextArrow: <CustomArrow arrowImage="./home/arrow-r.svg" />,
    prevArrow: <CustomArrow arrowImage="./home/arrow-l.svg" />,
    responsive: [
      {
        breakpoint: 1024, // Custom responsive settings for smaller screens
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='md:max-w-[550px]'> 
      <div className="slider-container relative px-4">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className='w-full'>
              <div className="slide md:border-0 border border-[#5db7ac] px-4 py-2 m-auto md:!mr-4">
                <div className="number text-3xl md:text-left text-center text-[#5db7ac] font-semibold">{item.number}</div>
                <div className="md:text-[12px] md:text-left text-center mt-1" >{item.text}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slider1;
