export default function Carrinho() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">🛒 Seu Carrinho</h1>
      <p>Aqui vão aparecer os itens adicionados.</p>
      <a
        href="/checkout"
        className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded"
      >
        Finalizar Pedido
      </a>
    </div>
  );
}
