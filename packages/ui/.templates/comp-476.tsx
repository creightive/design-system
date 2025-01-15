import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@creight/ui/table";
import { Check, Monitor, Smartphone, X } from "lucide-react";

const items = [
  {
    feature: "scroll-timeline",
    desktop: [
      { name: "Chrome", supported: true, version: "115" },
      { name: "Edge", supported: true, version: "115" },
      { name: "Firefox", supported: false, version: "111" },
      { name: "Opera", supported: true, version: "101" },
      { name: "Safari", supported: false, version: "No" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "115" },
      { name: "Firefox Android", supported: false, version: "No" },
      { name: "Opera Android", supported: true, version: "77" },
      { name: "Safari iOS", supported: false, version: "No" },
      { name: "Samsung Internet", supported: true, version: "23" },
    ],
  },
  {
    feature: "view-timeline",
    desktop: [
      { name: "Chrome", supported: true, version: "115" },
      { name: "Edge", supported: true, version: "115" },
      { name: "Firefox", supported: false, version: "114" },
      { name: "Opera", supported: true, version: "101" },
      { name: "Safari", supported: false, version: "No" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "115" },
      { name: "Firefox Android", supported: false, version: "No" },
      { name: "Opera Android", supported: true, version: "77" },
      { name: "Safari iOS", supported: false, version: "No" },
      { name: "Samsung Internet", supported: true, version: "23" },
    ],
  },
  {
    feature: "font-size-adjust",
    desktop: [
      { name: "Chrome", supported: true, version: "127" },
      { name: "Edge", supported: true, version: "127" },
      { name: "Firefox", supported: false, version: "3" },
      { name: "Opera", supported: true, version: "113" },
      { name: "Safari", supported: true, version: "16.4" },
    ],
    mobile: [
      { name: "Chrome Android", supported: true, version: "127" },
      { name: "Firefox Android", supported: true, version: "4" },
      { name: "Opera Android", supported: true, version: "84" },
      { name: "Safari iOS", supported: true, version: "16.4" },
      { name: "Samsung Internet", supported: false, version: "No" },
    ],
  },
];

export default function Component() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-y-0 *:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          <TableHead className="border-b border-border text-center" colSpan={5}>
            <Monitor className="inline-flex" size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Desktop browsers</span>
          </TableHead>
          <TableHead className="border-b border-border text-center" colSpan={5}>
            <Smartphone className="inline-flex" size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Mobile browsers</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableHeader>
        <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
          <TableCell></TableCell>
          {items[0].desktop.map((browser) => (
            <TableHead
              key={browser.name}
              className="h-auto rotate-180 py-3 text-foreground [writing-mode:vertical-lr]"
            >
              {browser.name}
            </TableHead>
          ))}
          {items[0].mobile.map((browser) => (
            <TableHead
              key={browser.name}
              className="h-auto rotate-180 py-3 text-foreground [writing-mode:vertical-lr]"
            >
              {browser.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.feature} className="*:border-border [&>:not(:last-child)]:border-r">
            <TableHead className="font-medium text-foreground">{item.feature}</TableHead>
            {[...item.desktop, ...item.mobile].map((browser, index) => (
              <TableCell key={`${browser.name}-${index}`} className="space-y-1 text-center">
                {browser.supported ? (
                  <Check
                    className="inline-flex stroke-emerald-600"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                ) : (
                  <X
                    className="inline-flex stroke-red-600"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">{browser.supported ? "Supported" : "Not supported"}</span>
                <div className="text-xs font-medium text-muted-foreground">{browser.version}</div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
