import NewHeader from "./NewHeader";
import Main from "./components/main/Main";
import { useStore } from "./lib/store/store";
import { useNavigate } from "react-router-dom";
import NewChats from "./NewChats";
import axios from "axios";

export default function Create(props) {
    const logged = useStore((state) => state.logged);
    const route = useNavigate();
    if(!logged) {
       
        route('/');
      }
    const setNewChatsStatic = useStore((state) => state.setNewChatsStatic);
    // axios.post('http://localhost:8000/api/search', {'text': 'yes'})
    axios.post('http://16.171.152.69:8000/api/search', {'text': 'yes'})
      .then(function (response) {
        const {chats} = response.data;
        setNewChatsStatic(chats);
        console.log(chats);
    })
      .catch(function (error) {
        console.log(error);
      });
    return (
        <div className="flex flex-row">
          <div className="w-[420px] h-full border-t-black">
            <NewHeader/>
            <NewChats/>
            <div className="absolute hidden top-36 left-44 w-96 h-96 bg-secondary shadow-2xl z-40">

            </div>
        </div>
        <Main/></div>
    );
};