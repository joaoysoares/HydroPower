import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Droplet, Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const navLinkClass = (isScrolled: boolean, isActive: boolean) => {
  if (isScrolled) {
    // Fundo branco - texto preto, ativo em primário
    return isActive
      ? 'relative text-primary-600 font-medium transition-colors duration-300'
      : 'relative text-black hover:text-primary-600 transition-colors duration-300';
  } else {
    // Fundo transparente - texto preto, ativo em primário claro
    return isActive
      ? 'relative text-primary-300 font-medium transition-colors duration-300'
      : 'relative text-black hover:text-primary-300 transition-colors duration-300';
  }
};

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Droplet 
              size={32} 
              className={isScrolled ? "text-primary-600 animate-pulse-slow" : "text-primary-600 animate-pulse-slow"} 
              strokeWidth={1.5} 
            />
            <span className="text-xl font-bold text-black">
              HydroPower
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => navLinkClass(isScrolled, isActive)}
            >
              Início
            </NavLink>
            <NavLink 
              to="/sobre" 
              className={({ isActive }) => navLinkClass(isScrolled, isActive)}
            >
              Sobre o Projeto
            </NavLink>
            <NavLink 
              to="/objetivos" 
              className={({ isActive }) => navLinkClass(isScrolled, isActive)}
            >
              Objetivos
            </NavLink>
            <NavLink 
              to="/resultados" 
              className={({ isActive }) => navLinkClass(isScrolled, isActive)}
            >
              Resultados Esperados
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className={isScrolled 
              ? "md:hidden rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 text-primary-600" 
              : "md:hidden rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-300 text-black"
            }
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col md:hidden transform transition-transform duration-300 ease-in-out pt-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container-custom flex flex-col items-center space-y-6 py-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => navLinkClass(true, isActive)}
            onClick={closeMenu}
          >
            Início
          </NavLink>
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => navLinkClass(true, isActive)}
            onClick={closeMenu}
          >
            Sobre o Projeto
          </NavLink>
          <NavLink 
            to="/objetivos" 
            className={({ isActive }) => navLinkClass(true, isActive)}
            onClick={closeMenu}
          >
            Objetivos
          </NavLink>
          <NavLink 
            to="/resultados" 
            className={({ isActive }) => navLinkClass(true, isActive)}
            onClick={closeMenu}
          >
            Resultados Esperados
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
