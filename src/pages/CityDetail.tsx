import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TravelInquiryDrawer from "@/components/TravelInquiryDrawer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  CloudRain,
  Shield,
  Wifi,
  Home,
  MapPin,
  ArrowLeft,
  Calendar,
  Phone,
  Star,
  Plane,
} from "lucide-react";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import medellinImg from "@/assets/medellin.jpg";
import lisboaImg from "@/assets/lisboa.jpg";

const citiesData: Record<string, any> = {
  "buenos-aires": {
    name: "Buenos Aires",
    country: "Argentina",
    image: buenosAiresImg,
    tourism: {
      bestTime: "Setembro a Novembro (Primavera)",
      entryRequirements: "Brasileiros precisam apenas de RG válido com menos de 10 anos de emissão",
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
  medellin: {
    name: "Medellín",
    country: "Colômbia",
    image: medellinImg,
    tourism: {
      bestTime: "Dezembro a Março",
      entryRequirements: "Brasileiros não precisam de visto para turismo até 90 dias",
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
  lisboa: {
    name: "Lisboa",
    country: "Portugal",
    image: lisboaImg,
    tourism: {
      bestTime: "Abril a Junho e Setembro a Outubro",
      entryRequirements: "Brasileiros não precisam de visto para turismo até 90 dias",
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
};

const CityDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("turismo");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const city = id ? citiesData[id] : null;

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cidade não encontrada</h1>
          <Link to="/">
            <Button variant="default">Voltar para a página inicial</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-white mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
              <h1 className="font-heading font-bold text-5xl text-white mb-2">
                {city.name}
              </h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{city.country}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Metrics */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Custo Diário</p>
                <p className="font-semibold">{city.tourism.dailyCost}</p>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Segurança</p>
                <p className="font-semibold">{city.tourism.safetyLevel}</p>
              </Card>
              <Card className="p-4 text-center">
                <CloudRain className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Temperatura</p>
                <p className="font-semibold">{city.migration.avgTemperature}</p>
              </Card>
              <Card className="p-4 text-center">
                <Wifi className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Internet</p>
                <p className="font-semibold">{city.migration.internetSpeed}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="turismo" className="text-base">
                  Turismo
                </TabsTrigger>
                <TabsTrigger value="migracao" className="text-base">
                  Migração
                </TabsTrigger>
              </TabsList>

              <TabsContent value="turismo" className="space-y-8">
                {/* Tourism Planning */}
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Planejamento da Viagem
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Melhor Época</h4>
                      <p className="text-muted-foreground">{city.tourism.bestTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requisitos de Entrada</h4>
                      <p className="text-muted-foreground">
                        {city.tourism.entryRequirements}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Tourist Attractions */}
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <Star className="h-6 w-6 text-primary" />
                    Principais Pontos Turísticos
                  </h3>
                  <div className="space-y-3">
                    {city.tourism.attractions.map((attraction: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                      >
                        <span className="font-medium">{attraction.name}</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{attraction.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Safety */}
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Segurança
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Nível Geral</h4>
                      <p className="text-muted-foreground">{city.tourism.safetyLevel}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Emergência
                      </h4>
                      <p className="text-muted-foreground font-mono">
                        {city.tourism.emergency}
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="migracao" className="space-y-8">
                {/* Cost of Living */}
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Custo de Vida
                  </h3>
                  <div className="space-y-3">
                    {city.migration.costOfLiving.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                      >
                        <span>{item.item}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Visa Information */}
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4">
                    Informações sobre Visto
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {city.migration.visa}
                  </p>
                </Card>

                {/* Neighborhoods */}
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    Bairros Recomendados
                  </h3>
                  <div className="flex gap-3">
                    {city.migration.neighborhoods.map((neighborhood: string, index: number) => (
                      <div key={index} className="px-4 py-2 bg-secondary rounded-lg font-medium">
                        {neighborhood}
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CityDetail;