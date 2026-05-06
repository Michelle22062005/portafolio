import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Languages - Portfolio",
  description: "Projects and activities related to programming languages",
};

export default function LanguagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="languages-container contents">
      {children}
    </div>
  );
}