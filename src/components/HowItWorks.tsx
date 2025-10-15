import { Compass, Scale, CheckSquare, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Compass,
    title: "Explore Destinos",
    description:
      "Descubra informações detalhadas e atualizadas sobre clima, custo de vida, vistos e cultura de centenas de cidades pelo mundo.",
  },
  {
    icon: Scale,
    title: "Compare Opções",
    description:
      "Use nossa ferramenta inteligente para comparar cidades lado a lado. Descubra qual destino se encaixa melhor no seu bolso e no seu estilo de vida.",
  },
  {
    icon: CheckSquare,
    title: "Planeje sua Jornada",
    description:
      "Crie roteiros de viagem personalizados ou um checklist completo para sua migração. Organizamos a burocracia para que você possa focar no sonho.",
  },
  {
    icon: Rocket,
    title: "Vá com Confiança",
    description:
      "Viaje ou mude de país com a segurança de quem tem todas as informações na palma da mão e o apoio de uma comunidade de viajantes como você.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quatro passos simples para transformar seu sonho de viajar ou morar no exterior em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-card"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-2">
                      {index + 1}
                    </div>
                    <h3 className="font-heading font-semibold text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;