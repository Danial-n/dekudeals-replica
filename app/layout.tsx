import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Darkmode } from './components/Darkmode';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DekuDeals Replica',
  description: 'Part of website replica project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {' '}
        <Darkmode attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
          <Footer />
        </Darkmode>
      </body>
    </html>
  );
}
