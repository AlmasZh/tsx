import SideButton from "./SideButton"
import Searchbar from "./Searchbar"

export default function Header(){
    return (
        <div className="w-[392px] mt-0 h-[56px] justify-center items-center px-[16px] bg-transparent flex-row flex">
            <SideButton/>
            <Searchbar/>
        </div>
    )
}