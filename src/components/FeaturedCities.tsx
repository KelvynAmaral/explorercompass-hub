import { useState, useMemo } from "react";
import CityCard from "./CityCard";
import { Input } from "@/components/ui/input";
import { Search, MapPinOff } from "lucide-react";
import { destinations } from "@/data/destinations";

const categories = ["Todos", "Praia", "Montanha", "Cidades"] as const;
type Category = (typeof categories)[number];

const FeaturedCities = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = useMemo(() => {
    return destinations.filter((city) => {
      const matchesCategory =
        activeCategory === "Todos" || city.category === activeCategory;
      const matchesSearch = city.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Destinos em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossos destinos com informações completas e atualizadas
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64 sm:ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar destino..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredCities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCities.map((city) => (
              <div key={city.id} className="animate-fade-in">
                <CityCard
                  id={city.id}
                  name={city.name}
                  country={city.country}
                  image={city.image}
                  costLevel={city.costLevel}
                  avgTemp={city.migration.avgTemperature}
                  description={city.description}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground animate-fade-in">
            <MapPinOff className="h-12 w-12 mb-4 opacity-50" />
            <p className="text-lg font-medium">Nenhum destino encontrado</p>
            <p className="text-sm mt-1">
              Tente alterar os filtros ou a busca.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCities;
