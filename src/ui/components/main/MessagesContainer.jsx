import DisplayComponent from "./Message";
import { useMessages, useStore } from "../../lib/store/store";

function MessagesContainer() {
  const messages = useMessages((state) => state.messages);
  const username = useStore((state) => state.username);
  return(
    <div className="w-full h-screen flex justify-center overflow-y-auto p-4 px-64">
      <div className="w-full h-[full]  flex flex-col-reverse overflow-y-scroll">
      {messages.slice().reverse().map((message, index) => (
          <DisplayComponent key={index} text={message.message} time={message.time} own={username === message.sender ? true : false} />
        ))}


      </div>
    </div>
  );
}

export default MessagesContainer;



