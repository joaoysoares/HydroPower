import { useState } from 'react';
import { Cloud, Database, Wifi, Settings } from 'lucide-react';
import ApiStatus from '../components/dashboard/ApiStatus';

const IntegrationsPage = () => {
  const [activeTab, setActiveTab] = useState('status');

  const integrationData = {
    weather: {
      temperature: 28.5,
      humidity: 65,
      precipitation: 2.3,
      windSpeed: 12.8,
      lastUpdate: '5 min atrás'
    },
    energy: {
      solarGeneration: 58.2,
      windGeneration: 34.7,
      totalConsumption: 76.8,
      gridFeedback: 16.1,
      lastUpdate: '2 min atrás'
    },
    water: {
      currentFlow: 145,
      quality: 'Excelente',
      ph: 7.2,
      turbidity: 1.8,
      lastUpdate: '1 min atrás'
    }
  };

  return (
    <section className="pt-32 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-lg mb-4">Integrações e APIs</h1>
          <p className="text-lg text-gray-600">
            Conexões em tempo real com fontes de dados externas e sistemas de monitoramento
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          <button
            onClick={() => setActiveTab('status')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'status'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Status das APIs
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'data'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Dados em Tempo Real
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'config'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Configurações
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'status' && (
          <div className="space-y-8">
            <ApiStatus />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Cloud size={48} className="text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">APIs Externas</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">3</p>
                <p className="text-sm text-gray-600">Fontes governamentais ativas</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Database size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Banco de Dados</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">99.9%</p>
                <p className="text-sm text-gray-600">Disponibilidade</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Wifi size={48} className="text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sensores IoT</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">24</p>
                <p className="text-sm text-gray-600">Dispositivos conectados</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-8">
            {/* Weather Data */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Cloud className="mr-2 text-blue-500" />
                Dados Meteorológicos (INMET)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{integrationData.weather.temperature}°C</div>
                  <div className="text-sm text-gray-600">Temperatura</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{integrationData.weather.humidity}%</div>
                  <div className="text-sm text-gray-600">Umidade</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{integrationData.weather.precipitation}mm</div>
                  <div className="text-sm text-gray-600">Precipitação</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{integrationData.weather.windSpeed}km/h</div>
                  <div className="text-sm text-gray-600">Vento</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Última atualização: {integrationData.weather.lastUpdate}
              </div>
            </div>

            {/* Energy Data */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="mr-2 text-yellow-500" />
                Sistema Energético (ONS)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{integrationData.energy.solarGeneration}kWh</div>
                  <div className="text-sm text-gray-600">Solar</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{integrationData.energy.windGeneration}kWh</div>
                  <div className="text-sm text-gray-600">Eólica</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{integrationData.energy.totalConsumption}kWh</div>
                  <div className="text-sm text-gray-600">Consumo</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{integrationData.energy.gridFeedback}kWh</div>
                  <div className="text-sm text-gray-600">Excedente</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Última atualização: {integrationData.energy.lastUpdate}
              </div>
            </div>

            {/* Water Data */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Wifi className="mr-2 text-green-500" />
                Monitoramento Hídrico (Sensores Locais)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{integrationData.water.currentFlow}L/h</div>
                  <div className="text-sm text-gray-600">Fluxo Atual</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{integrationData.water.quality}</div>
                  <div className="text-sm text-gray-600">Qualidade</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{integrationData.water.ph}</div>
                  <div className="text-sm text-gray-600">pH</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{integrationData.water.turbidity}</div>
                  <div className="text-sm text-gray-600">Turbidez</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Última atualização: {integrationData.water.lastUpdate}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Settings className="mr-2 text-gray-500" />
                Configurações de Integração
              </h3>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="font-medium mb-2">Frequência de Atualização</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Dados Meteorológicos</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>15 minutos</option>
                        <option>30 minutos</option>
                        <option>1 hora</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Dados Energéticos</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>5 minutos</option>
                        <option>15 minutos</option>
                        <option>30 minutos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Sensores IoT</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Tempo real</option>
                        <option>30 segundos</option>
                        <option>1 minuto</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h4 className="font-medium mb-2">Alertas e Notificações</h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">Alertar quando APIs ficarem offline</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      <span className="text-sm">Notificar sobre anomalias nos dados</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Relatórios diários por email</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Backup e Segurança</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Backup automático</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Diário</option>
                        <option>Semanal</option>
                        <option>Mensal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Retenção de dados</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>6 meses</option>
                        <option>1 ano</option>
                        <option>2 anos</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-4">
                <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Cancelar
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                  Salvar Configurações
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationsPage;