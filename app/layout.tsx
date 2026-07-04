import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Agent Tools Comparison | LangGraph vs Flowise vs n8n",
  description: "Comprehensive comparison of AI agent platforms including LangGraph, Flowise, and n8n. Features, pros/cons, and expert recommendations to help you choose the right tool.",
  keywords: ["AI agents", "LangGraph", "Flowise", "n8n", "workflow automation", "AI tools comparison"],
  openGraph: {
    title: "AI Agent Tools Comparison",
    description: "Compare LangGraph, Flowise, and n8n - the leading AI agent platforms",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}