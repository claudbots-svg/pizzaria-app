export default function Admin() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Painel Administrativo</h1>
      <ul className="flex flex-col gap-3">
        <li><a href="/admin/produtos" className="text-blue-600">Gerenciar Produtos</a></li>
        <li><a href="/admin/pedidos" className="text-blue-600">Gerenciar Pedidos</a></li>
      </ul>
    </div>
  );
}
