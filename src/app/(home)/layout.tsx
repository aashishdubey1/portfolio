import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '../globals.css';


// Google Font Setup
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

// Metadata for the website
export const metadata: Metadata = {
  title: 'Aashish Dubey | Backend Developer',
  description: 'Portfolio of Aashish Dubey, a Backend Developer',
  keywords: [
    'Aashish Dubey',
    'Backend Developer',
    'Full-stack Developer',
    'Portfolio',
    'Web Development',
    'Software Engineer',
    'React Developer',
    'Node.js Developer',
    'devops engineer',
    'Next.js Developer',
  ],
  authors: [{ name: 'Aashish Dubey', url: '' }],
  openGraph: {
    title: 'Aashish Dubey | Backend Developer Portfolio',
    description: 'Portfolio of Aashish Dubey, a Backend Developer',
    url: '',
    siteName: 'Aashish Dubey',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Aashish Dubey Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aashish Dubey | Backend Developer',
    description: 'Portfolio of Aashish Dubey, a Backend Developer',
    images: [],
    creator: '@aashish__x',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${spaceGrotesk.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}