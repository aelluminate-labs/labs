import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Aelluminate",
    template: "%s | Aelluminate",
  },
  description:
    "At Aelluminate, we believe in the power of vision and dedication. Our mission is to help every business we work with to soar and turn possibilities into accomplishments.",
  openGraph: {
    title: "Aelluminate",
    description:
      "At Aelluminate, we believe in the power of vision and dedication. Our mission is to help every business we work with to soar and turn possibilities into accomplishments.",
    url: "https://aelluminate.com",
    siteName: "Aelluminate",
    images: [
      {
        url: "https://aelluminate.com/images/og.jpg",
        width: 1920,
        height: 1080,
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
    description:
      "At Aelluminate, we believe in the power of vision and dedication. Our mission is to help every business we work with to soar and turn possibilities into accomplishments.",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}
