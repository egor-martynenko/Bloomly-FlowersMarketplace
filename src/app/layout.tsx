import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bloomly',
  description: 'Flowers Marketplace',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}