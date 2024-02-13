import React from 'react';

const DisplayComponent = ({ text, time, own }) => {
  const owner = own;
  
  return (
    <div className={owner === true ? "w-full flex justify-end mt-[5px]" : "w-full flex mt-[5px]"}>
      <div className={owner === true ? "max-w-[464px] min-w-[50px] pl-[20px] py-[5px] pr-[50px] bg-[#766ac8] rounded-[15px] inline-block relative" : "max-w-[464px] min-w-[50px] pl-[20px] py-[5px] pr-[50px] rounded-[15px] inline-block relative bg-[#212121]"}>
        <div className="font-black inline-block max-w-[464] ">{text}</div>
        <div className="absolute bottom-[2px] max-w-[400px] right-[13px] select-none text-[12px] opacity-[0.6]">{time}</div>
      </div>
    </div>
  );
};

export default DisplayComponent;
