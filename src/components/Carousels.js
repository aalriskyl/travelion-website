import React, { useState } from "react";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1624936436147-88492b507bc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Carousels = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto py-2 text-center">
      <h1>Our Gallery</h1>
      <div className="max-w-[1240px] mx-auto px-8 py-8 relative flex justify-center items-center">
        <BsArrowLeftSquareFill
          size={50}
          onClick={prevSlide}
          className="absolute top-[50%] text-3xl text-white cursor-pointer left-12"
        />
        <BsArrowRightSquareFill
          size={50}
          onClick={nextSlide}
          className="absolute top-[50%] text-3xl text-white cursor-pointer right-12"
        />
        {sliderData.map((item, index) => (
          <div className={index === slide ? "opacity-100" : "opacity-0"}>
            {index === slide && (
              <img className="w-full rounded-md" src={item.url} alt="/" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
