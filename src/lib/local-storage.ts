// Local storage utilities for chat persistence

import { Chat } from "@/types";

const CHAT_KEY = "devfolio-chats-v1";

export function saveChatsToStorage(chats: Chat[]) {
  try {
    localStorage.setItem(CHAT_KEY, JSON.stringify(chats));
  } catch (e) {
    console.log(e);
  }
}

export function loadChatsFromStorage(): Chat[] {
  try {
    const data = localStorage.getItem(CHAT_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
    return [];
  }
}

export function clearChatsFromStorage() {
  try {
    localStorage.removeItem(CHAT_KEY);
  } catch (e) {
    console.log(e);
  }
}
