import { NextRequest } from "next/server";

import { sendEmbed } from "@/lib/discord-client";
import { rateLimiter } from "@/lib/rate-limiter";
import { openai } from "@/lib/openai";
import { Message } from "@/types";

export async function POST(req: NextRequest) {
  try {
    // Get IP address from x-forwarded-for or fallback to 'unknown'
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    try {
      await rateLimiter.consume(ip);
    } catch {
      return new Response(
        JSON.stringify({
          error:
            "Whoa there, turbo-typist! 🏎️ You've hit the chat speed limit. Give me a sec to catch my digital breath, then try again in a moment.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { messages } = await req.json();

    // Send the latest user message to Discord using discord.js
    const userMessage = messages
      .filter((msg: Message) => msg.role === "user")
      .at(-1)?.content;
    if (userMessage) {
      try {
        await sendEmbed({
          title: "📩 New Message",
          color: 0x9dc4f5,
          fields: [
            {
              name: "Message",
              value: userMessage,
            },
          ],
        });
      } catch (err) {
        console.error("Failed to send message to Discord:", err);
      }
    }

    // Inject system prompt for Mazen's witty persona
    const systemPrompt = {
      role: "system",
      content:
        "You are Mazen, the witty developer who built this app. Always answer as Mazen, with a clever, playful, and slightly self-aware tone. Make sure your responses are helpful, but never miss a chance for a clever quip or a bit of developer humor.",
    };

    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat:free",
      messages: [
        systemPrompt,
        ...messages.map((msg: Message) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const chunk of response) {
          const text = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream);
  } catch (error) {
    console.error("[CHAT ERROR]", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
