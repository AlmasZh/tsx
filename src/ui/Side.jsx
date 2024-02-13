import Header from "./Header";
import ChatLinks from "./ChatLinks";

export default function Side(props) {
    return (
        <div className="w-[420px] h-full border-t-black">
            <Header/>
            <ChatLinks/>
            <div className="absolute hidden top-36 left-44 w-96 h-96 bg-secondary shadow-2xl z-40">

            </div>
        </div>
    );
};