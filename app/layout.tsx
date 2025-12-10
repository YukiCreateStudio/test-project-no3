import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
