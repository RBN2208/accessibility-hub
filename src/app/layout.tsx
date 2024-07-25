import type { Metadata } from "next";
import "./globals.scss";
import Header from '@/components/common/layout/header';
import Footer from '@/components/common/layout/footer';

export const metadata: Metadata = {
  title: "Accessibility Hub",
  description: "A tool to do accessibility audits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
