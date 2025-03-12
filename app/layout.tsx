import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.name,
    template: `%s | ${metaData.name}`,
  },
  description: metaData.description,
  // openGraph: {
  //   images: metaData.ogImage,
  //   title: metaData.title,
  //   description: metaData.description,
  //   url: metaData.baseUrl,
  //   siteName: metaData.name,
  //   locale: "en_US",
  //   type: "website",
  // },
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
  // twitter: {
  //   title: metaData.name,
  //   card: "summary_large_image",
  // },
  icons: {
    icon: "/mudkip.png",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <head>
        {/*<link*/}
        {/*  rel="alternate"*/}
        {/*  type="application/rss+xml"*/}
        {/*  href="/rss.xml"*/}
        {/*  title="RSS Feed"*/}
        {/*/>*/}
        {/*<link*/}
        {/*  rel="alternate"*/}
        {/*  type="application/atom+xml"*/}
        {/*  href="/atom.xml"*/}
        {/*  title="Atom Feed"*/}
        {/*/>*/}
        {/*<link*/}
        {/*  rel="alternate"*/}
        {/*  type="application/feed+json"*/}
        {/*  href="/feed.json"*/}
        {/*  title="JSON Feed"*/}
        {/*/>*/}
      </head>
      <body className="antialiased flex flex-col items-center justify-start w-[85%] min-h-screen mx-auto bg-zinc-100 dark:bg-zinc-900 border-l-[0.5px] border-r-[0.5px] border-zinc-600/50">
        <div className="fixed top-0 w-[85%] justify-center h-32 bg-zinc-100 dark:bg-zinc-900 z-0 border-l-[0.5px] border-r-[0.5px] border-zinc-600/50"></div>
        <div className="mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40 w-[85%]">
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
            <Navbar/>
            <main className="flex-grow pt-32 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 w-full">
              {children}
            </main>
          </ThemeProvider>
        </div>
        <div className="w-[85%] items-center justify-center flex flex-col flex-grow bottom-12">
          <Footer/>
          <Analytics/>
          <SpeedInsights/>
          <div className="fixed bottom-0 w-[85%] justify-center h-32 bg-zinc-100 dark:bg-zinc-900 z-0 border-l-[0.5px] border-r-[0.5px] border-zinc-600/50"></div>
        </div>
      </body>
    </html>
  );
}
