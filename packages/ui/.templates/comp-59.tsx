import { Label } from "@creight/ui/label";
import { Textarea } from "@creight/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Simple textarea</Label>
      <Textarea id={id} placeholder="Leave a comment" />
    </div>
  );
}
