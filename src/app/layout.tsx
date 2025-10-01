import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Pizzaria Delivery",
  description: "Peça sua pizza online",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-red-600 text-white p-4 flex justify-between">
          <a href="/" className="font-bold text-xl">🍕 Pizzaria</a>
          <nav className="flex gap-4">
            <a href="/menu">Cardápio</a>
            <a href="/carrinho">Carrinho</a>
            <a href="/admin">Admin</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          © {new Date().getFullYear()} Pizzaria Delivery
        </footer>
      </body>
    </html>
  );
}
