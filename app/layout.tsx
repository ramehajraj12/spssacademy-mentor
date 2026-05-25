import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPSS Academy Mentor | Mentori virtual akademik për SPSS",
  description:
    "SPSS Academy Mentor është mentor virtual akademik për SPSS, analizë statistikore, metodologji hulumtimi dhe raportim APA 7 në gjuhën shqipe.",
  keywords: [
    "SPSS Academy",
    "SPSS Mentor",
    "SPSS në shqip",
    "Analizë statistikore",
    "Konsulencë SPSS",
    "Metodologji hulumtimi",
    "Raportim APA 7",
    "Statistikë për studentë",
    "Trajnime SPSS",
    "AI mentor për SPSS"
  ],
  openGraph: {
    title: "SPSS Academy Mentor",
    description:
      "Mentori virtual akademik për SPSS, statistika dhe hulumtim shkencor.",
    type: "website",
    images: ["/spss-academy-mentor-hero.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
