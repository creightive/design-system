import { Label } from "@creight/ui/label";
import { Textarea } from "@creight/ui/textarea";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <>
      <div className="mb-2 flex items-center justify-between gap-1">
        <Label htmlFor={id} className="leading-6">
          Textarea with hint
        </Label>
        <span className="text-sm text-muted-foreground">Optional</span>
      </div>
      <Textarea id={id} placeholder="Leave a comment" />
    </>
  );
}
