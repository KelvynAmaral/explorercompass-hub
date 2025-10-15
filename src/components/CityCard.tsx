import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Thermometer } from "lucide-react";

interface CityCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  costLevel: string;
  avgTemp: string;
  description: string;
}

const CityCard = ({
  id,
  name,
  country,
  image,
  costLevel,
  avgTemp,
  description,
}: CityCardProps) => {
  return (
    <Link to={`/destino/${id}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={`Vista de ${name}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-heading font-bold text-2xl text-white mb-1 drop-shadow-lg">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-white/90 text-sm drop-shadow">
              <MapPin className="h-4 w-4" />
              <span>{country}</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="gap-1">
              <DollarSign className="h-3 w-3" />
              {costLevel}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Thermometer className="h-3 w-3" />
              {avgTemp}
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CityCard;