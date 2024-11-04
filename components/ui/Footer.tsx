import React from "react"
import { FooterSocialLinks } from "@/components/shared"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 z-20 flex w-full justify-center gap-4 bg-neutral-900 p-8 text-slate-50">
      <div className="flex w-full max-w-2xl flex-col items-center justify-between gap-4 md:flex-row lg:flex-row">
        <div className="order-2 text-sm md:order-1 lg:order-1">
          &copy; {currentYear} Aelluminate. All Rights Reserved.
        </div>
        <FooterSocialLinks />
      </div>
    </footer>
  )
}
