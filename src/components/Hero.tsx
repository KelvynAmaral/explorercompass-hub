import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Viajante com mochila olhando para uma paisagem global"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Sua jornada global <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            começa aqui.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Planeje, compare e explore o mundo com confiança. 
          A plataforma completa para viajantes e futuros expatriados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button variant="hero" size="lg" className="gap-2">
            Comece a explorar (Grátis)
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            Ver destinos
          </Button>
        </div>

        {/* Cities Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
          <span>Começando com:</span>
          <span className="font-semibold text-foreground">Buenos Aires</span>
          <span>•</span>
          <span className="font-semibold text-foreground">Medellín</span>
          <span>•</span>
          <span className="font-semibold text-foreground">Lisboa</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;