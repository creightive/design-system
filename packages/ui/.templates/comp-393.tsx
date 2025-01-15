import { Avatar, AvatarFallback, AvatarImage } from "@creight/ui/avatar";

export default function Component() {
  return (
    <Avatar className="rounded-lg">
      <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
      <AvatarFallback>KK</AvatarFallback>
    </Avatar>
  );
}
