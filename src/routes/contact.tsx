import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Struzon Technologies Inc." },
      { name: "description", content: "Get in touch with Struzon for structural steel detailing and BIM project enquiries. Offices in USA, UK, India, and Canada." },
      { property: "og:title", content: "Contact Struzon" },
      { property: "og:description", content: "Give us a call or fill in the form — we'll contact you." },
    ],
  }),
});
