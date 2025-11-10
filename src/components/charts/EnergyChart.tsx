import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', solar: 45, eolica: 30, tradicional: 25 },
  { month: 'Fev', solar: 52, eolica: 35, tradicional: 20 },
  { month: 'Mar', solar: 48, eolica: 40, tradicional: 18 },
  { month: 'Abr', solar: 55, eolica: 38, tradicional: 15 },
  { month: 'Mai', solar: 60, eolica: 42, tradicional: 12 },
  { month: 'Jun', solar: 58, eolica: 45, tradicional: 10 },
];

const EnergyChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Geração de Energia (kWh/dia)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
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