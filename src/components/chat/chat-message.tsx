import { ClassAttributes, HTMLAttributes } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import { CopyIcon } from "lucide-react";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/layout";

import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
}

export function ChatMessage({ content, role }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <Stack align={isUser ? "end" : "start"} className="w-full">
      {isUser ? null : <UserAvatar />}

      <div
        className={cn(
          "w-full rounded-md",
          isUser ? "max-w-[80%] bg-card text-card-foreground" : "bg-background"
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words p-4">{content}</p>
        ) : (
          <div className="w-full prose dark:prose-invert prose-pre:bg-transparent prose-pre:p-0">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  return <CodeMarkdown {...props} />;
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </Stack>
  );
}

const CodeMarkdown = (
  props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, className, node, style, ref, ...rest } = props;

  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <div className="flex">
      <ScrollArea>
        <Stack className="relative rounded-md">
          <CodeMarkdownHeader lang={match[1]} content={children} />
          <SyntaxHighlighter
            showInlineLineNumbers
            style={atomDark}
            language={match[1]}
            PreTag="div"
            customStyle={{ paddingTop: "4rem", width: "max-content" }}
            {...rest}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </Stack>
      </ScrollArea>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const CodeMarkdownHeader = ({
  lang,
  content,
}: {
  lang: string;
  content: React.ReactNode;
}) => {
  return (
    <Stack
      direction="row"
      justify="between"
      align="center"
      className="absolute w-full z-10  top-0 left-0 px-4 py-6"
    >
      <span className="text-xs">{lang}</span>
      <Button
        size="sm"
        variant="ghost"
        className="text-xs"
        onClick={() => {
          navigator.clipboard.writeText(String(content).replace(/\n$/, ""));

          toast.success("Copied");
        }}
      >
        <CopyIcon className="size-3" />
        copy
      </Button>
    </Stack>
  );
};
