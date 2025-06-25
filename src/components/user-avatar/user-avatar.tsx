import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const UserAvatar = () => {
  return (
    <Avatar className="size-10">
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
  );
};
