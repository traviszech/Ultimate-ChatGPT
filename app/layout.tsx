/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";

export const metadata = {
  title: "The Ultimate ChatGPT",
  description: "Experience the Ultimate ChatGPT Chat Bot: Powered by GPT-3.5 Turbo AI, our cutting-edge virtual assistant revolutionizes your online interactions. Engage in captivating conversations, get instant answers, and access a wealth of knowledge. With unparalleled intelligence and lightning-fast response times, our Chat Bot is your go-to source for expert advice, innovative ideas, and friendly banter. Don't miss out on this incredible opportunity to explore the future of AI. Click now to unlock endless possibilities with our advanced ChatGPT Chat Bot!",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "The Ultimate ChatGPT - Unlock the ultimate features of ChatGPT",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        <script async src="https://www.kiask.xyz/ad-anchor.js" />
        <script async src="https://www.kiask.xyz/ad-inst.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
