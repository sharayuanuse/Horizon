import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

/*Inter: This is a function to load the Inter font.
subsets: ["latin"]: Specifies that you only want to load the Latin subset of the Inter font.
variable: '--font-inter': Defines a CSS variable (--font-inter) that will be used to apply this font in your styles.*/

const inter = Inter({ subsets: ["latin"] , variable: '--font-inter'});

/*IBM_Plex_Serif: This is a function to load the IBM Plex Serif font.
subsets: ['latin']: Specifies that you only want to load the Latin subset of the IBM Plex Serif font.
weight: ['400', '700']: Specifies that you want to load the font weights 400 (normal) and 700 (bold).
variable: '--font-ibm-plex-serif': Defines a CSS variable (--font-ibm-plex-serif) that will be used to apply this font in your styles.*/

const ibmPlexSirf = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400' , '700'],
  variable: '--font-ibm-plex-serif'
})

/* Name of website*/

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*allows us to use inter and ibmPlexSerif fonts throughout the project*/}
      <body className={`${inter.variable} ${ibmPlexSirf.variable}`}>{children}</body>
    </html>
  );
}
