import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', reutilizada: 2400, potavel: 4000, economia: 1600 },
  { month: 'Fev', reutilizada: 2800, potavel: 3800, economia: 1000 },
  { month: 'Mar', reutilizada: 3200, potavel: 3600, economia: 400 },
  { month: 'Abr', reutilizada: 3600, potavel: 3400, economia: -200 },
  { month: 'Mai', reutilizada: 4000, potavel: 3200, economia: -800 },
  { month: 'Jun', reutilizada: 4200, potavel: 3000, economia: -1200 },
];

const WaterUsageChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Consumo de Água (Litros/mês)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
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