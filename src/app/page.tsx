export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-6">🍕 Bem-vindo à Pizzaria</h1>
      <p className="text-lg mb-6">As melhores pizzas da cidade!</p>
      <a
        href="/menu"
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
      >
        Ver Cardápio
      </a>
    </div>
  );
}
