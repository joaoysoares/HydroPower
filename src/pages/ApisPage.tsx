import { useNavigate } from 'react-router-dom';

const ApisPage = () => {
  const navigate = useNavigate();

  // Dados das APIs integradas (pode vir de uma configuração backend no futuro)
  const apisIntegradas = [
    {
      id: 1,
      nome: "INMET",
      fonte: "Instituto Nacional de Meteorologia",
      tipoDado: "Dados meteorológicos",
      status: "ativo",
      atualizacao: "15 minutos",
      utilizacao: "Previsão de geração eólica, planejamento hídrico",
      metasRelacionadas: [1, 3] // IDs das metas relacionadas
    },
    {
      id: 2,
      nome: "ANA",
      fonte: "Agência Nacional de Águas",
      tipoDado: "Qualidade da água",
      status: "ativo",
      atualizacao: "1 hora",
      utilizacao: "Monitoramento da água reutilizada",
      metasRelacionadas: [1, 2]
    },
    {
      id: 3,
      nome: "ONS",
      fonte: "Operador Nacional do Sistema Elétrico",
      tipoDado: "Dados de geração energética",
      status: "ativo",
      atualizacao: "30 minutos",
      utilizacao: "Otimização da geração solar-eólica",
      metasRelacionadas: [3, 4]
    },
    {
      id: 4,
      nome: "Sistema de Monitoramento Local",
      fonte: "Sensores IoT do projeto",
      tipoDado: "Dados em tempo real",
      status: "ativo",
      atualizacao: "5 segundos",
      utilizacao: "Todos os cálculos de metas",
      metasRelacionadas: [1, 2, 3, 4]
    }
  ];

  // Navega para a página de metas com filtro
  const verMetasRelacionadas = (metaIds) => {
    navigate('/metas', { state: { filterIds: metaIds } });
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
        Fontes de dados externas que alimentam nossa plataforma e metas sustentáveis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {apisIntegradas.map((api) => (
          <div key={api.id} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{api.nome}</h3>
              {getStatusBadge(api.status)}
            </div>
            
            <p className="text-gray-600 mb-1"><span className="font-medium">Fonte:</span> {api.fonte}</p>
            <p className="text-gray-600 mb-1"><span className="font-medium">Tipo de dado:</span> {api.tipoDado}</p>
            <p className="text-gray-600 mb-3"><span className="font-medium">Atualização:</span> {api.atualizacao}</p>
            
            <p className="text-sm text-gray-700 mb-4">{api.utilizacao}</p>
            
            <div className="flex justify-between items-center">
              <button 
                onClick={() => verMetasRelacionadas(api.metasRelacionadas)}
                className="text-sm text-primary-600 hover:text-primary-800 font-medium"
              >
                Ver metas relacionadas →
              </button>
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                {api.metasRelacionadas.length} {api.metasRelacionadas.length > 1 ? 'metas' : 'meta'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Como as APIs alimentam nossas metas?</h3>
        <img 
          src="https://i.postimg.cc/8z1kQd0J/water-energy-dashboard.png" 
          alt="Fluxo de dados das APIs para metas" 
          className="w-full rounded-lg mb-4"
        />
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Dados meteorológicos (INMET) ajudam a prever a geração eólica e planejar o uso hídrico</li>
          <li>Qualidade da água (ANA) garante que nosso sistema de reúso opera dentro dos parâmetros</li>
          <li>Dados energéticos (ONS) permitem otimizar nossa geração renovável</li>
          <li>Sensores locais fornecem dados em tempo real para cálculo preciso das metas</li>
        </ul>
      </div>
    </section>
  );
};

export default ApisPage;