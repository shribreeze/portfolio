import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Sameer Gautam | Front-End Developer & Full-Stack Engineer",
  description: "Sameer Gautam is a creative front-end developer with expertise in React.js, Next.js, Tailwind CSS, and full-stack development. Specialized in building fast, responsive, and scalable web applications using modern technologies including Web3, AI integrations, and Firebase.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    "Sameer Gautam",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "Tailwind CSS",
    "Web Developer India",
    "Web3 Developer",
    "AI Web Apps",
    "Freelance Developer",
    "MERN Stack Developer",
    "Modern UI Developer",
    "Creative Portfolio",
  ],
  authors: [{ name: "Sameer Gautam", url: "https://sameergautam.vercel.app/" }],
  creator: "Sameer Gautam",
  openGraph: {
    title: "Sameer Gautam | Front-End Developer & Full-Stack Engineer",
    description:
      "Explore the portfolio of Sameer Gautam, a skilled React and Next.js developer building modern, high-performance web applications with Web3 and AI integrations.",
    url: "https://sameergautam.vercel.app/",
    siteName: "Sameer Gautam Portfolio",
    images: [
      {
        url: "https://sameergautam.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sameer Gautam Portfolio",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://sameergautam.vercel.app/"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
