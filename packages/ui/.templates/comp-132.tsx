import { Checkbox } from "@creight/ui/checkbox";
import { Label } from "@creight/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} />
      <Label htmlFor={id}>Simple checkbox</Label>
    </div>
  );
}
