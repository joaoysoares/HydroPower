import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Água Reutilizada', value: 75, color: '#10b981' },
  { name: 'Energia Renovável', value: 68, color: '#3b82f6' },
  { name: 'Redução CO₂', value: 82, color: '#8b5cf6' },
  { name: 'Eficiência Energética', value: 71, color: '#f59e0b' },
];

const SustainabilityProgress = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Progresso Sustentável (%)</h3>
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
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SustainabilityProgress;