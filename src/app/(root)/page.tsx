"use client";
import { Grid, Stack } from "@/components/layout";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <Stack justify="center" align="center" className="h-full px-4">
      <h1 className="text-center text-2xl my-2">
        Got bugs? I squash. Got dreams? I deploy.
      </h1>

      <Grid cols={2} className="w-xs sm:w-sm md:w-lg lg:w-xl my-3">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="whitespace-normal h-auto">
              👋 Who are you and what do you do?
            </Button>
          </HoverCardTrigger>

          <HoverCardContent>
            <Stack justify="between" gap={3} align="start" direction="row">
              <Avatar className="size-10">
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <p>
                I&apos;m Mazen — I break things just to fix them better.
                Full-stack dev by day, pixel perfectionist by obsession.
                Let&apos;s turn ideas into slick, scalable apps.
              </p>
            </Stack>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="whitespace-normal h-auto">
              💼 Can you walk me through your experience?
            </Button>
          </HoverCardTrigger>

          <HoverCardContent>
            Been there, built that. From scrappy side projects to real-world
            SaaS apps — I’ve wrangled 🐛 bugs, shipped 🚢 features, and survived
            🧓 legacy code so you don’t have to.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="whitespace-normal h-auto">
              🚀 What kind of projects have you built?
            </Button>
          </HoverCardTrigger>

          <HoverCardContent>
            From pixel-perfect portfolios to full-blown web platforms — if it
            runs in the browser (or should), I’ve probably built it, broke it
            💥, and rebuilt it better ⚡.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="whitespace-normal h-auto">
              📬 How can I reach out to you?
            </Button>
          </HoverCardTrigger>

          <HoverCardContent>
            Carrier pigeons are cool, but email, LinkedIn, or Discord work
            faster. Don’t be shy — my inbox is bug-free 🧼 (mostly 🫣).
          </HoverCardContent>
        </HoverCard>
      </Grid>
      <Card className="w-xs sm:w-sm md:w-lg lg:w-xl p-3">
        <form className="flex">
          <Textarea
            id="message"
            name="message"
            className="bg-card dark:bg-card border-none w-full !ring-0 resize-none shadow-none"
            placeholder="Ask me anything... except how to center a div."
          ></Textarea>

          <Button size="sm" className="self-end text-sm">
            <ArrowUp />
          </Button>
        </form>
      </Card>
    </Stack>
  );
}
