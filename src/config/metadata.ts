import { Metadata } from "next"
import { keywords } from "./keywords"

export const metadata: Metadata = {
  title: {
    default: "Aelluminate",
    template: "%s | Aelluminate",
  },
  keywords: keywords,
  manifest: "https://aelluminate.com/manifest.json",
  generator: "Aelluminate",
  applicationName: "Aelluminate",
  description:
    "We believe in the power of vision and dedication. Our mission is to help every business we work with to soar and turn possibilities into accomplishments.",
  openGraph: {
    title: "Aelluminate • Loves to empowers businesses",
    description:
      "We believe in the power of vision and dedication. Our mission is to help every business we work with to soar and turn possibilities into accomplishments.",
    url: "https://aelluminate.com",
    siteName: "Aelluminate",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Aelluminate",
    card: "summary_large_image",
    site: "@aelluminate",
    creator: "@aelluminate",
    creatorId: "1658936245899370503",
    description:
      "We believe in the power of vision and dedication. Our mission is to help every business we work with to soar and turn possibilities into accomplishments.",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  alternates: {
    canonical: "https://aelluminate.com",
    languages: {},
  },
  verification: {
    other: {
      me: ["hello@aelluminate.com"],
    },
  },
  appLinks: {
    web: {
      url: "https://aelluminate.com",
      should_fallback: true,
    },
  },
  category: "business",
}
