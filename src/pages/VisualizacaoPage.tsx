import { useNavigate } from 'react-router-dom';

const VisualizacaoPage = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 container-custom">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
      >
        ← Voltar
      </button>

      <h1 className="heading-lg mb-6 text-center">Visualização de Dados</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Aqui mostramos uma simulação de como os dados podem ser visualizados no sistema.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Consumo de Água</h2>
          <p>Economia simulada: 1.200 litros nos últimos 30 dias.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Eficiência Energética</h2>
          <p>Eficiência média do sistema: 92%.</p>
        </div>
      </div>

      {/* Imagem do gráfico */}
      <img 
        src="https://i.postimg.cc/Rhz97gm0/grafico-linhas.png" 
        alt="Gráfico de consumo de água" 
        className="w-full max-w-xl mx-auto rounded-lg shadow mb-8" 
      />
    </section>
  );
};

export default VisualizacaoPage;
