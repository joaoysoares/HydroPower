import { useNavigate } from 'react-router-dom';

const MetasPage = () => {
const navigate = useNavigate();

  // Dados das metas (pode vir de uma API no futuro)
  const metas = [
    {
      id: 1,
      titulo: "Reduzir consumo de água potável em 30%",
      descricao: "Meta baseada na capacidade máxima do sistema de reúso",
      progresso: 65,
      status: "andamento",
      prazo: "Dez/2024",
      economiaEstimada: "12.000 L/mês"
    },
    {
      id: 2,
      titulo: "Atingir 90% de eficiência no tratamento de água",
      descricao: "Melhoria contínua do sistema de filtragem",
      progresso: 92,
      status: "concluido",
      prazo: "Ago/2024",
      impacto: "Água própria para resfriamento de equipamentos"
    },
    {
      id: 3,
      titulo: "Compensar 100% da energia utilizada",
      descricao: "Através da geração solar+eólica integrada",
      progresso: 78,
      status: "andamento",
      prazo: "Mar/2025",
      geracaoAtual: "85 kWh/dia"
    },
    {
      id: 4,
      titulo: "Reduzir custos operacionais em 25%",
      descricao: "Otimização do sistema integrado",
      progresso: 35,
      status: "andamento",
      prazo: "Jun/2025",
      economiaAtual: "R$ 1.850/mês"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'concluido': return 'bg-green-100 text-green-800';
      case 'andamento': return 'bg-blue-100 text-blue-800';
      case 'planejado': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'concluido': return 'Concluído';
      case 'andamento': return 'Em andamento';
      case 'planejado': return 'Planejado';
      default: return 'Pendente';
    }
  };

  return (
    <section className="pt-32 pb-16 container-custom">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
      >
        ← Voltar
      </button>

      <h1 className="heading-lg mb-6 text-center">Metas Sustentáveis</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Objetivos mensuráveis para otimização do sistema integrado de reúso hídrico e energia renovável.
      </p>

      {/* Lista de metas aprimorada */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {metas.map((meta) => (
          <div key={meta.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-500">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{meta.titulo}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(meta.status)}`}>
                {getStatusText(meta.status)}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{meta.descricao}</p>
            
            <div className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progresso: {meta.progresso}%</span>
                <span>Prazo: {meta.prazo}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    meta.status === 'concluido' ? 'bg-green-500' : 
                    meta.status === 'andamento' ? 'bg-blue-500' : 'bg-gray-300'
                  }`} 
                  style={{width: `${meta.progresso}%`}}
                ></div>
              </div>
            </div>
            
            <div className="text-sm">
              {meta.economiaEstimada && (
                <p className="text-gray-700"><span className="font-medium">Economia estimada:</span> {meta.economiaEstimada}</p>
              )}
              {meta.geracaoAtual && (
                <p className="text-gray-700"><span className="font-medium">Geração atual:</span> {meta.geracaoAtual}</p>
              )}
              {meta.economiaAtual && (
                <p className="text-gray-700"><span className="font-medium">Redução de custos:</span> {meta.economiaAtual}</p>
              )}
              {meta.impacto && (
                <p className="text-gray-700"><span className="font-medium">Impacto:</span> {meta.impacto}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico de progresso das metas */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-6 text-center">Progresso Geral das Metas</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src="https://i.postimg.cc/3N8b5z0Y/water-energy-goals-chart.png" 
              alt="Gráfico de progresso de metas sustentáveis" 
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-6">
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Metas concluídas</p>
                  <p className="text-sm text-gray-600">2 de 4 metas principais</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Em andamento</p>
                  <p className="text-sm text-gray-600">70% de progresso médio</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Impacto acumulado</p>
                  <p className="text-sm text-gray-600">18.500 litros reutilizados</p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Economia financeira</p>
                  <p className="text-sm text-gray-600">R$ 8.240 desde o início</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção de próximos passos */}
      <div className="mt-12 bg-primary-50 p-6 rounded-lg border border-primary-100">
        <h3 className="text-lg font-semibold text-primary-800 mb-3">Próximas Etapas</h3>
        <ul className="list-disc pl-5 space-y-2 text-primary-700">
          <li>Implementar sistema de monitoramento em tempo real</li>
          <li>Expandir capacidade de armazenamento de água tratada</li>
          <li>Integrar mais 2 turbinas eólicas ao sistema</li>
          <li>Otimizar horários de operação com base em dados históricos</li>
        </ul>
      </div>
    </section>
  );
};

export default MetasPage;