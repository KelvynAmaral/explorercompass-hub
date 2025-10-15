import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Shield,
  Thermometer,
  Wifi,
  Home,
  ArrowRight,
  Scale,
} from "lucide-react";

interface CityMetrics {
  name: string;
  country: string;
  rent: string;
  meal: string;
  safety: string;
  temperature: string;
  internet: string;
}

const citiesMetrics: Record<string, CityMetrics> = {
  "buenos-aires": {
    name: "Buenos Aires",
    country: "Argentina",
    rent: "R$ 1.800",
    meal: "R$ 35",
    safety: "6.5/10",
    temperature: "18°C",
    internet: "80 Mbps",
  },
  medellin: {
    name: "Medellín",
    country: "Colômbia",
    rent: "R$ 2.200",
    meal: "R$ 40",
    safety: "7.0/10",
    temperature: "24°C",
    internet: "100 Mbps",
  },
  lisboa: {
    name: "Lisboa",
    country: "Portugal",
    rent: "R$ 4.500",
    meal: "R$ 70",
    safety: "8.5/10",
    temperature: "17°C",
    internet: "120 Mbps",
  },
};

const metrics = [
  {
    key: "rent" as const,
    label: "Aluguel (1 quarto, centro)",
    icon: Home,
    format: (value: string) => value,
  },
  {
    key: "meal" as const,
    label: "Refeição (restaurante barato)",
    icon: DollarSign,
    format: (value: string) => value,
  },
  {
    key: "safety" as const,
    label: "Índice de Segurança",
    icon: Shield,
    format: (value: string) => value,
  },
  {
    key: "temperature" as const,
    label: "Temperatura Média Anual",
    icon: Thermometer,
    format: (value: string) => value,
  },
  {
    key: "internet" as const,
    label: "Velocidade da Internet",
    icon: Wifi,
    format: (value: string) => value,
  },
];

const Comparador = () => {
  const [city1, setCity1] = useState<string>("");
  const [city2, setCity2] = useState<string>("");

  const showComparison = city1 && city2 && city1 !== city2;

  const getWinner = (metric: string, value1: string, value2: string): "city1" | "city2" | "tie" => {
    if (metric === "rent" || metric === "meal") {
      const num1 = parseFloat(value1.replace(/[^\d,]/g, "").replace(",", "."));
      const num2 = parseFloat(value2.replace(/[^\d,]/g, "").replace(",", "."));
      return num1 < num2 ? "city1" : num1 > num2 ? "city2" : "tie";
    }
    if (metric === "safety") {
      const num1 = parseFloat(value1.split("/")[0]);
      const num2 = parseFloat(value2.split("/")[0]);
      return num1 > num2 ? "city1" : num1 < num2 ? "city2" : "tie";
    }
    if (metric === "internet") {
      const num1 = parseFloat(value1.replace(/[^\d]/g, ""));
      const num2 = parseFloat(value2.replace(/[^\d]/g, ""));
      return num1 > num2 ? "city1" : num1 < num2 ? "city2" : "tie";
    }
    return "tie";
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Comparador de Cidades
              </h1>
              <p className="text-lg text-muted-foreground">
                Escolha duas cidades e compare os principais indicadores para sua viagem ou mudança
              </p>
            </div>

            {/* City Selection */}
            <Card className="p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Primeira Cidade
                  </label>
                  <Select value={city1} onValueChange={setCity1}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Selecione uma cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buenos-aires">
                        Buenos Aires, Argentina
                      </SelectItem>
                      <SelectItem value="medellin">
                        Medellín, Colômbia
                      </SelectItem>
                      <SelectItem value="lisboa">
                        Lisboa, Portugal
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Segunda Cidade
                  </label>
                  <Select value={city2} onValueChange={setCity2}>
                    <SelectTrigger className="w-full h-12">
                      <SelectValue placeholder="Selecione uma cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buenos-aires">
                        Buenos Aires, Argentina
                      </SelectItem>
                      <SelectItem value="medellin">
                        Medellín, Colômbia
                      </SelectItem>
                      <SelectItem value="lisboa">
                        Lisboa, Portugal
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {city1 === city2 && city1 && (
                <div className="text-center p-4 bg-destructive/10 text-destructive rounded-lg">
                  Por favor, selecione duas cidades diferentes
                </div>
              )}

              {!showComparison && city1 !== city2 && (
                <div className="text-center text-muted-foreground">
                  Selecione duas cidades para começar a comparação
                </div>
              )}
            </Card>

            {/* Comparison Results */}
            {showComparison && (
              <div className="mt-12 space-y-6 max-w-6xl mx-auto">
                {/* City Headers */}
                <div className="grid grid-cols-3 gap-4">
                  <div />
                  <Card className="p-6 text-center bg-primary/5">
                    <h3 className="font-heading font-bold text-2xl">
                      {citiesMetrics[city1].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {citiesMetrics[city1].country}
                    </p>
                  </Card>
                  <Card className="p-6 text-center bg-accent/5">
                    <h3 className="font-heading font-bold text-2xl">
                      {citiesMetrics[city2].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {citiesMetrics[city2].country}
                    </p>
                  </Card>
                </div>

                {/* Metrics Comparison */}
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  const value1 = citiesMetrics[city1][metric.key];
                  const value2 = citiesMetrics[city2][metric.key];
                  const winner = getWinner(metric.key, value1, value2);

                  return (
                    <Card key={metric.key} className="overflow-hidden">
                      <div className="grid grid-cols-3 gap-4">
                        {/* Metric Label */}
                        <div className="p-6 bg-secondary/30 flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium">{metric.label}</span>
                        </div>

                        {/* City 1 Value */}
                        <div
                          className={`p-6 flex items-center justify-center ${
                            winner === "city1"
                              ? "bg-success/10 border-2 border-success"
                              : ""
                          }`}
                        >
                          <div className="text-center">
                            <p className="font-bold text-lg">{metric.format(value1)}</p>
                            {winner === "city1" && (
                              <Badge variant="default" className="mt-2 bg-success">
                                Melhor
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* City 2 Value */}
                        <div
                          className={`p-6 flex items-center justify-center ${
                            winner === "city2"
                              ? "bg-success/10 border-2 border-success"
                              : ""
                          }`}
                        >
                          <div className="text-center">
                            <p className="font-bold text-lg">{metric.format(value2)}</p>
                            {winner === "city2" && (
                              <Badge variant="default" className="mt-2 bg-success">
                                Melhor
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}

                {/* CTA */}
                <Card className="p-8 text-center bg-gradient-to-r from-primary/10 to-accent/10">
                  <h3 className="font-heading font-bold text-2xl mb-4">
                    Quer mais detalhes sobre estas cidades?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Explore informações completas sobre turismo, custo de vida, vistos e muito mais
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="default" size="lg" asChild>
                      <a href={`/destino/${city1}`} className="gap-2">
                        Ver {citiesMetrics[city1].name}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href={`/destino/${city2}`} className="gap-2">
                        Ver {citiesMetrics[city2].name}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparador;