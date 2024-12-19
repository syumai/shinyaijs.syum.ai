import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shinyai.js 第1回 JavaScriptクイズ",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
