import { getBaseURL } from "@lib/util/env"
import { Bebas_Neue, Google_Sans } from "next/font/google"
import { Metadata } from "next"
import "styles/globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const googleSans = Google_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${bebasNeue.variable} ${googleSans.variable}`}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
