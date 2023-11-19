import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intercepting Routes",
  description: "App showing intercepting routes like LogRocket",
};

export default function RootLayout({ children, drawer }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <p className="fixed left-0 top-0 flex w-full px-10 border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
            Intercepting routes
          </p>
        </div>
        {children}
        {drawer}
      </body>
    </html>
  );
}
