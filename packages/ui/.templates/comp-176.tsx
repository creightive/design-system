import { Label } from "@creight/ui/label";
import { Switch } from "@creight/ui/switch";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="inline-flex items-center gap-2">
      <Switch id={id} className="rounded-md [&_span]:rounded" />
      <Label htmlFor={id} className="sr-only">
        Square switch
      </Label>
    </div>
  );
}
