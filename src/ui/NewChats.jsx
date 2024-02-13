import NewChatLink from "./newChatLink";
import { useStore } from "./lib/store/store";

export default function NewChats() {
    const searchChats = useStore((state) => state.searchChats);
    // const username = useStore((state) => state.username);

    return (
        <div className="h-full mt-1">
            <ul className="px-[8px] ">
                {searchChats.map((chat) => <NewChatLink key='' 
                chat={chat.username} />)}
            </ul>
        </div>
    );
};