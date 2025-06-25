import { Chat } from "@/components/chat/chat";

interface ChatPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ChatPage({ params }: ChatPageProps) {
  const { id } = await params;

  return <Chat id={id} />;
}
