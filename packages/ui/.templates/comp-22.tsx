import { Button } from "@creight/ui/button";
import { Input } from "@creight/ui/input";
import { Label } from "@creight/ui/label";
import { useId } from "react";

export default function Component() {
  const id = useId();
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>Input with button</Label>
      <div className="flex gap-2">
        <Input id={id} className="flex-1" placeholder="Email" type="email" />
        <Button variant="outline">Send</Button>
      </div>
    </div>
  );
}
