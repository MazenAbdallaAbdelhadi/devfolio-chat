"use client";

import { useEffect, useState } from "react";

import { PromptInput } from "@/components/prompt-input";
import { Stack } from "@/components/layout";

import { ChatMessage } from "./chat-message";

import { useChatStore } from "@/store/chat-store";
import { Chat as IChat } from "@/types";

interface IChatProps {
  id: string;
}

export const Chat = ({ id }: IChatProps) => {
  const { chats } = useChatStore();
  const [chat, setChat] = useState<IChat | null>(null);

  useEffect(() => {
    const chat = chats.find((c) => c.id === id);
    if (chat) {
      setChat(chat);
    }
  }, [chats, id]);

  if (!chat) {
    return null;
  }

  return (
    <Stack align="center" className="min-h-full px-4 pb-8 pt-4">
      <Stack className="w-[min(600px,calc(100%-3rem))]">
          {chat.messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              role={message.role}
              animate= {message.animate}
            />
          ))}
        </Stack>

      <PromptInput chatId={chat.id} />
    </Stack>
  );
};
