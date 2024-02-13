import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useCounterStore } from "../../store";

const InfoMain = (value) => {
  const dicrement = useCounterStore((state) => state.dicrement);
  return(
    <div className="w-full h-screen bg-white border-l-white box-border overflow-scroll">
      <div className="w-full h-14 bg-[#212121] py-[4px] pr-[13px] pl-[23px] m-0 box-border fixed border-l-white flex items-center ">
      <RxCross2 className="w-5 h-5 hover:opacity-[0.5]" onClick={dicrement}/>
      </div>
      <div className="w-full h-[450px] bg-[#578bb0] mt-14 relative" > 
      
      <div className="absolute bottom-[40px]">Almas Zhakanov</div>
      <div className="absolute bottom-[20px]">last seen 2 hours ago</div>
      </div>
      <div className="w-full min-h-full bg-[#212121]">

      </div>
    </div>
  );
}

export default InfoMain;