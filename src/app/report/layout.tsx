import type { Metadata } from "next";
import common from '../common-styles.module.scss';

export const metadata: Metadata = {
  title: "Accessibility Hub",
  description: "A tool to do accessibility audits",
};

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className={common.subNavigation}>Header 2</nav>
      {children}
    </>
  );
}
