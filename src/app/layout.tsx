import "./globals.css";
import { FloatingNav } from "@/app/components/floating-nav";

export const metadata = {
  title: "Interact Club",
  description: "School club for community service and leadership",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`bg-black text-white min-h-screen`}>
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
