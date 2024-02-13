'use client'
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
import { useEffect } from "react";
import { useStore } from "./lib/store/store";

export default function Searchbar(props) {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const [use, setUse] = useState(false);
    const setChats = useStore((state) => state.setChats);
    const chatsStatic = useStore((state) => state.chatsStatic);
    const username = useStore((state) =>  state.username);

        useEffect(() => {
          if (!use) {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }, [use]);
      useEffect(() => {
        if(value.length === 0) {
          setChats([]);
        } else {
          
          const list = chatsStatic.filter(item => item.user1 != username ? item.user1.toLowerCase().includes(value.toLowerCase()) : item.user2.toLowerCase().includes(value.toLowerCase()));
          setChats(list);
        };
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

