import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vai de Next",
  description: "Aprenda Next.js de forma prática e objetiva com a ajuda da IA.",
  icons: {
    icon: "/vai-de-next.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Header */}
        <header className="border-b py-5 text-center">
          <Link href="/">
            <img
              src="/vai-de-next-header.svg"
              alt="Vai de Next Logo"
              className="mx-auto"
              width={"12%"}
            />
          </Link>
        </header>

        {/* Conteúdo principal */}
        <main className="flex-1 bg-zinc-100 font-sans dark:bg-black flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-center py-5 border-t font-light">
          Desenvolvido por João Pedro Amaral Bonfim
        </footer>
      </body>
    </html>
  );
}

