import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import SDGCard from '../components/dashboard/SDGCard';

const sustainableGoals = [
  {
    number: 6,
    title: "Água Potável e Saneamento",
    description: "Assegurar a disponibilidade e gestão sustentável da água e saneamento para todos",
    progress: 78,
    color: "bg-blue-500",
    icon: "💧",
    actions: [
      "Sistema de reúso de água implementado",
      "Monitoramento da qualidade da água",
      "Redução de 30% no consumo de água potável"
    ]
  },
  {
    number: 7,
    title: "Energia Limpa e Acessível",
    description: "Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia",
    progress: 85,
    color: "bg-yellow-500",
    icon: "⚡",
    actions: [
      "100% energia renovável (solar + eólica)",
      "Sistema de armazenamento implementado",
      "Excedente vendido para a rede elétrica"
    ]
  },
  {
    number: 9,
    title: "Indústria, Inovação e Infraestrutura",
    description: "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável",
    progress: 72,
    color: "bg-orange-500",
    icon: "🏭",
    actions: [
      "Plataforma digital desenvolvida",
      "Integração com APIs governamentais",
      "Sistema IoT para monitoramento"
    ]
  },
  {
    number: 11,
    title: "Cidades e Comunidades Sustentáveis",
    description: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis",
    progress: 65,
    color: "bg-green-500",
    icon: "🏙️",
    actions: [
      "Modelo replicável para outras cidades",
      "Educação ambiental implementada",
      "Parcerias com governo local"
    ]
  },
  {
    number: 12,
    title: "Consumo e Produção Responsáveis",
    description: "Assegurar padrões de produção e de consumo sustentáveis",
    progress: 80,
    color: "bg-purple-500",
    icon: "♻️",
    actions: [
      "Economia circular implementada",
      "Zero desperdício de recursos",
      "Reutilização de 95% dos materiais"
    ]
  },
  {
    number: 13,
    title: "Ação Contra a Mudança Global do Clima",
    description: "Tomar medidas urgentes para combater a mudança climática e seus impactos",
    progress: 88,
    color: "bg-red-500",
    icon: "🌍",
    actions: [
      "Neutralidade de carbono atingida",
      "Redução de 2.8 ton CO₂/mês",
      "Compensação através de energia limpa"
    ]
  }
];

const SustainableGoalsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredGoals = sustainableGoals.filter(goal => {
    const matchesSearch = goal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         goal.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'high' && goal.progress >= 80) ||
                         (selectedFilter === 'medium' && goal.progress >= 60 && goal.progress < 80) ||
                         (selectedFilter === 'low' && goal.progress < 60);
    
    return matchesSearch && matchesFilter;
  });

  const averageProgress = Math.round(sustainableGoals.reduce((acc, goal) => acc + goal.progress, 0) / sustainableGoals.length);

  return (
    <section className="pt-32 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">Objetivos de Desenvolvimento Sustentável</h1>
          <p className="text-lg text-gray-600 mb-8">
            Acompanhe nosso progresso em direção aos ODS da ONU através do projeto HydroPower
          </p>
          
          {/* Progress Overview */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4">Progresso Geral</h3>
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-300"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-primary-600"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={`${averageProgress}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-600">{averageProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar objetivos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-500" />
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">Todos os objetivos</option>
              <option value="high">Alto progresso (80%+)</option>
              <option value="medium">Médio progresso (60-79%)</option>
              <option value="low">Baixo progresso (&lt;60%)</option>
            </select>
          </div>
        </div>

        {/* SDG Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGoals.map((goal) => (
            <SDGCard key={goal.number} {...goal} />
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Impacto do Projeto HydroPower</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.200L</div>
              <div className="text-sm opacity-90">Água reutilizada por dia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">103kWh</div>
              <div className="text-sm opacity-90">Energia renovável por dia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2.8 ton</div>
              <div className="text-sm opacity-90">CO₂ evitado por mês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableGoalsPage;