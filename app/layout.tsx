import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Abhyudit Adhikari | AI/ML Engineer",
  description:
    "AI/ML Engineer focused on production LLM systems and computer vision. Built cost-efficient shipping AI, evidence-backed CV screening, and IEEE-published assistive navigation research.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/hero-image.jpg" as="image" />
        <link rel="preload" href="/window-bg.jpg" as="image" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
