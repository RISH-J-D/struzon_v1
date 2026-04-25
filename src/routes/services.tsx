import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Struzon Technologies Inc." },
      { name: "description", content: "Structural steel detailing, connection design & stamping, miscellaneous detailing and BIM services." },
      { property: "og:title", content: "Struzon Services" },
      { property: "og:description", content: "Steel detailing, connection design, BIM and engineering services." },
    ],
  }),
});
