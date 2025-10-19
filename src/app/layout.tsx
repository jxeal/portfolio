import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import { Appbar } from "@/components";
import Script from "next/script";
import Prism from "@/components/Prism";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sayakcodes.in"),
  title: {
    default: "Sayak Majumder",
    template: "%s | Full Stack Developer",
  },
  description:
    "I'm a Full Stack Developer skilled in React, Next.js, TypeScript, AWS, Node.js. Check out my portfolio!",
  openGraph: {
    title: "Sayak Majumder | Full Stack Developer",
    description:
      "Explore my projects, blog, and experience in full stack development,web3,devops",
    url: "https://sayakcodes.in",
    siteName: "Sayak's Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/102361005",
        width: 1200,
        height: 630,
        alt: "Sayak Majumder",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayak Majumder | Full Stack Developer",
    description: "Explore my projects and fullstack development journey",
    site: "@zhunxeal",
    images: ["https://avatars.githubusercontent.com/u/102361005"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sayak Majumder",
              url: "https://sayakcodes.in",
              sameAs: [
                "https://www.linkedin.com/in/sayak-majumder/",
                "https://github.com/jxeal",
                "https://x.com/zhunxeal",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            zIndex: "-500",
          }}
        >
          <Prism
            animationType="3drotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={4}
            noise={0}
            glow={0.7}
          />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Appbar />
          {children}
        </ThemeProvider>
        <ToastContainer theme="dark" hideProgressBar={true} />
      </body>
    </html>
  );
}
