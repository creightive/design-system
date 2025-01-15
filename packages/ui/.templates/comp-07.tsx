import { Input } from "@creight/ui/input";
import { Label } from "@creight/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Input with gray background</Label>
      <Input
        id={id}
        className="border-transparent bg-muted shadow-none"
        placeholder="Email"
        type="email"
      />
    </div>
  );
}
