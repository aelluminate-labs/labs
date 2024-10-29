import Link from "next/link"
import { SocialLinks } from "@/types/social-links"

export default function SocialLink({ url, Icon }: SocialLinks) {
  return (
    <li>
      <Link href={url} target={"_blank"}>
        <Icon className="h-4 w-4 hover:text-slate-50" />
      </Link>
    </li>
  )
}
