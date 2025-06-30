import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import CursorGlow from '@/components/cursor-glow';

export const metadata: Metadata = {
  title: 'UIMolten Portfolio',
  description: 'UI/UX Commissions by UIMolten',
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
