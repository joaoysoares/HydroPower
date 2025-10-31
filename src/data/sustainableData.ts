export type WaterData = {
  currentUsage: number
  saved: number
  efficiency: number
  quality: {
    pH: number
    turbidity: number
  }
}

export type EnergySource = {
  generation: number
  capacity: number
}

export type EnergyData = {
  solar: EnergySource
  wind: EnergySource
}

export type FinancialData = {
  monthlySavings: number
  totalSavings: number
}

export type Goal = {
  id: number
  title: string
  description: string
  progress: number
  status: string
  deadline: string
  relatedApis: number[]
}

export type Api = {
  id: number
  name: string
  source: string
  dataType: string
  status: string
  updateFrequency: string
}

export const systemData = {
  water: {
    currentUsage: 2850,
    saved: 12000,
    efficiency: 94,
    quality: {
      pH: 7.2,
      turbidity: 2.1
    }
  },
  energy: {
    solar: {
      generation: 48.2,
      capacity: 74
    },
    wind: {
      generation: 32.7,
      capacity: 45
    }
  },
  financial: {
    monthlySavings: 1850,
    totalSavings: 8240
  },
  goals: [
    {
      id: 1,
      title: "Reduzir consumo de água potável em 30%",
      description: "Meta baseada na capacidade máxima do sistema de reúso",
      progress: 65,
      status: "andamento",
      deadline: "Dez/2024",
      relatedApis: [1, 2, 4]
    },
    {
      id: 2,
      title: "Atingir 90% de eficiência no tratamento de água",
      description: "Melhoria contínua do sistema de filtragem",
      progress: 92,
      status: "concluido",
      deadline: "Ago/2024",
      relatedApis: [2, 4]
    },
    {
      id: 3,
      title: "Compensar 100% da energia utilizada",
      description: "Através da geração solar+eólica integrada",
      progress: 78,
      status: "andamento",
      deadline: "Mar/2025",
      relatedApis: [1, 3, 4]
    }
  ],
  apis: [
    {
      id: 1,
      name: "INMET",
      source: "Instituto Nacional de Meteorologia",
      dataType: "Dados meteorológicos",
      status: "ativo",
      updateFrequency: "15 minutos"
    },
    {
      id: 2,
      name: "ANA",
      source: "Agência Nacional de Águas",
      dataType: "Qualidade da água",
      status: "ativo",
      updateFrequency: "1 hora"
    },
    {
      id: 3,
      name: "ONS",
      source: "Operador Nacional do Sistema Elétrico",
      dataType: "Dados de geração energética",
      status: "ativo",
      updateFrequency: "30 minutos"
    },
    {
      id: 4,
      name: "Sistema de Monitoramento Local",
      source: "Sensores IoT do projeto",
      dataType: "Dados em tempo real",
      status: "ativo",
      updateFrequency: "5 segundos"
    }
  ]
}