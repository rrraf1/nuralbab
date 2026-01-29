import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yayasan Nur Albab Nusantara | Meneruskan Cahaya Kebaikan",
  description: "Mewujudkan generasi penerus yang berakhlak melalui warisan ilmu dan keteladanan KH. M. Nur di Yayasan Nur Albab Nusantara.",
  icons: {
    icon: "/assets/Logo/LOGO_YAYASAN.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
