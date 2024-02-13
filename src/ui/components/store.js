import { create } from "zustand";

export const useCounterStore = create((set) => ({
  opened:  0, // Initialize the 'opened' state to  0
  message: "", // Initialize the 'message' state to an empty string

  increment: () => set((state) => ({ opened: state.opened ===  0 ?  1 :  0 })), // Toggle 'opened' state
  decrement: () => set(() => ({ opened:  0 })), // Set 'opened' state to  0
  setText: (newText) => set(() => ({ message: newText })), // Update 'message' state
}));
