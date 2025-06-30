import { ClassAttributes, HTMLAttributes, useEffect, useState } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import { CheckIcon, CopyIcon } from "lucide-react";
import remarkGfm from "remark-gfm";
import { toast } from "sonner";

import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/layout";

import { cn } from "@/lib/utils";
import { useAnimatedText } from "@/hooks/use-animated-text";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  animate: boolean;
}

export function ChatMessage({ content, role, animate }: ChatMessageProps) {
  const isUser = role === "user";

  const animatedContent = useAnimatedText(content);

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
          <div className="prose !max-w-none dark:prose-invert prose-pre:bg-transparent">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code(props) {
                  return <CodeMarkdown {...props} />;
                },
              }}
            >
              {animate ? animatedContent : content}
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
    <div className="flex w-full">
      <ScrollArea className="flex-1">
        <Stack className="relative rounded-md">
          <CodeMarkdownHeader lang={match[1]} content={children} />
          <SyntaxHighlighter
            showInlineLineNumbers
            style={atomDark}
            language={match[1]}
            PreTag="div"
            customStyle={{ paddingTop: "4rem", width: "100%" }}
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
  const [copied, setCopied] = useState(false);
  let timeout: ReturnType<typeof setTimeout> | undefined;

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, [timeout]);

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
          navigator.clipboard
            .writeText(String(content).replace(/\n$/, ""))
            .then(() => {
              setCopied(true);
              timeout = setTimeout(() => {
                setCopied(false);
              }, 3000);
            })
            .catch(() => {
              toast.error("Can't copy!");
            });
        }}
      >
        {copied ? (
          <CheckIcon className="size-3" />
        ) : (
          <CopyIcon className="size-3" />
        )}

        {copied ? "copied" : "copy"}
      </Button>
    </Stack>
  );
};
