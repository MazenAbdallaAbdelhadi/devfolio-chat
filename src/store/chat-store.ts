import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { Chat } from '@/types'
import { saveChatsToStorage, loadChatsFromStorage } from '@/lib/local-storage'


interface ChatStore {
  chats: Chat[]
  createChat: (message: string) => Chat
  addMessage: (chatId: string, content: string, role: 'user' | 'assistant') => string
  updateMessage: (chatId: string, messageId: string, content: string) => void
}

export const useChatStore = create<ChatStore>((set) => {
  // Load from localStorage if available, otherwise use mock data
  const initialChats = loadChatsFromStorage()
  return {
    chats: initialChats.length > 0 ? initialChats : [
      {
        id: '1',
        title: 'General Chat',
        createdAt: new Date(),
        messages: [
          {
            id: 'm2',
            content: 'What is the weather like?',
            role: 'user',
            createdAt: new Date(),
            animate: false,
          },
          {
            id: 'm3',
            content: 'It looks sunny and warm today! ☀️',
            role: 'assistant',
            createdAt: new Date(),
            animate: false,
          },
        ],
      },
      {
        id: '2',
        title: 'Code Help',
        createdAt: new Date(),
        messages: [
          {
            id: 'm4',
            content: 'Can you help me with a React bug?',
            role: 'user',
            createdAt: new Date(),
            animate: false,
          },
          {
            id: 'm5',
            content: 'Of course! Please share your code and error message.',
            role: 'assistant',
            createdAt: new Date(),
            animate: false,
          },
          {
            id: 'm6',
            content: 'Here is my code: ```js\nconst x = 1;```',
            role: 'user',
            createdAt: new Date(),
            animate: false,
          },
          {
            id: 'm7',
            content: 'Your code looks fine. What error are you seeing?',
            role: 'assistant',
            createdAt: new Date(),
            animate: false,
          },
        ],
      },
      {
        id: '3',
        title: 'Math Chat',
        createdAt: new Date(),
        messages: [
          {
            id: 'm8',
            content: 'What is the integral of x^2?',
            role: 'user',
            createdAt: new Date(),
            animate: false,
          },
          {
            id: 'm9',
            content: 'The integral of x^2 is (1/3)x^3 + C.',
            role: 'assistant',
            createdAt: new Date(),
            animate: false,
          },
        ],
      },
    ],
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
            animate: false,
          },
        ],
        createdAt: new Date(),
      }
      set((state) => {
        const chats = [newChat, ...state.chats]
        saveChatsToStorage(chats)
        return {
          chats,
          currentChat: newChat,
        }
      })
      return newChat
    },
    addMessage: (chatId, content, role) => {
      let newMessageId = ''
      set((state) => {
        const chats = state.chats.map((chat) => {
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
                  animate: role === 'assistant',
                },
              ],
            }
          }
          return chat
        })
        saveChatsToStorage(chats)
        return { chats }
      })
      return newMessageId
    },
    updateMessage: (chatId: string, messageId: string, content: string) => {
      set((state) => {
        const chats = state.chats.map((chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: chat.messages.map((msg) =>
                msg.id === messageId ? { ...msg, content } : msg
              ),
            }
          }
          return chat
        })
        saveChatsToStorage(chats)
        return { chats }
      })
    },
  }
})
