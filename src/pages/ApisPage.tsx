import { useNavigate, useLocation } from 'react-router-dom';
import { systemData } from '../data/sustainableData';

const ApisPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const relatedTo = location.state?.relatedTo;

  const verMetasRelacionadas = (metaIds) => {
    navigate('/objetivos/metas', { state: { filterIds: metaIds } });
  };

  const getStatusBadge = (status) => {
    const styles = {
      ativo: "bg-green-100 text-green-800",
      inativo: "bg-red-100 text-red-800",
      manutencao: "bg-yellow-100 text-yellow-800"
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status] || 'bg-gray-100'}`}>
        {status === 'ativo' ? 'Ativo' : status === 'inativo' ? 'Inativo' : 'Manutenção'}
      </span>
    );
  };

  const getApiUsage = (apiId) => {
    switch(apiId) {
      case 1: return "Previsão de geração eólica e planejamento hídrico";
      case 2: return "Monitoramento da qualidade da água reutilizada";
      case 3: return "Otimização da geração solar-eólica integrada";
      case 4: return "Todos os cálculos em tempo real do sistema";
      default: return "Integração com a plataforma";
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

      <h1 className="heading-lg mb-6 text-center">Integração com APIs</h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Fontes de dados que alimentam nosso sistema sustentável.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {systemData.apis
          .filter(api => !relatedTo || relatedTo.some(goalId => 
            systemData.goals.find(g => g.id === goalId)?.relatedApis.includes(api.id)
          ))
          .map((api) => {
            const relatedGoals = systemData.goals.filter(goal => goal.relatedApis.includes(api.id));
            
            return (
              <div key={api.id} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{api.name}</h3>
                  {getStatusBadge(api.status)}
                </div>
                
                <p className="text-gray-600 mb-1"><span className="font-medium">Fonte:</span> {api.source}</p>
                <p className="text-gray-600 mb-1"><span className="font-medium">Tipo de dado:</span> {api.dataType}</p>
                <p className="text-gray-600 mb-3"><span className="font-medium">Atualização:</span> {api.updateFrequency}</p>
                
                <p className="text-sm text-gray-700 mb-4">{getApiUsage(api.id)}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => verMetasRelacionadas(relatedGoals.map(g => g.id))}
                    className="text-sm text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Ver {relatedGoals.length} {relatedGoals.length > 1 ? 'metas' : 'meta'} relacionada →
                  </button>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                    {relatedGoals.length} {relatedGoals.length > 1 ? 'metas' : 'meta'}
                  </span>
                </div>
              </div>
            );
          })}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Fluxo de Dados do Sistema</h3>
        <img 
          src="https://iili.io/3ZT2t9V.md.png" 
          alt="Diagrama de integração de APIs" 
          className="w-full rounded-lg mb-4"
        />
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>INMET:</strong> Previsão meteorológica para otimizar geração eólica e consumo hídrico</li>
          <li><strong>ANA:</strong> Parâmetros de qualidade para água reutilizada no sistema</li>
          <li><strong>ONS:</strong> Dados do sistema elétrico para integração energética</li>
          <li><strong>Sensores Locais:</strong> Monitoramento em tempo real de todos os processos</li>
        </ul>
      </div>
    </section>
  );
};

export default ApisPage;
