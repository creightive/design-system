import { Avatar, AvatarFallback, AvatarImage } from "@creight/ui/avatar";
import { Badge } from "@creight/ui/badge";

export default function Component() {
  return (
    <div className="relative">
      <Avatar className="rounded-lg">
        <AvatarImage src="./avatar-80-07.jpg" alt="Kelly King" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <Badge className="absolute -top-2 left-full min-w-5 -translate-x-3 border-background px-1">
        6
      </Badge>
    </div>
  );
}
