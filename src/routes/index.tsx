import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Struzon Technologies Inc. — Structural Steel Detailing & Engineering" },
      { name: "description", content: "World-class structural steel detailing, connection design, and BIM services for global fabricators and engineers." },
    ],
  }),
});
