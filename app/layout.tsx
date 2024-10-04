import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

const JetBrainMono = JetBrains_Mono({
  subsets : ["latin"],
  weight: ["100", "200", "300","400","500","600","700","800"],
  variable : "--font-JetBrains-Mono"
});

export const metadata: Metadata = {
  title: "Dieumerci",
  description: "Fullstack Developer",
  icons : {
    icon : ['/favicon.ico?v=4'],
    apple : ['/apple-touch-icon.png?v=4'],
    shortcut : ['/apple-touch-icon.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
