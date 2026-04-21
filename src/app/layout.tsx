import type { Metadata } from "next";
import { Inter, Geist_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sofon",
    default: "Sofon - Self Hosted Uptime Monitoring System",
  },
  description: "Deploy a robust, modern, and open-source uptime monitoring system directly on your infrastructure with a single command.",
  keywords: ["Uptime", "Monitoring", "Self-Hosted", "Open Source", "Sofon", "Infrastructure", "DevOps"],
  authors: [{ name: "Alkush-Pipania", url: "https://github.com/Alkush-Pipania" }],
  creator: "Alkush Pipania",
  publisher: "Sofon Open Source",
  metadataBase: new URL("https://github.com/Alkush-Pipania/sofon"),
  openGraph: {
    title: "Sofon - Self Hosted Uptime Monitoring System",
    description: "Deploy a robust, modern, and open-source uptime monitoring system directly on your infrastructure with a single command.",
    url: "https://github.com/Alkush-Pipania/sofon",
    siteName: "Sofon",
    images: [
      {
        url: "https://repository-images.githubusercontent.com/832717830/0a8c2ef8-eb1a-4d2c-882d-8ec66f296cda", 
        width: 1200,
        height: 630,
        alt: "Sofon Open Source Uptime Monitoring System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofon - Self Hosted Uptime Monitoring System",
    description: "Deploy a robust, modern, and open-source uptime monitoring system directly on your infrastructure.",
    creator: "@alkushpipania",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
