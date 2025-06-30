"use client";
import { useCallback } from "react";
import { useChatStore } from "@/store/chat-store";

export function useChatStream() {
  const { addMessage, updateMessage } = useChatStore();

  const streamResponse = useCallback(
    async (
      chatId: string,
      messages: { role: "user" | "assistant"; content: string }[]
    ) => {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages }),
        });

        if (response.status === 429) {
          const json = await response.json();
          throw new Error(json?.error);
        }
        if (!response.ok)
          throw new Error("Sorry, there was an error processing your request.");
        if (!response.body)
          throw new Error("Sorry, there was an error processing your request.");

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedResponse = "";
        let assistantMessageId: string | null = null;

        // Add a single assistant message bubble (empty at first)
        assistantMessageId = addMessage(chatId, "", "assistant");

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          const text = decoder.decode(value);
          accumulatedResponse += text;

          // Update the single assistant message bubble
          if (assistantMessageId && updateMessage) {
            updateMessage(chatId, assistantMessageId, accumulatedResponse);
          }
        }
      } catch (error: unknown) {
        console.error("Error streaming response:", error);
        const errorMessage =
          error instanceof Error ? error.message : "An unknown error occurred.";
        addMessage(chatId, errorMessage, "assistant");
      }
    },
    [addMessage, updateMessage]
  );

  return { streamResponse };
}
