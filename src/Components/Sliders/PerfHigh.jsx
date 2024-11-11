import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    customPaging: function (i) {
        return (
            <div className="custom-dot">
                <div className="custom-dot-inner"></div>
            </div>
        );
    },
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const PerfHigh = () => {
    const data = [
        { number: "₹24,018", text: "million", text2: "TURNOVER"},
        { number: "₹18,228", text: "Renewable assets", text2: "EBITDA" },
        { number: "₹3,594", text: "Wind capacity", text2: "NET PROFIT" },
        { number: "7% ", text: "ROE" },
        { number: "~0.7 GW*", text: "Solar capacity", text2: "Turnover" },
        { number: "~2.7 GW*", text: "Total renewables capacity", text2: "Turnover" }
    ];

    

    return (
        <div className='perf-high my-4 flex items-center'
        style={{  
            backgroundImage: "url(" + "./home/p-high.jpg" + ")",
            height: "500px",
            width: "100%",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          
        >
            <div className='marginal'>
                <div className='max-w-[900px] m-auto'>
                    <div className="slider-container relative px-4 ">
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index} className='w-full '>
                                    <div className="slide!mr-4 ">
                                        <div className='border-[#61D7D2] flex flex-col justify-center items-center border-4 rounded-full h-[200px] w-[70%] m-auto'>
                                            <div className="number text-3xl text-white font-semibold">{item.number}</div>
                                            <div className="text-[14px] text-white mt-1 text-center" >{item.text}</div>
                                            <div className="text-[14px] text-white mt-2 text-center" >{item.text2}</div>

                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfHigh