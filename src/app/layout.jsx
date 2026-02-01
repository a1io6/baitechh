import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "../../QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Baitech",
  description: "Baitech интернет магазин компьютерной техники и комплектующих",
  icons: {
    icon: "../../assets/svg/logo.svg",
    apple: "../../assets//svg/logo.svg",
  },
};

export default function RootLayout({ children }) { 
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        <QueryProvider>
        {children}
        </QueryProvider>
      </body>
    </html>
  );
}