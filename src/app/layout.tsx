'use client';

import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Cta from '@/components/common/Cta';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const isAuthPage = [
    '/auth/sign-in', 
    '/auth/sign-up', 
    '/auth/forget-password'
  ].includes(pathname);

  return (
    <html lang="en">
      <body>
        {!isAuthPage && <Navbar />}
        {children}
        {!isAuthPage && <Cta/>}
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}