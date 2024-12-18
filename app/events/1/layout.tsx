import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScriptクイズ@Shinyai.js 第1回",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
