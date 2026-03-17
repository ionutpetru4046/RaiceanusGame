import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutContent } from "@/components/layout-content";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raiceanus Game - Premium Poker Experience",
  description: "Join the ultimate poker community with tournaments, expert analysis, and premium gaming content.",
  keywords: "poker, tournaments, games, casino, cards, betting",
  authors: [{ name: "Raiceanus Game" }],
  creator: "Raiceanus Game",
  openGraph: {
    title: "Raiceanus Game - Premium Poker Experience",
    description: "Join the ultimate poker community with tournaments, expert analysis, and premium gaming content.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
