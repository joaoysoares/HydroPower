import { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

interface ApiEndpoint {
  id: string;
  name: string;
  url: string;
  status: 'online' | 'offline' | 'warning';
  lastUpdate: string;
  responseTime: number;
  description: string;
}

const mockApis: ApiEndpoint[] = [
  {
    id: '1',
    name: 'INMET - Dados Meteorológicos',
    url: 'https://apitempo.inmet.gov.br',
    status: 'online',
    lastUpdate: '2 min atrás',
    responseTime: 245,
    description: 'Temperatura, umidade e precipitação'
  },
  {
    id: '2',
    name: 'ONS - Sistema Elétrico',
    url: 'https://dados.ons.org.br',
    status: 'online',
    lastUpdate: '5 min atrás',
    responseTime: 180,
    description: 'Geração e demanda energética'
  },
  {
    id: '3',
    name: 'ANA - Recursos Hídricos',
    url: 'https://dadosabertos.ana.gov.br',
    status: 'warning',
    lastUpdate: '15 min atrás',
    responseTime: 890,
    description: 'Qualidade e disponibilidade da água'
  },
  {
    id: '4',
    name: 'Sensores IoT Locais',
    url: 'https://iot.hydropower.local',
    status: 'online',
    lastUpdate: '30 seg atrás',
    responseTime: 45,
    description: 'Monitoramento em tempo real'
  }
];

const ApiStatus = () => {
  const [apis, setApis] = useState<ApiEndpoint[]>(mockApis);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'online': return <CheckCircle className="text-green-500" size={20} />;
      case 'warning': return <AlertCircle className="text-yellow-500" size={20} />;
      case 'offline': return <XCircle className="text-red-500" size={20} />;
      default: return <AlertCircle className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'online': return 'border-green-200 bg-green-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'offline': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const refreshApis = async () => {
    setIsRefreshing(true);
    // Simular chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simular mudanças aleatórias no status
    const updatedApis = apis.map(api => ({
      ...api,
      responseTime: Math.floor(Math.random() * 500) + 50,
      lastUpdate: 'Agora mesmo'
    }));
    
    setApis(updatedApis);
    setIsRefreshing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Status das Integrações</h3>
        <button
          onClick={refreshApis}
          disabled={isRefreshing}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors"
        >
          <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
          <span>Atualizar</span>
        </button>
      </div>

      <div className="space-y-4">
        {apis.map((api) => (
          <div key={api.id} className={`p-4 rounded-lg border-2 ${getStatusColor(api.status)}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                {getStatusIcon(api.status)}
                <h4 className="font-medium text-gray-900">{api.name}</h4>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">{api.responseTime}ms</div>
                <div className="text-xs text-gray-500">{api.lastUpdate}</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{api.description}</p>
            <div className="text-xs text-gray-500 font-mono">{api.url}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">
              {apis.filter(api => api.status === 'online').length}
            </div>
            <div className="text-sm text-gray-600">Online</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {apis.filter(api => api.status === 'warning').length}
            </div>
            <div className="text-sm text-gray-600">Atenção</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {apis.filter(api => api.status === 'offline').length}
            </div>
            <div className="text-sm text-gray-600">Offline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiStatus;