import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ObjectivesPage from './pages/ObjectivesPage';
import ResultsPage from './pages/ResultsPage';
import VisualizacaoPage from './pages/VisualizacaoPage';
import MetasPage from './pages/MetasPage';
import ApisPage from './pages/ApisPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="objetivos" element={<ObjectivesPage />} />
        <Route path="resultados" element={<ResultsPage />} />
        <Route path="objetivos/visualizacao" element={<VisualizacaoPage />} />
        <Route path="objetivos/metas" element={<MetasPage />} />
        <Route path="objetivos/apis" element={<ApisPage />} />
      </Route>
    </Routes>
  );
}

export default App;