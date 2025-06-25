import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ISuggestionCard {
  label: string;
  href: string;
  children: React.ReactNode;
}

export const SuggestionCard = ({ label, href, children }: ISuggestionCard) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "whitespace-normal h-auto justify-start md:justify-center md:text-center"
          )}
        >
          {label}
        </Link>
      </HoverCardTrigger>

      <HoverCardContent>{children}</HoverCardContent>
    </HoverCard>
  );
};
