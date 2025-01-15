import { Label } from "@creight/ui/label";
import { Switch } from "@creight/ui/switch";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id={id} />
      <Label htmlFor={id} className="sr-only">
        Simple switch
      </Label>
    </div>
  );
}
