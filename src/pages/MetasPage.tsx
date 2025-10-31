import { useNavigate, useLocation } from 'react-router-dom';
import { systemData } from '../data/sustainableData';

const MetasPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const filterIds = location.state?.filterIds;

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {systemData.goals
          .filter(goal => !filterIds || filterIds.includes(goal.id))
          .map((goal) => (
            <div key={goal.id} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-500">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{goal.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                  {getStatusText(goal.status)}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso: {goal.progress}%</span>
                  <span>Prazo: {goal.deadline}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      goal.status === 'concluido' ? 'bg-green-500' : 
                      goal.status === 'andamento' ? 'bg-blue-500' : 'bg-gray-300'
                    }`} 
                    style={{width: `${goal.progress}%`}}
                  ></div>
                </div>
              </div>
              
              <div className="text-sm">
                {goal.id === 1 && (
                  <p className="text-gray-700">
                    <span className="font-medium">Economia atual:</span> {systemData.water.saved.toLocaleString()} L/mês
                  </p>
                )}
                {goal.id === 3 && (
                  <p className="text-gray-700">
                    <span className="font-medium">Geração atual:</span> {systemData.energy.solar.generation + systemData.energy.wind.generation} kWh/dia
                  </p>
                )}
                
                <button 
                  onClick={() => navigate('/objetivos/apis', { state: { relatedTo: goal.relatedApis } })}
                  className="mt-2 text-xs text-primary-600 hover:text-primary-800"
                >
                  Ver APIs relacionadas →
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-6 text-center">Progresso Geral das Metas</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src="https://iili.io/3ZIiodb.png" 
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
                  <p className="text-sm text-gray-600">
                    {systemData.goals.filter(g => g.status === 'concluido').length} de {systemData.goals.length} metas
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Em andamento</p>
                  <p className="text-sm text-gray-600">
                    {Math.round(systemData.goals.filter(g => g.status === 'andamento').reduce((acc, goal) => acc + goal.progress, 0) / 
                    (systemData.goals.filter(g => g.status === 'andamento').length || 1))}% de progresso médio
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Impacto acumulado</p>
                  <p className="text-sm text-gray-600">
                    {systemData.water.saved.toLocaleString()} litros reutilizados
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetasPage;
