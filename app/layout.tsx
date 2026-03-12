import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Higgsfield Motion Control',
  description: 'Recreate Higgsfield Motion Control app',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-higgs-bg text-white font-sans antialiased overflow-hidden h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
