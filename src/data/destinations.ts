import buenosAiresImg from "@/assets/buenos-aires.jpg";
import medellinImg from "@/assets/medellin.jpg";
import lisboaImg from "@/assets/lisboa.jpg";
import asuncionImg from "@/assets/asuncion.jpg";
import santiagoImg from "@/assets/santiago.jpg";
import bogotaImg from "@/assets/bogota.jpg";

export interface Attraction {
  name: string;
  rating: number;
}

export interface CostItem {
  item: string;
  value: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  category: "Praia" | "Montanha" | "Cidades";
  tourism: {
    bestTime: string;
    entryRequirements: string;
    dailyCost: string;
    attractions: Attraction[];
    safetyLevel: string;
    emergency: string;
  };
  migration: {
    costOfLiving: CostItem[];
    visa: string;
    neighborhoods: string[];
    internetSpeed: string;
    safetyIndex: string;
    avgTemperature: string;
  };
  description: string;
  costLevel: string;
}

export const destinations: Destination[] = [
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    image: buenosAiresImg,
    category: "Cidades",
    costLevel: "Acessível",
    description:
      "A capital argentina oferece rica cultura, gastronomia de classe mundial e custo de vida acessível para brasileiros.",
    tourism: {
      bestTime: "Setembro a Novembro (Primavera)",
      entryRequirements:
        "Brasileiros precisam apenas de RG válido com menos de 10 anos de emissão",
      dailyCost: "R$ 250",
      attractions: [
        { name: "La Boca e Caminito", rating: 4.5 },
        { name: "Casa Rosada", rating: 4.6 },
        { name: "Teatro Colón", rating: 4.8 },
        { name: "Cemitério da Recoleta", rating: 4.7 },
        { name: "Puerto Madero", rating: 4.4 },
      ],
      safetyLevel: "Médio",
      emergency: "+54 911",
    },
    migration: {
      costOfLiving: [
        { item: "Aluguel (1 quarto, centro)", value: "R$ 1.800" },
        { item: "Passe de Transporte", value: "R$ 60" },
        { item: "Cesta Básica (mensal)", value: "R$ 800" },
        { item: "Refeição (restaurante)", value: "R$ 35" },
        { item: "Academia (mensal)", value: "R$ 120" },
      ],
      visa: "Visto de residência Mercosul permite trabalhar e estudar. Processo simplificado para brasileiros.",
      neighborhoods: ["Palermo", "Recoleta"],
      internetSpeed: "80 Mbps",
      safetyIndex: "6.5/10",
      avgTemperature: "18°C",
    },
  },
  {
    id: "medellin",
    name: "Medellín",
    country: "Colômbia",
    image: medellinImg,
    category: "Montanha",
    costLevel: "Moderado",
    description:
      "Conhecida como a cidade da eterna primavera, é o paraíso dos nômades digitais com excelente infraestrutura.",
    tourism: {
      bestTime: "Dezembro a Março",
      entryRequirements:
        "Brasileiros não precisam de visto para turismo até 90 dias",
      dailyCost: "R$ 200",
      attractions: [
        { name: "Parque Arví", rating: 4.7 },
        { name: "Plaza Botero", rating: 4.5 },
        { name: "Metrocable", rating: 4.8 },
        { name: "Pueblito Paisa", rating: 4.4 },
        { name: "Parque Explora", rating: 4.6 },
      ],
      safetyLevel: "Médio-Alto",
      emergency: "+57 123",
    },
    migration: {
      costOfLiving: [
        { item: "Aluguel (1 quarto, centro)", value: "R$ 2.200" },
        { item: "Passe de Transporte", value: "R$ 80" },
        { item: "Cesta Básica (mensal)", value: "R$ 900" },
        { item: "Refeição (restaurante)", value: "R$ 40" },
        { item: "Academia (mensal)", value: "R$ 150" },
      ],
      visa: "Visto de Nômade Digital disponível. Permite trabalho remoto por até 2 anos.",
      neighborhoods: ["El Poblado", "Laureles"],
      internetSpeed: "100 Mbps",
      safetyIndex: "7.0/10",
      avgTemperature: "24°C",
    },
  },
  {
    id: "lisboa",
    name: "Lisboa",
    country: "Portugal",
    image: lisboaImg,
    category: "Praia",
    costLevel: "Alto",
    description:
      "A capital portuguesa combina história, qualidade de vida e facilidades para brasileiros que buscam migração na Europa.",
    tourism: {
      bestTime: "Abril a Junho e Setembro a Outubro",
      entryRequirements:
        "Brasileiros não precisam de visto para turismo até 90 dias",
      dailyCost: "R$ 400",
      attractions: [
        { name: "Torre de Belém", rating: 4.6 },
        { name: "Mosteiro dos Jerónimos", rating: 4.8 },
        { name: "Alfama", rating: 4.7 },
        { name: "Elevador de Santa Justa", rating: 4.4 },
        { name: "Oceanário", rating: 4.7 },
      ],
      safetyLevel: "Alto",
      emergency: "+351 112",
    },
    migration: {
      costOfLiving: [
        { item: "Aluguel (1 quarto, centro)", value: "R$ 4.500" },
        { item: "Passe de Transporte", value: "R$ 200" },
        { item: "Cesta Básica (mensal)", value: "R$ 1.500" },
        { item: "Refeição (restaurante)", value: "R$ 70" },
        { item: "Academia (mensal)", value: "R$ 250" },
      ],
      visa: "Visto D7 para rendimentos passivos ou Visto de Trabalho. Golden Visa também disponível.",
      neighborhoods: ["Chiado", "Príncipe Real"],
      internetSpeed: "120 Mbps",
      safetyIndex: "8.5/10",
      avgTemperature: "17°C",
    },
  },
  {
    id: "asuncion",
    name: "Assunção",
    country: "Paraguai",
    image: asuncionImg,
    category: "Cidades",
    costLevel: "Acessível",
    description:
      "A capital paraguaia surpreende com sua mistura de tradição guarani, arquitetura colonial e um custo de vida muito baixo para sul-americanos.",
    tourism: {
      bestTime: "Maio a Setembro (Inverno seco)",
      entryRequirements:
        "Brasileiros precisam apenas de RG válido para entrada no Paraguai",
      dailyCost: "R$ 180",
      attractions: [
        { name: "Panteón Nacional de los Héroes", rating: 4.5 },
        { name: "Costanera de Asunción", rating: 4.3 },
        { name: "Palacio de López", rating: 4.6 },
        { name: "Mercado Municipal Nº 4", rating: 4.2 },
        { name: "Jardín Botánico", rating: 4.4 },
      ],
      safetyLevel: "Médio",
      emergency: "+595 911",
    },
    migration: {
      costOfLiving: [
        { item: "Aluguel (1 quarto, centro)", value: "R$ 1.200" },
        { item: "Passe de Transporte", value: "R$ 40" },
        { item: "Cesta Básica (mensal)", value: "R$ 600" },
        { item: "Refeição (restaurante)", value: "R$ 25" },
        { item: "Academia (mensal)", value: "R$ 80" },
      ],
      visa: "Mercosul facilita a residência. Processo simplificado para brasileiros com poucos requisitos.",
      neighborhoods: ["Villa Morra", "Carmelitas"],
      internetSpeed: "50 Mbps",
      safetyIndex: "6.0/10",
      avgTemperature: "23°C",
    },
  },
  {
    id: "santiago",
    name: "Santiago",
    country: "Chile",
    image: santiagoImg,
    category: "Montanha",
    costLevel: "Moderado",
    description:
      "Cercada pela Cordilheira dos Andes, a capital chilena oferece alta qualidade de vida, economia estável e excelente infraestrutura urbana.",
    tourism: {
      bestTime: "Outubro a Março (Primavera/Verão)",
      entryRequirements:
        "Brasileiros não precisam de visto para turismo até 90 dias",
      dailyCost: "R$ 350",
      attractions: [
        { name: "Cerro San Cristóbal", rating: 4.7 },
        { name: "Plaza de Armas", rating: 4.4 },
        { name: "Mercado Central", rating: 4.6 },
        { name: "Barrio Lastarria", rating: 4.5 },
        { name: "Valle Nevado (ski)", rating: 4.8 },
      ],
      safetyLevel: "Médio-Alto",
      emergency: "+56 131",
    },
    migration: {
      costOfLiving: [
        { item: "Aluguel (1 quarto, centro)", value: "R$ 3.200" },
        { item: "Passe de Transporte", value: "R$ 150" },
        { item: "Cesta Básica (mensal)", value: "R$ 1.200" },
        { item: "Refeição (restaurante)", value: "R$ 55" },
        { item: "Academia (mensal)", value: "R$ 180" },
      ],
      visa: "Visto de Responsabilidade Democrática ou visto de trabalho. Chile possui acordo Mercosul para residência.",
      neighborhoods: ["Providencia", "Las Condes"],
      internetSpeed: "150 Mbps",
      safetyIndex: "7.5/10",
      avgTemperature: "14°C",
    },
  },
  {
    id: "bogota",
    name: "Bogotá",
    country: "Colômbia",
    image: bogotaImg,
    category: "Montanha",
    costLevel: "Moderado",
    description:
      "A vibrante capital colombiana, a 2.640m de altitude, é um polo cultural e gastronômico com cena artística efervescente e custo acessível.",
    tourism: {
      bestTime: "Dezembro a Março e Julho a Agosto",
      entryRequirements:
        "Brasileiros não precisam de visto para turismo até 90 dias",
      dailyCost: "R$ 220",
      attractions: [
        { name: "Monserrate", rating: 4.8 },
        { name: "Museo del Oro", rating: 4.7 },
        { name: "La Candelaria", rating: 4.5 },
        { name: "Jardín Botánico", rating: 4.4 },
        { name: "Zona T e Zona Rosa", rating: 4.3 },
      ],
      safetyLevel: "Médio",
      emergency: "+57 123",
    },
    migration: {
      costOfLiving: [
        { item: "Aluguel (1 quarto, centro)", value: "R$ 2.000" },
        { item: "Passe de Transporte", value: "R$ 70" },
        { item: "Cesta Básica (mensal)", value: "R$ 850" },
        { item: "Refeição (restaurante)", value: "R$ 35" },
        { item: "Academia (mensal)", value: "R$ 130" },
      ],
      visa: "Visto de Nômade Digital ou Visto de Trabalho. Colômbia oferece boa estrutura para imigrantes.",
      neighborhoods: ["Chapinero", "Usaquén"],
      internetSpeed: "90 Mbps",
      safetyIndex: "6.8/10",
      avgTemperature: "14°C",
    },
  },
];

export const getDestinationById = (id: string): Destination | undefined =>
  destinations.find((d) => d.id === id);

export const getOtherDestinations = (currentId: string, count = 3): Destination[] =>
  destinations.filter((d) => d.id !== currentId).slice(0, count);
