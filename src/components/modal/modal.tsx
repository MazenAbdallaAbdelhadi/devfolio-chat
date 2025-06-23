import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/layout";
import { toast } from "sonner";

interface IModal {
  label: string;
  caption: string;
  trigger: React.ReactNode;
  placeholder?: string;
  submitLabel: string;
  isCopyUrl?: boolean;
  onSubmit?: (value: string) => void;
}

export const Modal = ({
  caption,
  label,
  trigger,
  placeholder,
  submitLabel,
  isCopyUrl = false,
  onSubmit,
}: IModal) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = async () => {
    if (isCopyUrl) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Copied")
      } catch (err) {
        console.error("Failed to copy URL:", err);
      }
    } else if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
          <DialogDescription>{caption}</DialogDescription>
        </DialogHeader>
        <Stack>
          {!isCopyUrl && (
            <Textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="resize-none"
            />
          )}
          <Button onClick={handleSubmit}>{submitLabel}</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
