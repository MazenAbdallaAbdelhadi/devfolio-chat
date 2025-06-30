export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  createdAt: Date
  animate: boolean
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
}