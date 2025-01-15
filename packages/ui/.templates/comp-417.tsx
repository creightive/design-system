import { cn } from "@/registry/default/lib/utils";
import { badgeVariants } from "@creight/ui/badge";

export default function Component() {
  return (
    <a href="#" className={cn(badgeVariants({ variant: "default" }), "hover:bg-primary/80")}>
      Link
    </a>
  );
}
