import Link from "next/link"
import { RiLinkedinFill, RiGithubLine, RiTwitterXLine, RiThreadsLine } from "@remixicon/react"

export default function Footer() {
  let currentYear = new Date().getFullYear()

  return (
    <footer className="fixed bottom-0 left-0 z-20 flex w-full justify-center gap-4 bg-white p-8 text-slate-400">
      <div className="flex w-full max-w-2xl flex-col items-center justify-between gap-4 md:flex-row lg:flex-row">
        <div className="order-2 text-sm md:order-1 lg:order-1">
          &copy; {currentYear} Aelluminate. All Rights Reserved.
        </div>
        <ul className="order-1 flex flex-row items-center justify-center gap-4 text-slate-600 md:order-2 lg:order-2">
          <li>
            <Link href={"/"}>
              <RiLinkedinFill className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <RiGithubLine className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <RiTwitterXLine className="h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <RiThreadsLine className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
