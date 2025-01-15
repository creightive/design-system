import { Label } from "@creight/ui/label";
import { Textarea } from "@creight/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Shorter textarea</Label>
      <Textarea id={id} className="min-h-[none]" placeholder="Leave a comment" rows={2} />
    </div>
  );
}
