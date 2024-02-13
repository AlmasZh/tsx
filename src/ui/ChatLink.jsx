'use client'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ChatLink(props) {
    const pathname = useLocation();
    const router = useNavigate();
    function handle() {
        router(`/chat/${props.chat}`)
    }
    return (
        <>
        <button onClick={handle} className={`flex flex-row ml-1 w-[390px] h-[52px] rounded-xl ${pathname === `/chat/${props.chat}` ? 'bg-focus' : 'hover:bg-button'} pt-[11px]`}>
            <div className='flex flex-col pl-2 ml-3 w-full'>
                <div className='flex flex-row w-full'>
                    <span className='text-white font-bold text-2xl mt-0'>{props.chat}</span>
                </div>
            </div>
        </button>
        </>
    );
};