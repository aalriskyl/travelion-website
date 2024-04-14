import React from "react";

const SelectCard = (props) => {
  return (
    <div className="relative">
      <img src={props.bg} alt="/" className="w-full h-full object-cover" />
      <div className="bg-gray-900/40 absolute top-0 left-0 w-full h-full hover:bg-gray-900/0 cursor-pointer">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default SelectCard;
