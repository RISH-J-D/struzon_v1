import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Struzon Technologies Inc." },
      { name: "description", content: "Join Struzon — open positions for steel detailers, modelers, checkers and engineers." },
      { property: "og:title", content: "Careers at Struzon" },
      { property: "og:description", content: "Build a career in structural steel detailing and BIM with Struzon." },
    ],
  }),
});
