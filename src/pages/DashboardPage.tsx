import { useState } from 'react';
import { Droplets, Zap, Leaf, TrendingUp, Filter, Calendar } from 'lucide-react';
import MetricCard from '../components/dashboard/MetricCard';
import WaterUsageChart from '../components/charts/WaterUsageChart';
import EnergyChart from '../components/charts/EnergyChart';
import SustainabilityProgress from '../components/charts/SustainabilityProgress';

// Mock data for different periods and regions
const mockData = {
  '1m': {
    all: { water: 3800, energy: 95, co2: 2.1, savings: 2890 },
    sp: { water: 4200, energy: 103, co2: 2.8, savings: 3240 },
    rj: { water: 3200, energy: 87, co2: 2.3, savings: 2650 },
    mg: { water: 3600, energy: 92, co2: 2.5, savings: 2980 }
  },
  '3m': {
    all: { water: 4100, energy: 98, co2: 2.4, savings: 3100 },
    sp: { water: 4500, energy: 106, co2: 3.1, savings: 3450 },
    rj: { water: 3500, energy: 90, co2: 2.6, savings: 2850 },
    mg: { water: 3900, energy: 95, co2: 2.8, savings: 3200 }
  },
  '6m': {
    all: { water: 4200, energy: 103, co2: 2.8, savings: 3240 },
    sp: { water: 4600, energy: 112, co2: 3.4, savings: 3680 },
    rj: { water: 3700, energy: 94, co2: 2.9, savings: 3050 },
    mg: { water: 4100, energy: 103, co2: 3.1, savings: 3400 }
  },
  '1y': {
    all: { water: 4500, energy: 108, co2: 3.2, savings: 3580 },
    sp: { water: 4900, energy: 118, co2: 3.8, savings: 4020 },
    rj: { water: 4000, energy: 98, co2: 3.1, savings: 3350 },
    mg: { water: 4400, energy: 108, co2: 3.4, savings: 3750 }
  }
};

const DashboardPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6m');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Get current data based on selected filters
  const currentData = mockData[selectedPeriod][selectedRegion];

  // Calculate trends based on previous period
  const getTrend = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      direction: change > 0 ? 'up' : change < 0 ? 'down' : 'stable',
      value: Math.abs(Math.round(change))
    };
  };

  // Get previous period data for trend calculation
  const getPreviousPeriodKey = (period: string) => {
    switch(period) {
      case '1y': return '6m';
      case '6m': return '3m';
      case '3m': return '1m';
      case '1m': return '1m'; // Same period for 1m
      default: return '1m';
    }
  };

  const previousData = mockData[getPreviousPeriodKey(selectedPeriod)][selectedRegion];
  
  const waterTrend = getTrend(currentData.water, previousData.water);
  const energyTrend = getTrend(currentData.energy, previousData.energy);
  const co2Trend = getTrend(currentData.co2, previousData.co2);
  const savingsTrend = getTrend(currentData.savings, previousData.savings);

  const getRegionName = (region: string) => {
    switch(region) {
      case 'sp': return 'São Paulo';
      case 'rj': return 'Rio de Janeiro';
      case 'mg': return 'Minas Gerais';
      default: return 'Todas as regiões';
    }
  };

  const getPeriodName = (period: string) => {
    switch(period) {
      case '1m': return 'último mês';
      case '3m': return 'últimos 3 meses';
      case '6m': return 'últimos 6 meses';
      case '1y': return 'último ano';
      default: return 'período selecionado';
    }
  };

  return (
    <section className="pt-32 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8">
          <h1 className="heading-lg mb-4">Dashboard de Sustentabilidade</h1>
          <p className="text-lg text-gray-600 mb-6">
            Monitoramento em tempo real dos indicadores de sustentabilidade e eficiência energética
            {selectedRegion !== 'all' && ` - ${getRegionName(selectedRegion)}`}
            {` (${getPeriodName(selectedPeriod)})`}
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
            value={currentData.water}
            unit="L/dia"
            icon={Droplets}
            trend={waterTrend.direction}
            trendValue={`${waterTrend.direction === 'up' ? '+' : waterTrend.direction === 'down' ? '-' : ''}${waterTrend.value}% vs período anterior`}
            color="text-blue-600"
          />
          
          <MetricCard
            title="Energia Renovável"
            value={currentData.energy}
            unit="kWh/dia"
            icon={Zap}
            trend={energyTrend.direction}
            trendValue={`${energyTrend.direction === 'up' ? '+' : energyTrend.direction === 'down' ? '-' : ''}${energyTrend.value}% vs período anterior`}
            color="text-yellow-600"
          />
          
          <MetricCard
            title="CO₂ Evitado"
            value={currentData.co2}
            unit="ton/mês"
            icon={Leaf}
            trend={co2Trend.direction}
            trendValue={`${co2Trend.direction === 'up' ? '+' : co2Trend.direction === 'down' ? '-' : ''}${co2Trend.value}% vs período anterior`}
            color="text-green-600"
          />
          
          <MetricCard
            title="Economia Total"
            value={`R$ ${currentData.savings.toLocaleString()}`}
            unit="/mês"
            icon={TrendingUp}
            trend={savingsTrend.direction}
            trendValue={`${savingsTrend.direction === 'up' ? '+' : savingsTrend.direction === 'down' ? '-' : ''}${savingsTrend.value}% vs período anterior`}
            color="text-purple-600"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <WaterUsageChart period={selectedPeriod} region={selectedRegion} />
          <EnergyChart period={selectedPeriod} region={selectedRegion} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SustainabilityProgress period={selectedPeriod} region={selectedRegion} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Alertas e Notificações</h3>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                <p className="text-sm font-medium text-green-800">Sistema funcionando normalmente</p>
                <p className="text-xs text-green-600">Todos os sensores operacionais em {getRegionName(selectedRegion)}</p>
              </div>
              
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm font-medium text-yellow-800">Manutenção programada</p>
                <p className="text-xs text-yellow-600">Sistema solar - 15/11 às 14h</p>
              </div>
              
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="text-sm font-medium text-blue-800">Meta atingida</p>
                <p className="text-xs text-blue-600">Economia de água - {Math.round((currentData.water / 4000) * 100)}% da meta para {getPeriodName(selectedPeriod)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;