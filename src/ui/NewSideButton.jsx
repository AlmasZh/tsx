import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export default function NewSideButton(){
    return (
       <Link href='/chat'>
        <div className="w-[40px] h-[40px] bg-transparent mt-[0.5px] pt-2 pl-[7.5px] rounded-full hover:bg-button">
            <GoArrowLeft color="grey" size={25}/>
        </div>
       </Link>
    )
}