import { Label } from "@creight/ui/label";
import { Slider } from "@creight/ui/slider";

export default function Component() {
  return (
    <div className="space-y-4">
      <Label>Dual range slider</Label>
      <Slider defaultValue={[25, 75]} step={10} aria-label="Dual range slider" />
    </div>
  );
}
