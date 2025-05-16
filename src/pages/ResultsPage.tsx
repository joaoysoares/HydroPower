import { LineChart, BarChart, Gauge, LayoutDashboard, Database } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const ResultsPage = () => {
  return (
    <>
      {/* Header com imagem de fundo e overlay escura */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 relative text-white overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/8zCHkDv1/Chat-GPT-Image-16-de-mai-de-2025-01-06-29.png"
            alt="Banner resultados"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay escura */}
          <div className="absolute inset-0 bg-cover opacity-50"></div>
        </div>

        {/* Conteúdo sobreposto */}
        <div className="container-custom relative z-10 text-center">
          <PageHeader 
            title="Resultados Esperados"
            subtitle="Conheça os impactos positivos que buscamos alcançar com nossa plataforma de gestão sustentável de recursos hídricos"
          />
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          {/* Results Overview */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="heading-lg mb-6">Transformando a Gestão de Recursos</h2>
            <p className="text-lg text-gray-700">
              Através da implementação da plataforma Hydro Power, esperamos revolucionar a maneira como as empresas e organizações gerenciam seus recursos hídricos em sistemas de energia renovável, gerando impactos significativos em termos de sustentabilidade, eficiência e tomada de decisões baseadas em dados.
            </p>
          </div>
          
          {/* Key Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card 
              title="Interface Amigável"
              description="Uma plataforma intuitiva que simplifica o monitoramento de recursos hídricos, tornando a gestão sustentável acessível a usuários de todos os níveis técnicos."
              icon={LayoutDashboard}
            />
            
            <Card 
              title="Monitoramento Eficiente"
              description="Dashboards e visualizações que transformam dados complexos em insights acionáveis para otimização do uso da água em sistemas de energia renovável."
              icon={LineChart}
              color="text-secondary-500"
            />
            
            <Card 
              title="Redução de Desperdícios"
              description="Sistemas inteligentes de detecção e alerta que minimizam o desperdício de água, promovendo a conservação de recursos naturais."
              icon={Gauge}
              color="text-primary-500"
            />
            
            <Card 
              title="Apoio à Decisão"
              description="Ferramentas analíticas que auxiliam gestores na tomada de decisões estratégicas para maximizar a eficiência e sustentabilidade dos sistemas."
              icon={BarChart}
            />
            
            <Card 
              title="Integração em Tempo Real"
              description="Conexão com dados ambientais atualizados que enriquecem as análises e permitem ajustes proativos nos sistemas de gestão hídrica."
              icon={Database}
              color="text-secondary-500"
            />
          </div>
          
          {/* Impact Metrics */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16">
            <h2 className="heading-lg mb-8 text-center">Impacto Mensurável</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">30%</div>
                <p className="text-gray-700">Redução esperada no consumo de água em sistemas integrados</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-secondary-600 mb-2">40%</div>
                <p className="text-gray-700">Aumento na eficiência dos sistemas de energia renovável</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">60%</div>
                <p className="text-gray-700">Melhoria na qualidade das decisões baseadas em dados</p>
              </div>
            </div>
          </div>
          
          {/* Case Studies */}
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="heading-lg mb-8 text-center">Cenários de Aplicação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="heading-md mb-4">Usinas Solares</h3>
                <p className="text-gray-700 mb-4">
                  Integração da plataforma com sistemas de limpeza de painéis solares, otimizando o uso da água e aumentando a eficiência energética através de ciclos de limpeza baseados em dados ambientais e de performance.
                </p>
                <img
                  src="https://i.postimg.cc/YSrKXccT/como-funciona-uma-usina-solar.png"
                  alt="Painéis solares em usina"
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="heading-md mb-4">Parques Eólicos</h3>
                <p className="text-gray-700 mb-4">
                  Monitoramento e gestão de sistemas de reúso de água em instalações de parques eólicos, incluindo captação de água da chuva e sistemas de refrigeração com circuito fechado.
                </p>
                <img
                  src="https://i.postimg.cc/4NpxqTM3/Paque-eolico.jpg"
                  alt="Turbinas eólicas em parque"
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-700 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Faça Parte dessa Transformação</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Juntos, podemos revolucionar a gestão de recursos hídricos e criar um futuro mais sustentável para todos.
          </p>
          <a 
            href="mailto:contato@hydropower.com" 
            className="btn bg-white text-primary-700 hover:bg-gray-100"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;
