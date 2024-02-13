import Side from "./Side";
import Main from "./components/main/Main";
import { useMessages, useStore } from "./lib/store/store";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



export default function Contact() {
  const logged = useStore((state) => state.logged);
  const username = useStore((state) => state.username);
  const { chat } = useParams();
  const setSecondUserName = useStore((state) => state.setSecondUserName);
  setSecondUserName(chat);
  const setChats = useStore((state) => state.setChats);
  const setMessages = useMessages((state) => state.setMessages);
  const secondUserName = useStore((state) => state.secondUserName);
  const setChatsStatic = useStore((state) => state.setChatsStatic);
  const chatsStatic = useStore((state) => state.chatsStatic);
  const route = useNavigate();
  if(!logged) {
    
    route('/');
  }
  let here;
  useEffect(() => {
    const start = async () => {
      try{
        // const response = await axios.post('http://localhost:8000/api/chats', {'username': username});
        const response = await axios.post('http://51.20.185.25:8000/api/chats', {'username': username});
        const {chats} = response.data;
        setChats(chats);
        setChatsStatic(chats);
      }
      catch (err) {
        throw err;
      }
      

      chatsStatic.forEach((el) => {
        if (el.user1 == secondUserName || el.user2 == secondUserName) {
          here = el.chat_id;
          console.log(here);
          return;
        }
      });
      if(here != undefined) {
        // axios.post('http://localhost:8000/api/messages', {'chat': `${here}`})
        axios.post('http://51.20.185.25:8000/api/messages', {'chat': `${here}`})
        .then(function (response) {
            const {messages} = response.data;
            console.log(messages);
            setMessages(messages);
        })
        .catch(function (err) {
            console.log(err)
        })
      }
    } 
    start();
    
  }, [route])

  return (
    <div className="flex flex-row">
        <Side />
        <Main chat={here} />
    </div>
  );
};
