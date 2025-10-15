import CityCard from "./CityCard";
import buenosAiresImg from "@/assets/buenos-aires.jpg";
import medellinImg from "@/assets/medellin.jpg";
import lisboaImg from "@/assets/lisboa.jpg";

const cities = [
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    image: buenosAiresImg,
    costLevel: "Acessível",
    avgTemp: "18°C",
    description:
      "A capital argentina oferece rica cultura, gastronomia de classe mundial e custo de vida acessível para brasileiros.",
  },
  {
    id: "medellin",
    name: "Medellín",
    country: "Colômbia",
    image: medellinImg,
    costLevel: "Moderado",
    avgTemp: "24°C",
    description:
      "Conhecida como a cidade da eterna primavera, é o paraíso dos nômades digitais com excelente infraestrutura.",
  },
  {
    id: "lisboa",
    name: "Lisboa",
    country: "Portugal",
    image: lisboaImg,
    costLevel: "Alto",
    avgTemp: "17°C",
    description:
      "A capital portuguesa combina história, qualidade de vida e facilidades para brasileiros que buscam migração na Europa.",
  },
];

const FeaturedCities = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Destinos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossos destinos iniciais com informações completas e atualizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;