import React from "react"
import type { Metadata } from "next"

// Global styles & fonts
import "../assets/globals.css"
import { lora, lexendDeca } from "@/utils/fonts"

// Metadata for the global layout
export const metadata: Metadata = {
  title: "Aelluminate",
  description:
    "Aelluminate, a vibrant student-focused organization where the next generation of engineers nurtured by a dynamic collaboration between students and university professors.",
}

// Components
import Footer from "@/components/footer"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[lora.variable, lexendDeca.variable].join(" ")}>
      <body className={`bg-neutral-900 font-lexend-deca font-light text-slate-50 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
