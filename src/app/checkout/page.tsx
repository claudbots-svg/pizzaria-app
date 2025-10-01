export default function Checkout() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">💳 Finalizar Pedido</h1>
      <form className="flex flex-col gap-4 max-w-md">
        <input className="border p-2 rounded" placeholder="Nome completo" />
        <input className="border p-2 rounded" placeholder="Endereço" />
        <input className="border p-2 rounded" placeholder="Telefone" />
        <select className="border p-2 rounded">
          <option>Pix</option>
          <option>Cartão</option>
          <option>Dinheiro</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
}
