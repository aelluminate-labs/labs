import "@/assets/core.css";
import type { Metadata } from "next";
import { metadata as SiteMetadata } from "@/config/meta/metadata"
import { lora, lexendDeca } from "@/utils/fonts"
import { Footer } from "@/components/";

export const metadata: Metadata = SiteMetadata


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[lora.variable, lexendDeca.variable].join(" ")}>
      <body className={`bg-neutral-900 font-lexend-deca font-light text-slate-50 antialiased`}>
          {children}
        <Footer />
      </body>
    </html>
  );
}
