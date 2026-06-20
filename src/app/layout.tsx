import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import styles from "./layout.module.css";
import { Playfair_Display, Roboto } from "next/font/google";
import {Providers} from "@/app/providers";
import HeaderComponent from "@/components/header-component/HeaderComponent";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});


const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
    title: "Portfolio | Fullstack Developer",
    description: "Portfolio of a developer specialized in Next.js, Django, Supabase",

  icons: {
    icon: [
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
     apple: "/fav/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={`${playfair.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body>
      <Providers>
          <div className={styles.wrapper}>
              <HeaderComponent/>
              <main className={styles.main}>
                  {children}
              </main>
              <footer className={styles.footer}>
                  <p>© {new Date().getFullYear()} — Built with Next.js. Deployed via Docker & Nginx on VPS.ua</p>
              </footer>
          </div>
      </Providers>
      </body>
    </html>
  );
}
