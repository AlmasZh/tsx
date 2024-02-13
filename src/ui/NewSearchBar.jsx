'use client'
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "./lib/store/store";

export default function NewSearchbar(props) {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const [use, setUse] = useState(false);
    const newChatsStatic = useStore((state) => state.newChatsStatic);
    const username = useStore((state) =>  state.username);
    const setSearchChats = useStore((state) =>  state.setSearchChats);

        useEffect(() => {
          if (!use) {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }, [use]);
        useEffect(() => {
                if(value.length != 0) {
                    const list = newChatsStatic.filter(item => item.username != username ? item.username.toLowerCase().includes(value.toLowerCase()) : null);
                    setSearchChats(list);
                } else {
                    setSearchChats([]);
                }
          }, [value]);
    const handle = (event) => {
        setValue(event.target.value);
        
    };
    return (
        <div className={`group w-[334px] h-[42px] mt-[0px] flex bg-black rounded-3xl border ${focus ? 'border-focus' : "border-stone-800"} border-[1px] ${focus ? '' : "hover:border-white"} `} >
            <SlMagnifier className="mt-3 ml-5 group-focus:fill-blue" size={17} color={focus ? '#8774e1' : '#aaaaaa'}/>
            <input className={`border-none ml-4 focus:outline-none bg-transparent w-[248px] h-[38px] text-white`} placeholder="search" value={value} onChange={handle} onFocus={() => setUse(true)} onBlur={() => setUse(false)}/>
        </div>
    );
};

