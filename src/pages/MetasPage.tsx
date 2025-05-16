import { useNavigate } from 'react-router-dom';

const MetasPage = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 container-custom">
      {/* Botão de voltar */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
      >
        ← Voltar
      </button>

      <h1 className="heading-lg mb-6 text-center">Metas Sustentáveis</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Acompanhe metas ambientais definidas na plataforma.
      </p>

      {/* Lista de metas */}
      <ul className="space-y-6">
        <li className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
          <span className="text-gray-800 font-medium">Reduzir consumo em 20%</span>
          <span className="text-yellow-500 font-semibold">Em andamento</span>
        </li>
        <li className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
          <span className="text-gray-800 font-medium">Aumentar eficiência em 15%</span>
          <span className="text-green-500 font-semibold">Concluído</span>
        </li>
        <li className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
          <span className="text-gray-800 font-medium">Zerar desperdício hídrico em 6 meses</span>
          <span className="text-gray-400 font-semibold">Planejado</span>
        </li>
      </ul>

      {/* Imagem de gráfico de metas */}
      <div className="bg-white p-6 rounded-lg shadow mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4">Progresso das Metas</h3>
        <img 
          src="https://i.postimg.cc/LXP2grr7/grafico-progresso.png" 
          alt="Gráfico de progresso de metas" 
          className="w-full max-w-2xl mx-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default MetasPage;
