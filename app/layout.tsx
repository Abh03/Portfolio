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
  title: "Abhyudit Adhikari - ML Engineer",
  description:
    "Final-Year Computer Engineering Student & ML Enthusiast specializing in Deep Learning and Computer Vision",
  generator: "v0.app",
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
        <link rel="preload" href="/light-tech-circuit.png" as="image" media="(min-width: 768px)" />
        <link rel="preload" href="/light-tech-circuit-mobile.png" as="image" media="(max-width: 767px)" />
        <link rel="preload" href="/window-bg.png" as="image" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
