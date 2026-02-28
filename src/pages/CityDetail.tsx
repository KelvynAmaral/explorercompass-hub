import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TravelInquiryDrawer from "@/components/TravelInquiryDrawer";
import CityCard from "@/components/CityCard";
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
import { getDestinationById, getOtherDestinations } from "@/data/destinations";

const CityDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("turismo");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const city = id ? getDestinationById(id) : undefined;
  const otherDestinations = id ? getOtherDestinations(id, 3) : [];

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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{city.country}</span>
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => setDrawerOpen(true)}
                  className="gap-2"
                >
                  <Plane className="h-5 w-5" />
                  Quero viajar
                </Button>
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
                      <p className="text-muted-foreground">{city.tourism.entryRequirements}</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <Star className="h-6 w-6 text-primary" />
                    Principais Pontos Turísticos
                  </h3>
                  <div className="space-y-3">
                    {city.tourism.attractions.map((attraction, index) => (
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
                      <p className="text-muted-foreground font-mono">{city.tourism.emergency}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="migracao" className="space-y-8">
                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Custo de Vida
                  </h3>
                  <div className="space-y-3">
                    {city.migration.costOfLiving.map((item, index) => (
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

                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4">
                    Informações sobre Visto
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{city.migration.visa}</p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    Bairros Recomendados
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {city.migration.neighborhoods.map((neighborhood, index) => (
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

        {/* Other Destinations */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Outros destinos que você pode gostar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherDestinations.map((d) => (
                <CityCard
                  key={d.id}
                  id={d.id}
                  name={d.name}
                  country={d.country}
                  image={d.image}
                  costLevel={d.costLevel}
                  avgTemp={d.migration.avgTemperature}
                  description={d.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <TravelInquiryDrawer
        cityName={city.name}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </div>
  );
};

export default CityDetail;
