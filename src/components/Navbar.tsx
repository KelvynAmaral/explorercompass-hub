import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Compass } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Compass className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">TravelPlan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/comparador" className="text-sm font-medium hover:text-primary transition-colors">
              Comparador
            </Link>
            <Button variant="default" size="sm">
              Cadastre-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/comparador"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Comparador
              </Link>
              <Button variant="default" size="sm" className="w-full">
                Cadastre-se
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;