"use client";

import { Grid, Stack } from "@/components/layout";
import { UserAvatar } from "@/components/user-avatar";

import { SuggestionCard } from "./suggestion-card";

export const SuggestionSection = () => {
  return (
    <Grid
      cols={{ base: 1, md: 2 }}
      className="w-[min(600px,100%)] my-3"
    >
      <SuggestionCard href="/" label={"👋 Who are you and what do you do?"}>
        <Stack justify="between" gap={3} align="start" direction="row">
          <UserAvatar />
          <p>
            I&apos;m Mazen — I break things just to fix them better. Full-stack
            dev by day, pixel perfectionist by obsession. Let&apos;s turn ideas
            into slick, scalable apps.
          </p>
        </Stack>
      </SuggestionCard>

      <SuggestionCard
        href="/"
        label={"💼 Can you walk me through your experience?"}
      >
        Been there, built that. From scrappy side projects to real-world SaaS
        apps — I’ve wrangled 🐛 bugs, shipped 🚢 features, and survived 🧓
        legacy code so you don’t have to.
      </SuggestionCard>

      <SuggestionCard
        href="/"
        label={"🚀 What kind of projects have you built?"}
      >
        From pixel-perfect portfolios to full-blown web platforms — if it runs
        in the browser (or should), I’ve probably built it, broke it 💥, and
        rebuilt it better ⚡.
      </SuggestionCard>

      <SuggestionCard href="/" label={"📬 How can I reach out to you?"}>
        Carrier pigeons are cool, but email, LinkedIn, or Discord work faster.
        Don’t be shy — my inbox is bug-free 🧼 (mostly 🫣).
      </SuggestionCard>
    </Grid>
  );
};
