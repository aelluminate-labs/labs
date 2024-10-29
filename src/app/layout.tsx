import React from "react"
import { Metadata } from "next"

// Global styles & fonts
import "../assets/globals.css"
import { lora, lexendDeca } from "@/utils/fonts"

// Metadata for the global layout
import { metadata as SiteMetadata } from "@/config/metadata"
export const metadata: Metadata = SiteMetadata

// Components
import { Footer } from "@/components/footer/_index"

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
