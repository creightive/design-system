"use client";

import { useToast } from "@/registry/default/hooks/use-toast";
import { Button } from "@creight/ui/button";
import { ToastAction } from "@creight/ui/toast";

export default function Component() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "We couldn't complete your request!",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show toast
    </Button>
  );
}
