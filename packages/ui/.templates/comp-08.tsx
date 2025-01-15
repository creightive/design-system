import { Input } from "@creight/ui/input";
import { Label } from "@creight/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Disabled input</Label>
      <Input id={id} placeholder="Email" type="email" disabled />
    </div>
  );
}
