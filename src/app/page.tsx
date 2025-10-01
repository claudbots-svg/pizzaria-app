"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: "40px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🍕 Pizzaria App</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Bem-vindo(a) à melhor pizzaria online! <br />
        Clique abaixo para ver nosso cardápio.
      </p>

      <Link
        href="/menu"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#e63946",
          color: "white",
          borderRadius: "6px",
          fontSize: "1.1rem",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Ver Cardápio 🍴
      </Link>
    </main>
  );
}
