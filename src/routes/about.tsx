import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Struzon Technologies Inc." },
      { name: "description", content: "Struzon is a trusted structural steel detailing partner — founded by experienced engineers, serving global construction." },
      { property: "og:title", content: "About Struzon" },
      { property: "og:description", content: "Pioneers of structural detailing and BIM, serving the construction industry worldwide." },
    ],
  }),
});
