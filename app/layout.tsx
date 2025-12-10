import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "3回目のNext.jsサイト",
  description: "サイト構築も素振りみたいなもの",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
