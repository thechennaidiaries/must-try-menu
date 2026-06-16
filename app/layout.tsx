import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Must Try Today | Food Court",
  description: "Immersive discovery experience of signature dishes.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Must Try",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased bg-black`}
    >
      <body className="h-full w-full bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}

