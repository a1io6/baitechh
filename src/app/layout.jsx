import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "../../QueryProvider";
import I18nProvider from "@/provider/I18nProvider/I18nProvider";
import ToastProvider from "@/provider/toastProvider/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://baitech.kg"),
  title: {
    default: "Baitech",
    template: "%s | Baitech",
  },
  description:
    "Baitech — разработка сайтов, веб-приложений и IT-решений в Бишкеке.",
  keywords: ["разработка сайтов Бишкек", "создание сайта", "baitech"],
  openGraph: {
    title: "Baitech — IT решения",
    description:
      "Профессиональная разработка сайтов и веб-приложений.",
    url: "https://baitech.kg",
    siteName: "Baitech",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) { 
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        <I18nProvider>
        <QueryProvider>
          <ToastProvider/>
        {children}
        </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}