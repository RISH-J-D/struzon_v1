import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Struzon Technologies Inc." },
      { name: "description", content: "Explore Struzon's structural steel detailing projects in a clean, interactive environment." },
    ],
  }),
});
