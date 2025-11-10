import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  color?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  unit, 
  icon: Icon, 
  trend, 
  trendValue,
  color = 'text-primary-600'
}: MetricCardProps) => {
  const getTrendColor = () => {
    switch(trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = () => {
    switch(trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-500 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <div className="flex items-baseline">
            <p className={`text-2xl font-bold ${color}`}>
              {typeof value === 'number' ? value.toLocaleString() : value}
            </p>
            {unit && <span className="ml-1 text-sm text-gray-500">{unit}</span>}
          </div>
          {trend && trendValue && (
            <div className={`flex items-center mt-2 text-sm ${getTrendColor()}`}>
              <span className="mr-1">{getTrendIcon()}</span>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        <div className={`${color} opacity-80`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;