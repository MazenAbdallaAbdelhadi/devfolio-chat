import { Stack } from "@/components/layout";
import { PromptInput } from "@/components/prompt-input";
import { SuggestionSection } from "@/components/suggestion-section";

export default function Home() {
  return (
    <Stack justify="center" align="center" className="h-full px-4">
      <h1 className="text-center text-2xl my-2">
        Got bugs? I squash. Got dreams? I deploy.
      </h1>

      <SuggestionSection />

      <PromptInput />
    </Stack>
  );
}
