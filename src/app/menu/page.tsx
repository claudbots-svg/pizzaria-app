"use client";

import React from "react";

export default function Menu() {
  // Mock de pizzas (substituímos pelo Supabase depois)
  const pizzas = [
    { id: 1, nome: "Margherita", preco: 35.90, descricao: "Molho de tomate, mussarela e manjericão fresco 🍃" },
    { id: 2, nome: "Calabresa", preco: 42.50, descricao: "Mussarela, calabresa fatiada e cebola roxa 🧅" },
    { id: 3, nome: "Quatro Queijos", preco: 49.90, descricao: "Mussarela, gorgonzola, parmesão e provolone 🧀" },
    { id: 4, nome: "Frango com Catupiry", preco: 45.00, descricao: "Frango desfiado, catupiry e milho 🌽" },
  ];

  return (
    <main style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>🍽️ Nosso Cardápio</h1>
      <p style={{ marginBottom: "20px" }}>Escolha sua pizza favorita e faça seu pedido!</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              background: "white"
            }}
          >
            <h2 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{pizza.nome}</h2>
            <p style={{ marginBottom: "10px", color: "#555" }}>{pizza.descricao}</p>
            <strong style={{ fontSize: "1.1rem", color: "#e63946" }}>R$ {pizza.preco.toFixed(2)}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
