import { Plane, Laptop, GraduationCap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const personas = [
  {
    icon: Plane,
    title: "Para o Turista",
    description:
      "Crie roteiros incríveis, descubra a melhor época para viajar e saiba quanto vai gastar, tudo em um só lugar.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Laptop,
    title: "Para o Nômade Digital",
    description:
      "Encontre sua próxima base com o melhor custo-benefício, internet rápida e uma comunidade vibrante.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: GraduationCap,
    title: "Para o Estudante",
    description:
      "Descubra tudo sobre universidades, custo de vida para estudantes e como aplicar para seu visto.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Users,
    title: "Para a Família",
    description:
      "Planeje a mudança da sua família com informações sobre escolas, segurança, saúde e os melhores bairros para criar seus filhos.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

const ForWho = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Para Quem é a Plataforma?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvida para diferentes perfis de viajantes e futuros expatriados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50"
              >
                <div className="flex gap-6">
                  <div className={`bg-gradient-to-br ${persona.gradient} p-4 rounded-2xl h-fit group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-heading font-semibold text-2xl">
                      {persona.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {persona.description}
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

export default ForWho;