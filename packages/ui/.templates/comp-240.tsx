import { Label } from "@creight/ui/label";
import { Slider } from "@creight/ui/slider";

export default function Component() {
  return (
    <div className="space-y-4">
      <Label>Simple slider</Label>
      <Slider defaultValue={[25]} aria-label="Simple slider" />
    </div>
  );
}
