import { Label } from "@creight/ui/label";
import { Textarea } from "@creight/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Textarea with gray background</Label>
      <Textarea
        id={id}
        className="border-transparent bg-muted shadow-none"
        placeholder="Leave a comment"
      />
    </div>
  );
}
