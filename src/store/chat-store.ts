import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { Chat } from '@/types'


interface ChatStore {
  chats: Chat[]
  createChat: (message: string) => Chat
  addMessage: (chatId: string, content: string, role: 'user' | 'assistant') => string
  updateMessage: (chatId: string, messageId: string, content: string) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  createChat: (message) => {
    const newChat: Chat = {
      id: nanoid(),
      title: `New Chat ${new Date().toLocaleTimeString()}`,
      messages: [
        {
          id: nanoid(),
          content: message,
          role: 'user',
          createdAt: new Date(),
        },
      ],
      createdAt: new Date(),
    }

    set((state) => ({
      chats: [newChat, ...state.chats],
      currentChat: newChat,
    }))

    return newChat
  },
  addMessage: (chatId, content, role) => {
    let newMessageId = ''
    set((state) => ({
      chats: state.chats.map((chat) => {
        if (chat.id === chatId) {
          const id = nanoid()
          newMessageId = id
          return {
            ...chat,
            messages: [
              ...chat.messages,
              {
                id,
                content,
                role,
                createdAt: new Date(),
              },
            ],
          }
        }
        return chat
      }),
    }))
    return newMessageId
  },
  updateMessage: (chatId: string, messageId: string, content: string) => {
    set((state) => ({
      chats: state.chats.map((chat) => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: chat.messages.map((msg) =>
              msg.id === messageId ? { ...msg, content } : msg
            ),
          }
        }
        return chat
      }),
    }))
  },
}))
