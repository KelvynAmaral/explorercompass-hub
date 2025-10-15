import { Link } from "react-router-dom";
import { Compass, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
                <Compass className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">TravelPlan</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A plataforma completa para planejar sua jornada global com confiança.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Destinos
                </Link>
              </li>
              <li>
                <Link to="/comparador" className="text-muted-foreground hover:text-primary transition-colors">
                  Comparador
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TravelPlan. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;