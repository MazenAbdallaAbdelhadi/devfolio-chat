'use client'
import { useCallback } from 'react'
import { useChatStore } from '@/store/chat-store'

export function useChatStream() {
  const { addMessage, updateMessage } = useChatStore()

  const streamResponse = useCallback(
    async (chatId: string, messages: { role: 'user' | 'assistant'; content: string }[]) => {
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages }),
        })

        if (!response.ok) throw new Error('Failed to fetch response')
        if (!response.body) throw new Error('No response body')

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let accumulatedResponse = ''
        let assistantMessageId: string | null = null

        // Add a single assistant message bubble (empty at first)
        assistantMessageId = addMessage(chatId, '', 'assistant')

        while (true) {
          const { value, done } = await reader.read()
          if (done) break

          const text = decoder.decode(value)
          accumulatedResponse += text

          // Update the single assistant message bubble
          if (assistantMessageId && updateMessage) {
            updateMessage(chatId, assistantMessageId, accumulatedResponse)
          }
        }
      } catch (error) {
        console.error('Error streaming response:', error)
        addMessage(chatId, 'Sorry, there was an error processing your request.', 'assistant')
      }
    },
    [addMessage, updateMessage]
  )

  return { streamResponse }
}
