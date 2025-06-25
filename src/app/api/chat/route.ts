import { openai } from '@/lib/openai'
import { Message } from '@/types'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const response = await openai.chat.completions.create({
      model:"deepseek/deepseek-chat:free",
      messages: messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
      })),
      stream: true,
    })

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()

        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content || ''
          controller.enqueue(encoder.encode(text))
        }
        controller.close()
      },
    })

    return new Response(stream)
  } catch (error) {
    console.error('[CHAT ERROR]', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
