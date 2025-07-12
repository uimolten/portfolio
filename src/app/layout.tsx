import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import CursorGlow from '@/components/cursor-glow';
import { PageTransition } from '@/components/page-transition';


export const metadata: Metadata = {
  title: {
    default: "UIMolten | Roblox UI/UX Designer",
    template: `%s | UIMolten`,
  },
  description: "Expert Roblox UI/UX designer moltennn, crafting modern, intuitive, and high-quality digital experiences. Specializing in commissions for simulator, combat, and roleplay games.",
  keywords: [
    "Roblox UI",
    "Roblox UX",
    "UI Designer",
    "UX Designer",
    "Roblox Developer",
    "UIMolten",
    "moltennn",
    "Game UI",
    "Commissions",
  ],
  authors: [
    {
      name: "moltennn",
      url: "https://x.com/moltennn_",
    },
  ],
  creator: "moltennn",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "UIMolten | Roblox UI/UX Designer",
    description: "Expert Roblox UI/UX designer moltennn, crafting modern, intuitive, and high-quality digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UIMolten | Roblox UI/UX Designer",
    description: "Expert Roblox UI/UX designer moltennn, crafting modern, intuitive, and high-quality digital experiences.",
    creator: "@moltennn_",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Outfit:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CursorGlow />
        <PageTransition>
          {children}
        </PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
