import NewSearchbar from "./NewSearchBar"
import NewSideButton from "./NewSideButton"

export default function NewHeader(){
    return (
        <div className="w-[392px] mt-0 h-[56px] justify-center items-center px-[16px] bg-transparent flex-row flex">
            <NewSideButton/>
            <NewSearchbar/>
        </div>
    )
}