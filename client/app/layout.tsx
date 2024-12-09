import type { Metadata } from 'next';
import { ftSterling } from '@/lib/constants/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aleksander Oleszkiewicz - Fullstack Developer',
  description: 'Portfolio of Aleksander Oleszkiewicz, a Fullstack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ftSterling.className} antialiased`}>{children}</body>
    </html>
  );
}
