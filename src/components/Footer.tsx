import { Droplet, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Droplet size={32} className="text-primary-500" />
              <span className="text-xl font-bold">
                Hydro<span className="text-primary-500">Power</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Solução digital para o reúso inteligente da água em sistemas sustentáveis, promovendo eficiência e conscientização ambiental.
            </p>
            <div className="flex space-x-4">
              <a 
                href="" 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jo%C3%A3o-soares-17b304207/" 
                className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Sobre o Projeto
                </Link>
              </li>
              <li>
                <Link 
                  to="/objetivos" 
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Objetivos
                </Link>
              </li>
              <li>
                <Link 
                  to="/resultados" 
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Resultados Esperados
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Sorocaba, SP - Brasil</p>
              <p className="mb-2">236019@facens.br</p>
              <p>(11) 95211-0804</p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} Hydro Power - LifeInvader. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;