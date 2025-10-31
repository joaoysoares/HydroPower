import { BarChart3, Target, CloudLightning } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const ObjectivesPage = () => {
  return (
    <>
      {/* Header com imagem de fundo e overlay escura */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 relative text-white overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.postimg.cc/vT3VCg35/Chat-GPT-Image-16-de-mai-de-2025-01-09-06.png"
            alt="Banner objetivos"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Overlay escura */}
          <div className="absolute inset-0 bg-cover opacity-50"></div>
        </div>

        {/* Conteúdo sobreposto */}
        <div className="container-custom relative z-10 text-center">
          <PageHeader 
            title="Nossos Objetivos"
            subtitle="Conheça as metas que guiam nosso projeto para um futuro mais sustentável"
          />
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          {/* Objetivo Geral */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-7/12">
                <h2 className="heading-lg mb-6">Objetivo Geral</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Desenvolver uma plataforma digital intuitiva e eficiente para o monitoramento e otimização do reúso de água em sistemas de energia solar e eólica, promovendo a sustentabilidade ambiental e a eficiência energética.
                </p>
                <p className="text-lg text-gray-700">
                  Nossa solução conecta os recursos hídricos aos sistemas de energia renovável, criando um ecossistema integrado que maximiza o aproveitamento dos recursos naturais e minimiza o impacto ambiental.
                </p>
              </div>
              <div className="w-full md:w-5/12">
                <img
                  src="https://i.postimg.cc/02h7dxS2/sistema-solar-h-brido-750x480.jpg"
                  alt="Painéis solares e sistema hídrico"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Objetivos Específicos */}
          <h2 className="heading-lg mb-12 text-center">Objetivos Específicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link to="/objetivos/visualizacao">
              <Card 
                title="Visualização de Dados"
                description="Dashboards intuitivos para monitorar consumo de água, eficiência energética e impacto ambiental."
                icon={BarChart3}
              />
            </Link>

            <Link to="/objetivos/metas">
              <Card 
                title="Metas Sustentáveis"
                description="Funcionalidades para definir e acompanhar metas de sustentabilidade."
                icon={Target}
                color="text-secondary-500"
              />
            </Link>

            <Link to="/objetivos/apis">
              <Card 
                title="Integração com APIs"
                description="Conexões com dados ambientais externos para decisões mais inteligentes."
                icon={CloudLightning}
                color="text-primary-500"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ObjectivesPage;
