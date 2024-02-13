'use client'
import Side from "./Side";
import Main from "./components/main/Main";
import { useStore } from "./lib/store/store";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const route = useNavigate();

  const logged = useStore((state) => state.logged);
  if(!logged) {
    route('/');
  }
  const username = useStore((state) => state.username);
  const setChats = useStore((state) => state.setChats);
  const setLoading = useStore((state) => state.setLoading);
  const setChatsStatic = useStore((state) => state.setChatsStatic);
  useEffect(() => {
    
    // axios.post('http://localhost:8000/api/chats', {'username': username})
    axios.post('http://16.171.152.69:8000/api/chats', {'username': username})
    .then(function (response) {
        const {chats} = response.data;
        console.log(chats);
        setChats(chats);
        setChatsStatic(chats);
        setLoading(false);
    })
    .catch(function (err) {
        console.log(err)
    })

    
  }, []);

  return (
    <div className="flex flex-row">
        <Side />
        <Main />
    </div>
  );
};
