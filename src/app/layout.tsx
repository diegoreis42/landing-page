
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/app/components/Footer'
import Header from '@/app/components/Header';
import './globals.css'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Isso eh um landing page feito pela byron :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <Header
          image={{
            path: '/img/bsol.png',
            alt: 'logo da byron',
            size: 200
          }}

          links={[
            {
              text: 'Planos',
              link: '/'
            },

            {
              text: 'Carreira',
              link: '/'
            },

            {
              text: 'Entre em contato',
              link: '/'
            }

          ]}
        />

        {children}

        <Footer
          iconsSize={35}
          links={{
            instagram: "https://google.com",
            facebook: "https://google.com",
            linkedIn: "https://google.com",
          }}
          image={{
            path: "/img/logo.png",
            alt: "Isso eh a logo foda no footer",
            size: 200,
          }}
        />
      </body>
    </html>
  );
}
import 'bootstrap/dist/css/bootstrap.min.css';
