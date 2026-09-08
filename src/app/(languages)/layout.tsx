import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lenguajes - Portafolio",
  description:
    "Proyectos y actividades relacionadas con lenguajes de programación",
};

export default function LanguagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="languages-container contents">{children}</div>;
}
