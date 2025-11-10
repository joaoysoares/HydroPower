import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Hero Section com imagem de fundo atrás do texto */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-600 to-secondary-700 text-white overflow-hidden"
      >
        {/* Imagem de fundo com opacidade */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://i.postimg.cc/7ZFrSBwT/Chat-GPT-Image-May-15-2025-10-46-17-PM.png')" }}
        ></div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hydro Power
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10">
            Solução digital para o reúso inteligente da água em sistemas sustentáveis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sobre" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Conheça o Projeto
            </Link>
            <Link to="/objetivos" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              Nossos Objetivos
            </Link>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Explore Nossa Solução</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça mais sobre nossa plataforma inovadora para o monitoramento e reúso da água em sistemas sustentáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card p-6 flex flex-col h-full bg-white rounded-xl shadow">
              <h3 className="heading-md mb-4">Dashboard Interativo</h3>
              <p className="text-gray-800 mb-6 flex-grow">
                Visualize dados em tempo real sobre consumo de água, geração de energia e indicadores de sustentabilidade.
              </p>
              <Link
                to="/dashboard"
                className="group flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Saiba mais
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="card p-6 flex flex-col h-full bg-white rounded-xl shadow">
              <h3 className="heading-md mb-4">Metas Sustentáveis</h3>
              <p className="text-gray-800 mb-6 flex-grow">
                Acompanhe nosso progresso em direção aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
              </p>
              <Link
                to="/metas-sustentaveis"
                className="group flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Saiba mais
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="card p-6 flex flex-col h-full bg-white rounded-xl shadow">
              <h3 className="heading-md mb-4">Integrações com APIs</h3>
              <p className="text-gray-800 mb-6 flex-grow">
                Conecte-se com fontes de dados externas para monitoramento climático, energético e de recursos hídricos.
              </p>
              <Link
                to="/integracoes"
                className="group flex items-center text-primary-600 font-medium hover:text-primary-700"
              >
                Saiba mais
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="heading-lg mb-4">Pronto para fazer parte da revolução sustentável?</h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Junte-se a nós nessa jornada de inovação e sustentabilidade para o reúso inteligente da água.
            </p>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-soares-17b304207/"
              className="btn bg-white text-primary-700 hover:bg-gray-100"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
