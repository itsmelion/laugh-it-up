import './reset.css';
import './global.css';
import { Roboto } from 'next/font/google'

import { Footer } from '@laugh-it-up/components';

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font',
  display: 'swap',
});

export const metadata = {
  title: 'Welcome to laugh-it-up',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
