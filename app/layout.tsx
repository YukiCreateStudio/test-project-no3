import type { Metadata } from "next";
import "./globals.css";
import Header from "./_component/Header";

export const metadata: Metadata = {
  title: "3rd.try",
  description: "３回目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
