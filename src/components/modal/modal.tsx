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

interface IModal {
  label: string;
  caption: string;
  trigger: React.ReactNode;
  placeholder: string;
  submitLabel: string;
}

export const Modal = ({
  caption,
  label,
  trigger,
  placeholder,
  submitLabel,
}: IModal) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
          <DialogDescription>{caption}</DialogDescription>
        </DialogHeader>
        <Stack>
          <Textarea
            placeholder={placeholder}
            className="resize-none"
          ></Textarea>
          <Button>{submitLabel}</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
