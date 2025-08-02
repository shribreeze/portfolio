import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Sameer Gautam - Full-Stack Developer & Web3 Innovator",
  description: "Creative full-stack developer specializing in React, Next.js, Web3, and AI technologies.",
    generator: 'v0.dev'
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
