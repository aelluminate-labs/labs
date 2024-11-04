import Link from "next/link"
import socials from "@/data/socials.json"
import { getIconByName } from "@/utils/get-icon-name"
import { FC } from "react"

interface SocialLinkProps {
  url: string
  Icon: React.ComponentType
}

const SocialLink: FC<SocialLinkProps> = ({ url, Icon }) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Icon />
      </Link>
    </li>
  )
}

export default function FooterSocialLinks() {
  return (
    <ul className="order-1 flex flex-row items-center justify-center gap-4 text-slate-600">
      {socials.socials.map((link, index) => {
        const Icon = getIconByName(link.icon as keyof typeof import("@remixicon/react"))
        return <SocialLink key={index} url={link.url} Icon={Icon} />
      })}
    </ul>
  )
}
