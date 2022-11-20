"use client";
import React from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import {Inter} from "@next/font/google";
const inter = Inter();

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [mode = "light", setMode] = React.useState<"light" | "dark">("light");
  return (
    <html className={`${mode} [color-scheme:${mode}]`}>
      <head>
        <title>Blog</title>
      </head>
      <body
        className={`duration-500 ease-linear [transition:background-color_3s] ${inter.className}`}
      >
        <div className="bg-[rgb(245,245,245)] dark:bg-[#0E141B] dark:text-white min-h-screen h-full break-words">
          <Header mode={[mode, setMode]} />
          <main className="container mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
