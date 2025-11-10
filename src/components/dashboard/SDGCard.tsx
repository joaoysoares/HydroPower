interface SDGCardProps {
  number: number;
  title: string;
  description: string;
  progress: number;
  color: string;
  icon: string;
}

const SDGCard = ({ number, title, description, progress, color, icon }: SDGCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <div className={`w-16 h-16 rounded-lg ${color} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-gray-500">ODS {number}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              progress >= 80 ? 'bg-green-100 text-green-800' :
              progress >= 60 ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {progress}%
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  progress >= 80 ? 'bg-green-500' :
                  progress >= 60 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGCard;