import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for different periods and regions
const generateData = (period: string, region: string) => {
  const baseData = {
    '1m': [
      { month: 'Sem 1', reutilizada: 2200, potavel: 4200, economia: 2000 },
      { month: 'Sem 2', reutilizada: 2400, potavel: 4000, economia: 1600 },
      { month: 'Sem 3', reutilizada: 2600, potavel: 3800, economia: 1200 },
      { month: 'Sem 4', reutilizada: 2800, potavel: 3600, economia: 800 },
    ],
    '3m': [
      { month: 'Jan', reutilizada: 2400, potavel: 4000, economia: 1600 },
      { month: 'Fev', reutilizada: 2800, potavel: 3800, economia: 1000 },
      { month: 'Mar', reutilizada: 3200, potavel: 3600, economia: 400 },
    ],
    '6m': [
      { month: 'Jan', reutilizada: 2400, potavel: 4000, economia: 1600 },
      { month: 'Fev', reutilizada: 2800, potavel: 3800, economia: 1000 },
      { month: 'Mar', reutilizada: 3200, potavel: 3600, economia: 400 },
      { month: 'Abr', reutilizada: 3600, potavel: 3400, economia: -200 },
      { month: 'Mai', reutilizada: 4000, potavel: 3200, economia: -800 },
      { month: 'Jun', reutilizada: 4200, potavel: 3000, economia: -1200 },
    ],
    '1y': [
      { month: 'Jan', reutilizada: 2000, potavel: 4500, economia: 2500 },
      { month: 'Mar', reutilizada: 2800, potavel: 4200, economia: 1400 },
      { month: 'Mai', reutilizada: 3500, potavel: 3800, economia: 300 },
      { month: 'Jul', reutilizada: 4000, potavel: 3500, economia: -500 },
      { month: 'Set', reutilizada: 4300, potavel: 3200, economia: -1100 },
      { month: 'Nov', reutilizada: 4500, potavel: 3000, economia: -1500 },
    ]
  };

  // Apply regional multipliers
  const regionalMultipliers = {
    all: 1,
    sp: 1.1,
    rj: 0.9,
    mg: 1.05
  };

  const multiplier = regionalMultipliers[region] || 1;
  
  return baseData[period].map(item => ({
    ...item,
    reutilizada: Math.round(item.reutilizada * multiplier),
    potavel: Math.round(item.potavel * multiplier),
    economia: Math.round(item.economia * multiplier)
  }));
};

interface WaterUsageChartProps {
  period: string;
  region: string;
}

const WaterUsageChart = ({ period, region }: WaterUsageChartProps) => {
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
        Consumo de Água (Litros/período){getRegionName(region)}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value, name) => [
              `${Number(value).toLocaleString()} L`,
              name === 'reutilizada' ? 'Água Reutilizada' : 
              name === 'potavel' ? 'Água Potável' : 'Economia'
            ]}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="reutilizada" 
            stroke="#10b981" 
            strokeWidth={3}
            name="Água Reutilizada"
          />
          <Line 
            type="monotone" 
            dataKey="potavel" 
            stroke="#3b82f6" 
            strokeWidth={3}
            name="Água Potável"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterUsageChart;