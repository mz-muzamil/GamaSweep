import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Akceler alternative - using a similar bold sans-serif
const akcelerHeader = Roboto({
  weight: ["900"],
  subsets: ["latin"],
  variable: "--font-akceler-header",
});

const akcelerSubheader = Roboto({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-akceler-subheader",
});

export const metadata: Metadata = {
  title: "Trickly - Turn Scattered Work Into Seamless Teamwork",
  description: "Streamline your team's workflow with Trickly. Organize projects, collaborate effortlessly, and boost productivity with our all-in-one platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${akcelerHeader.variable} ${akcelerSubheader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
