"use client";
import { ArrowUpIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useChatStream } from "@/hooks/use-chat-stream";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useChatStore } from "@/store/chat-store";
import { Stack } from "../layout";

interface PromptInputProps {
  chatId?: string;
}

export const PromptInput = ({ chatId }: PromptInputProps) => {
  const [message, setMessage] = useState('');
  const router = useRouter();
  const { createChat, addMessage } = useChatStore();
  const { streamResponse } = useChatStream();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    let currentChatId: string;
    if (chatId) {
      currentChatId = chatId;
      addMessage(chatId, message, 'user');
    } else {
      const newChat = createChat(message);
      currentChatId = newChat.id;
      router.push(`/c/${newChat.id}`);
    }
    
    const userMessage = message;
    setMessage('');

    // Stream the AI response
    await streamResponse(currentChatId, [{ role: 'user', content: userMessage }]);
  };

  return (
    <Stack align="center" className="sticky bottom-0 w-full pb-4 pt-8 bg-gradient-to-t from-background via-background/80 to-transparent">
      <Card className="border-none w-[min(600px,100%)] p-3">
        <form className="flex" onSubmit={handleSubmit}>
          <Textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-card dark:bg-card border-none w-full !ring-0 resize-none shadow-none"
            placeholder="Ask me anything... except how to center a div."
          ></Textarea>

          <Button type="submit" size="sm" className="self-end text-sm">
            <ArrowUpIcon />
          </Button>
        </form>
      </Card>
    </Stack>
  );
};
