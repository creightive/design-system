import { Avatar, AvatarFallback } from "@creight/ui/avatar";
import { UserRound } from "lucide-react";

export default function Component() {
  return (
    <Avatar>
      <AvatarFallback>
        <UserRound size={16} strokeWidth={2} className="opacity-60" aria-hidden="true" />
      </AvatarFallback>
    </Avatar>
  );
}
