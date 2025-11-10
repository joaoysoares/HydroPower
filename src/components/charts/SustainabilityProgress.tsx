import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Mock data for different periods and regions
const generateData = (period: string, region: string) => {
  const baseData = {
    '1m': [
      { name: 'Água Reutilizada', value: 65, color: '#10b981' },
      { name: 'Energia Renovável', value: 58, color: '#3b82f6' },
      { name: 'Redução CO₂', value: 72, color: '#8b5cf6' },
      { name: 'Eficiência Energética', value: 61, color: '#f59e0b' },
    ],
    '3m': [
      { name: 'Água Reutilizada', value: 70, color: '#10b981' },
      { name: 'Energia Renovável', value: 63, color: '#3b82f6' },
      { name: 'Redução CO₂', value: 77, color: '#8b5cf6' },
      { name: 'Eficiência Energética', value: 66, color: '#f59e0b' },
    ],
    '6m': [
      { name: 'Água Reutilizada', value: 75, color: '#10b981' },
      { name: 'Energia Renovável', value: 68, color: '#3b82f6' },
      { name: 'Redução CO₂', value: 82, color: '#8b5cf6' },
      { name: 'Eficiência Energética', value: 71, color: '#f59e0b' },
    ],
    '1y': [
      { name: 'Água Reutilizada', value: 85, color: '#10b981' },
      { name: 'Energia Renovável', value: 78, color: '#3b82f6' },
      { name: 'Redução CO₂', value: 88, color: '#8b5cf6' },
      { name: 'Eficiência Energética', value: 81, color: '#f59e0b' },
    ]
  };

  // Apply regional variations
  const regionalVariations = {
    all: 0,
    sp: 5,   // São Paulo performs better
    rj: -3,  // Rio has some challenges
    mg: 2    // Minas is slightly above average
  };

  const variation = regionalVariations[region] || 0;
  
  return baseData[period].map(item => ({
    ...item,
    value: Math.max(0, Math.min(100, item.value + variation))
  }));
};

interface SustainabilityProgressProps {
  period: string;
  region: string;
}

const SustainabilityProgress = ({ period, region }: SustainabilityProgressProps) => {
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
        Progresso Sustentável (%){getRegionName(region)}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Progresso']} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SustainabilityProgress;