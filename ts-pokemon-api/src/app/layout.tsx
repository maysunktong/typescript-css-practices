import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Pokemon Tailwind TS",
  description: "Pokemon API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className="antialiased bg-purple-400 box-border m-0 p-0 h-full flex flex-col font-mulish"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
