import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "JOS CITY SOCCER ACADEMY - Professional Youth Soccer Training in Ghana",
  description:
    "Leading soccer academy in Jos City, Ghana offering professional training programs for young athletes. Develop skills, build character, and achieve excellence with expert coaching and international standards.",
  keywords: [
    "soccer academy Ghana",
    "football training Jos City",
    "youth soccer development",
    "professional soccer coaching",
    "Ghana football academy",
    "soccer skills training",
    "youth sports Ghana",
    "football academy Jos",
    "soccer camp Ghana",
    "youth football development",
  ],
  authors: [{ name: "JOS CITY SOCCER ACADEMY" }],
  creator: "JOS CITY SOCCER ACADEMY",
  publisher: "JOS CITY SOCCER ACADEMY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joscitysoccer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JOS CITY SOCCER ACADEMY - Professional Youth Soccer Training",
    description:
      "Leading soccer academy in Jos City, Ghana offering professional training programs for young athletes with expert coaching and international standards.",
    url: "https://joscitysoccer.vercel.app",
    siteName: "JOS CITY SOCCER ACADEMY",
    images: [
      {
        url: "/hero-team-celebration.jpeg",
        width: 1200,
        height: 630,
        alt: "JOS CITY SOCCER ACADEMY team celebration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JOS CITY SOCCER ACADEMY - Professional Youth Soccer Training",
    description:
      "Leading soccer academy in Jos City, Ghana offering professional training programs for young athletes.",
    images: ["/hero-team-celebration.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
