import { useNavigate } from 'react-router-dom';
import { systemData } from '../data/sustainableData';

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

      <h1 className="heading-lg mb-6 text-center">Monitoramento do Sistema</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Dados em tempo real do sistema integrado de reúso de água e geração de energia renovável.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Água Recuperada</h2>
          <p className="text-2xl font-bold text-primary-600">{systemData.water.currentUsage.toLocaleString()} L/dia</p>
          <p className="text-sm text-gray-500">Volume médio de água tratada e reutilizada</p>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-green-500 rounded-full" style={{width: `${systemData.water.efficiency}%`}}></div>
          </div>
          <p className="text-xs mt-1 text-gray-500">{systemData.water.efficiency}% da capacidade total</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Energia Solar Gerada</h2>
          <p className="text-2xl font-bold text-primary-600">{systemData.energy.solar.generation} kWh/dia</p>
          <p className="text-sm text-gray-500">Suficiente para {Math.round(systemData.energy.solar.generation / 8)} residências médias</p>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-yellow-400 rounded-full" style={{width: `${systemData.energy.solar.capacity}%`}}></div>
          </div>
          <p className="text-xs mt-1 text-gray-500">{systemData.energy.solar.capacity}% da capacidade instalada</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Energia Eólica Gerada</h2>
          <p className="text-2xl font-bold text-primary-600">{systemData.energy.wind.generation} kWh/dia</p>
          <p className="text-sm text-gray-500">Complementando o sistema solar</p>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-400 rounded-full" style={{width: `${systemData.energy.wind.capacity}%`}}></div>
          </div>
          <p className="text-xs mt-1 text-gray-500">{systemData.energy.wind.capacity}% da capacidade instalada</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Redução de Desperdício</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Água potável economizada:</span>
              <span className="font-semibold">~{Math.round((systemData.water.saved / 15000) * 100)}%</span>
            </li>
            <li className="flex justify-between">
              <span>Redução de custos:</span>
              <span className="font-semibold">R$ {systemData.financial.monthlySavings.toLocaleString()}/mês</span>
            </li>
            <li className="flex justify-between">
              <span>CO₂ evitado:</span>
              <span className="font-semibold">{Math.round(systemData.energy.solar.generation * 0.12 + systemData.energy.wind.generation * 0.08)} kg/mês</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Qualidade da Água</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>pH da água tratada:</span>
              <span className="font-semibold">{systemData.water.quality.pH} (ideal)</span>
            </li>
            <li className="flex justify-between">
              <span>Turvação (NTU):</span>
              <span className="font-semibold">{systemData.water.quality.turbidity}</span>
            </li>
            <li className="flex justify-between">
              <span>Eficiência do tratamento:</span>
              <span className="font-semibold">{systemData.water.efficiency}%</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance do Sistema Integrado</h2>
        <p className="mb-4">O sistema atualmente opera com <span className="font-semibold">{Math.round((systemData.water.efficiency + systemData.energy.solar.capacity + systemData.energy.wind.capacity) / 3)}% de eficiência geral</span>, combinando:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Coleta e tratamento de águas cinzas</li>
          <li>Resfriamento de painéis solares com água reutilizada</li>
          <li>Geração combinada solar-eólica</li>
        </ul>
        <p>O retorno sobre o investimento (ROI) estimado é de <span className="font-semibold">4.2 anos</span>.</p>
      </div>

      <img 
        src="https://iili.io/3ZIw8a1.md.png" 
        alt="Gráfico de desempenho do sistema" 
        className="w-full max-w-4xl mx-auto rounded-lg shadow" 
      />
    </section>
  );
};

export default VisualizacaoPage;