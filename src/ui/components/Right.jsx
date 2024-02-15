import React from "react";
import Main from "./main/Main";
import "./global.css"
import { useCounterStore } from "./store";
import { useParams } from "react-router-dom";

function Right() {
  const {chat} = useParams();

    return(
      <div className="w-full h-full relative  bg-[#a3a3a3] flex"> 
        <div id="main" className="w-full h-full relative overflow-hidden bg-[#a3a3a3] ">
          {chat && <Main/>}
        </div> 
      </div>
    );
}

export default Right;