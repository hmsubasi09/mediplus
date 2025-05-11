import type { Metadata } from 'next';
import { Yeseva_One, Work_Sans } from 'next/font/google';
import './globals.css';

// Fontları yapılandır
const yeseva = Yeseva_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-yeseva-one',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MediPlus - Sağlık Hizmetleri',
  description: 'Sağlık hizmetleri platformu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${yeseva.variable} ${workSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}