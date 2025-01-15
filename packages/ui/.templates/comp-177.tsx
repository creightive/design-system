import { Label } from "@creight/ui/label";
import { Switch } from "@creight/ui/switch";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        className="h-3 w-9 border-none outline-offset-[6px] [&_span]:border [&_span]:border-input"
      />
      <Label htmlFor={id} className="sr-only">
        M2-style switch
      </Label>
    </div>
  );
}
