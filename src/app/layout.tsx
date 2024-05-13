import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/nav-bar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shankar Bhandari",
  description: "Shankar Bhandari personal website",
};

//  starts from here 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}