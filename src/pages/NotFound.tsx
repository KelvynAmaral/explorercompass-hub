import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-9xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="font-heading font-semibold text-3xl mb-4">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" asChild className="gap-2">
            <Link to="/">
              <Home className="h-5 w-5" />
              Ir para o Início
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="h-5 w-5" />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;