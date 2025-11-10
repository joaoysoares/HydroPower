import { useState } from 'react';
import { Droplets, Zap, Leaf, TrendingUp, Filter, Calendar } from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import WaterUsageChart from '../components/charts/WaterUsageChart';
import EnergyChart from '../components/charts/EnergyChart';
import SustainabilityProgress from '../components/charts/SustainabilityProgress';

const DashboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6m');
  const [selectedRegion, setSelectedRegion] = useState('all');

  return (
    <section className="pt-32 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-lg mb-4">Dashboard de Sustentabilidade</h1>
          <p className="text-lg text-gray-600 mb-6">
            Monitoramento em tempo real dos indicadores de sustentabilidade e eficiência energética
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={20} className="text-gray-500" />
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="1m">Último mês</option>
                <option value="3m">Últimos 3 meses</option>
                <option value="6m">Últimos 6 meses</option>
                <option value="1y">Último ano</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-500" />
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">Todas as regiões</option>
                <option value="sp">São Paulo</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="mg">Minas Gerais</option>
              </select>
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Água Reutilizada"
            value={4200}
            unit="L/dia"
            icon={Droplets}
            trend="up"
            trendValue="+12% vs mês anterior"
            color="text-blue-600"
          />
          
          <MetricCard
            title="Energia Renovável"
            value={103}
            unit="kWh/dia"
            icon={Zap}
            trend="up"
            trendValue="+8% vs mês anterior"
            color="text-yellow-600"
          />
          
          <MetricCard
            title="CO₂ Evitado"
            value={2.8}
            unit="ton/mês"
            icon={Leaf}
            trend="up"
            trendValue="+15% vs mês anterior"
            color="text-green-600"
          />
          
          <MetricCard
            title="Economia Total"
            value="R$ 3.240"
            unit="/mês"
            icon={TrendingUp}
            trend="up"
            trendValue="+5% vs mês anterior"
            color="text-purple-600"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <WaterUsageChart />
          <EnergyChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SustainabilityProgress />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Alertas e Notificações</h3>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                <p className="text-sm font-medium text-green-800">Sistema funcionando normalmente</p>
                <p className="text-xs text-green-600">Todos os sensores operacionais</p>
              </div>
              
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm font-medium text-yellow-800">Manutenção programada</p>
                <p className="text-xs text-yellow-600">Sistema solar - 15/11 às 14h</p>
              </div>
              
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm font-medium text-blue-800">Meta atingida</p>
                <p className="text-xs text-blue-600">Economia de água - 105% da meta mensal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;