/**
 * Root Layout
 * SMK Negeri 6 Surakarta Website
 * 
 * @author Muhammad Zidane Sungkar
 * @copyright 2025 Muhammad Zidane Sungkar
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMK Negeri 6 Surakarta - Sekolah Menengah Kejuruan Berkualitas",
  description: "Website resmi SMK Negeri 6 Surakarta. Sekolah kejuruan terbaik dengan berbagai jurusan dan kompetensi keahlian yang siap mencetak lulusan profesional.",
  keywords: "SMK Negeri 6 Surakarta, SMKN 6 Solo, sekolah kejuruan, pendidikan vokasi, jurusan SMK",
  authors: [{ name: "Muhammad Zidane Sungkar" }],
  creator: "Muhammad Zidane Sungkar",
  publisher: "SMK Negeri 6 Surakarta",
  openGraph: {
    title: "SMK Negeri 6 Surakarta",
    description: "Sekolah Menengah Kejuruan Berkualitas di Surakarta",
    url: "https://smkn6solo.sch.id",
    siteName: "SMK Negeri 6 Surakarta",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
