import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
 
const description =
  "Full Stack Developer & Gen AI Engineer building scalable web apps and multi-agent AI systems with Next.js, LangGraph, CrewAI and more. Associate Software Engineer at ElasticRun.";

export const metadata: Metadata = {
  title: {
    default: "Siddharth Bramhecha | Full Stack & Gen AI Engineer",
    template: "%s | Siddharth Bramhecha",
  },
  description,
  applicationName: "Siddharth Bramhecha Portfolio",
  keywords: [
    "Siddharth Bramhecha",
    "Full Stack Developer",
    "Gen AI Engineer",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "CrewAI",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Siddharth Bramhecha", url: "https://github.com/Sid-80" }],
  creator: "Siddharth Bramhecha",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Siddharth Bramhecha | Full Stack & Gen AI Engineer",
    description,
    siteName: "Siddharth Bramhecha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Bramhecha | Full Stack & Gen AI Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
