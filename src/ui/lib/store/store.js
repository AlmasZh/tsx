import { create } from 'zustand';

export const useStore = create((set) => ({
  logged: false,
  logIn: () => set((state) => ({ logged: true })),
  loading: true,
  setLoading: () => set((state) => ({ loading: false })),
  username: '',
  setUsername: (some) => set((state) => ({ username: some })),
  chats: [],
  setChats: (some) => set((state) => ({chats: some})),

  chatsStatic: [],
  setChatsStatic: (some) => set((state) => ({chatsStatic: some})),
  searchChats: [],
  setSearchChats: (some) => set((state) => ({searchChats: some})),
  newChatsStatic: [],
  setNewChatsStatic: (some) => set((state) => ({newChatsStatic: some})),

  secondUserName: '',
  setSecondUserName: (some) => set((state) => ({secondUserName: some})),

  chat_id: 0,
  setChat_id: (some) => set((state) => ({chat_id: some})),

}))


export const useMessages = create((set) => ({
  messages: [
      
    ],

  setMessages: (some) => set((state) => ({messages: some})),    
  // addingMessage: (chatName, message) => set((state) => ({
  //   messages: [
  //     ...state.messages,
  //     [chatName]: [...state.messages[chatName], message],
      
  //     ]
  // }))
  addingMessage: (message) => set((state) => ({
    messages: [
      ...state.messages, message
    ]
  }))

}));