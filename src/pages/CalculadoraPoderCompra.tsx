import { useState } from "react";
import { Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CityData {
  costIndex: number;
  currency: string;
  exchangeRate: number;
}

const cityData: Record<string, CityData> = {
  "Buenos Aires": {
    costIndex: 75.5,
    currency: "ARS",
    exchangeRate: 250.0,
  },
  "Medellín": {
    costIndex: 68.2,
    currency: "COP",
    exchangeRate: 800.0,
  },
  "Lisboa": {
    costIndex: 115.8,
    currency: "EUR",
    exchangeRate: 0.18,
  },
};

const baseIndexBrazil = 100;

const CalculadoraPoderCompra = () => {
  const [salary, setSalary] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [result, setResult] = useState<{
    city: string;
    amount: number;
    currency: string;
  } | null>(null);

  const formatCurrency = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (!numbers) return "";
    const formatted = new Intl.NumberFormat("pt-BR").format(Number(numbers));
    return formatted;
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setSalary(formatted);
  };

  const calculateEquivalence = () => {
    if (!salary || !selectedCity) return;

    const salaryNumber = Number(salary.replace(/\./g, ""));
    const cityInfo = cityData[selectedCity];

    // Cálculo: (Salário BRL / Índice Brasil) * Índice Cidade Destino * Taxa de Câmbio
    const equivalentSalary =
      (salaryNumber / baseIndexBrazil) * cityInfo.costIndex * cityInfo.exchangeRate;

    setResult({
      city: selectedCity,
      amount: equivalentSalary,
      currency: cityInfo.currency,
    });
  };

  const formatResultCurrency = (amount: number, currency: string): string => {
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: currency === "EUR" ? 2 : 0,
      maximumFractionDigits: currency === "EUR" ? 2 : 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Calculadora de Poder de Compra
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra qual seria o salário equivalente na sua cidade de destino para
              manter o mesmo padrão de vida que você tem no Brasil.
            </p>
          </div>

          {/* Input Card */}
          <Card className="max-w-2xl mx-auto mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="font-heading">Dados para Cálculo</CardTitle>
              <CardDescription>
                Insira o seu salário e selecione a cidade de destino
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="salary">O seu salário mensal no Brasil (BRL)</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    R$
                  </span>
                  <Input
                    id="salary"
                    type="text"
                    placeholder="5.000"
                    value={salary}
                    onChange={handleSalaryChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Selecione a cidade de destino</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="Escolha uma cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Buenos Aires">Buenos Aires</SelectItem>
                    <SelectItem value="Medellín">Medellín</SelectItem>
                    <SelectItem value="Lisboa">Lisboa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculateEquivalence}
                disabled={!salary || !selectedCity}
                className="w-full"
                size="lg"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Calcular Equivalência
              </Button>
            </CardContent>
          </Card>

          {/* Result Card */}
          {result && (
            <Card className="max-w-2xl mx-auto animate-fade-in bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  O seu poder de compra equivalente em {result.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-6">
                  <p className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {result.currency} {formatResultCurrency(result.amount, result.currency)}
                  </p>
                </div>

                <p className="text-base leading-relaxed">
                  Para manter o mesmo padrão de vida que você tem no Brasil com um salário
                  de <span className="font-semibold">R$ {salary}</span>, você precisaria de
                  aproximadamente{" "}
                  <span className="font-semibold">
                    {result.currency} {formatResultCurrency(result.amount, result.currency)}
                  </span>{" "}
                  em {result.city}.
                </p>

                <p className="text-sm text-muted-foreground border-t border-border pt-4 mt-4">
                  <strong>Disclaimer:</strong> Cálculo baseado no índice de custo de vida
                  Numbeo. A taxa de câmbio utilizada é uma referência e pode variar.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalculadoraPoderCompra;
