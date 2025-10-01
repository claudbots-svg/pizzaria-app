"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
};

export default function Menu() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchProdutos() {
      const { data } = await supabase.from("Produtos").select("*");
      if (data) setProdutos(data);
    }
    fetchProdutos();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">🍕 Cardápio</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <div key={p.id} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold">{p.nome}</h2>
            <p className="text-gray-600">{p.descricao}</p>
            <span className="block mt-2 text-red-600 font-bold">
              R$ {p.preco.toFixed(2)}
            </span>
            <button className="mt-3 bg-green-600 text-white px-3 py-1 rounded">
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
