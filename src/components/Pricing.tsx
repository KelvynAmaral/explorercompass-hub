import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    description: "Para exploradores casuais.",
    features: [
      "Acesso a informações gerais",
      "Comparador básico",
      "Acesso à comunidade",
    ],
    buttonText: "Cadastre-se de graça",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Explorer Pass",
    price: "R$ 29,90",
    period: "/mês",
    description: "Para quem leva o plano a sério.",
    features: [
      "Tudo do plano gratuito, e mais:",
      "Acesso ilimitado a todos os dados",
      "Comparador avançado",
      "Checklists e roteiros personalizados",
      "Alertas de oportunidade",
      "Relatórios em PDF",
    ],
    buttonText: "Iniciar meu teste gratuito de 7 dias",
    buttonVariant: "highlight" as const,
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comece gratuitamente ou desbloqueie todos os recursos com o Explorer Pass
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-2 border-highlight shadow-xl scale-105"
                  : "border-2"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-highlight text-highlight-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-heading font-bold text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                size="lg"
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;