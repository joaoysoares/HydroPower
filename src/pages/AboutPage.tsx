import { Factory, Leaf, PanelTop } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';

const AboutPage = () => {
  return (
    <>
      {/* Header com banner atrás */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-16 bg-primary-50 overflow-hidden">
        {/* Imagem de fundo com opacidade */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://i.postimg.cc/655NL2Rt/Chat-GPT-Image-15-de-mai-de-2025-23-24-45.png')" }}
        ></div>

        <div className="container-custom relative z-10 text-center">
          <PageHeader 
            title="Sobre o Projeto"
            subtitle="Conheça nossa visão inovadora para a gestão sustentável de recursos hídricos através da tecnologia"
          />
        </div>
      </section>
      
      {/* Conteúdo principal */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6 text-center">Nossa Visão</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-5">
                O projeto <strong>Hydro Power</strong> nasceu da necessidade urgente de revolucionar a maneira como gerenciamos e reutilizamos nossos recursos hídricos em sistemas sustentáveis de energia.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Em um mundo cada vez mais consciente dos desafios ambientais, nossa plataforma busca criar um ecossistema digital que não apenas monitora, mas transforma o uso da água em sistemas solares e eólicos, promovendo a sustentabilidade e a eficiência.
              </p>
              <p className="text-lg text-gray-700">
                Combinamos tecnologia avançada com princípios de sustentabilidade para criar uma solução que beneficia o meio ambiente, as empresas e a sociedade como um todo, tornando o reúso da água mais inteligente, eficiente e acessível.
              </p>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="heading-lg mb-12 text-center">Nossos Destaques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card 
                title="Acessibilidade"
                description="Interface intuitiva que democratiza o acesso à gestão de recursos hídricos, permitindo que empresas de todos os portes possam implementar práticas sustentáveis."
                icon={Factory}
              />
              
              <Card 
                title="Sustentabilidade"
                description="Compromisso total com práticas ambientais responsáveis, promovendo o uso consciente da água e sua integração com sistemas de energia renovável."
                icon={Leaf}
                color="text-secondary-500"
              />
              
              <Card 
                title="Facilidade de Uso"
                description="Plataforma desenhada com o usuário em mente, oferecendo visualização de dados simplificada e ferramentas intuitivas para monitoramento e tomada de decisões."
                icon={PanelTop}
                color="text-primary-500"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-8">
                Desenvolver e disponibilizar tecnologia acessível que transforme a gestão de recursos hídricos em sistemas de energia renovável, promovendo a sustentabilidade e a eficiência em escala global.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://i.postimg.cc/QCzhwjGf/Chat-GPT-Image-May-15-2025-11-07-15-PM.png" 
                  alt="Tecnologia sustentável" 
                  className="rounded-lg shadow-lg max-w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
