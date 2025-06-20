import { Grid, Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <Stack justify="center" align="center" className="h-full px-4">

     
        <h1 className="text-center text-2xl my-2">Hi there! What would you like to know about me?</h1>

        <Grid cols={2} className="w-sm md:w-lg lg:w-xl my-3">
          <Button variant="outline"  className="whitespace-normal h-auto" >👋 Who are you and what do you do?</Button>
          <Button variant="outline"  className="whitespace-normal h-auto" >💼 Can you walk me through your experience?</Button>
          <Button variant="outline"  className="whitespace-normal h-auto" >🚀 What kind of projects have you built?</Button>
          <Button variant="outline"  className="whitespace-normal h-auto" >📬 How can I reach out to you?</Button>
        </Grid>
      <Card className="w-sm md:w-lg lg:w-xl p-3">
          <form className="flex">
            <Textarea
              id="message"
              name="message"
              className="bg-card dark:bg-card border-none w-full !ring-0 resize-none shadow-none"
              placeholder="Ask anything..."
            ></Textarea>

            <Button size="sm" className="self-end text-sm"><ArrowUp/> </Button>
          </form>
      </Card>
    </Stack>
  );
}
