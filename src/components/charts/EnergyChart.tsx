import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for different periods and regions
const generateData = (period: string, region: string) => {
  const baseData = {
    '1m': [
      { month: 'Sem 1', solar: 42, eolica: 28, tradicional: 30 },
      { month: 'Sem 2', solar: 45, eolica: 30, tradicional: 25 },
      { month: 'Sem 3', solar: 48, eolica: 32, tradicional: 20 },
      { month: 'Sem 4', solar: 50, eolica: 35, tradicional: 15 },
    ],
    '3m': [
      { month: 'Jan', solar: 45, eolica: 30, tradicional: 25 },
      { month: 'Fev', solar: 52, eolica: 35, tradicional: 20 },
      { month: 'Mar', solar: 48, eolica: 40, tradicional: 18 },
    ],
    '6m': [
      { month: 'Jan', solar: 45, eolica: 30, tradicional: 25 },
      { month: 'Fev', solar: 52, eolica: 35, tradicional: 20 },
      { month: 'Mar', solar: 48, eolica: 40, tradicional: 18 },
      { month: 'Abr', solar: 55, eolica: 38, tradicional: 15 },
      { month: 'Mai', solar: 60, eolica: 42, tradicional: 12 },
      { month: 'Jun', solar: 58, eolica: 45, tradicional: 10 },
    ],
    '1y': [
      { month: 'Jan', solar: 40, eolica: 25, tradicional: 35 },
      { month: 'Mar', solar: 48, eolica: 32, tradicional: 25 },
      { month: 'Mai', solar: 55, eolica: 38, tradicional: 18 },
      { month: 'Jul', solar: 62, eolica: 42, tradicional: 12 },
      { month: 'Set', solar: 58, eolica: 45, tradicional: 8 },
      { month: 'Nov', solar: 60, eolica: 48, tradicional: 5 },
    ]
  };

  // Apply regional multipliers
  const regionalMultipliers = {
    all: 1,
    sp: 1.15, // São Paulo has more capacity
    rj: 0.85, // Rio has less wind
    mg: 1.1   // Minas has good solar potential
  };

  const multiplier = regionalMultipliers[region] || 1;
  
  return baseData[period].map(item => ({
    ...item,
    solar: Math.round(item.solar * multiplier),
    eolica: Math.round(item.eolica * multiplier),
    tradicional: Math.round(item.tradicional * multiplier)
  }));
};

interface EnergyChartProps {
  period: string;
  region: string;
}

const EnergyChart = ({ period, region }: EnergyChartProps) => {
  const data = generateData(period, region);

  const getRegionName = (region: string) => {
    switch(region) {
      case 'sp': return ' - São Paulo';
      case 'rj': return ' - Rio de Janeiro';
      case 'mg': return ' - Minas Gerais';
      default: return '';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">
        Geração de Energia (kWh/dia){getRegionName(region)}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${Number(value).toLocaleString()} kWh`,
              name === 'solar' ? 'Solar' : 
              name === 'eolica' ? 'Eólica' : 'Tradicional'
            ]}
          />
          <Legend />
          <Bar dataKey="solar" fill="#fbbf24" name="Solar" />
          <Bar dataKey="eolica" fill="#3b82f6" name="Eólica" />
          <Bar dataKey="tradicional" fill="#6b7280" name="Tradicional" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;