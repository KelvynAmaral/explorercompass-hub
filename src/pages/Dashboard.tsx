import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, MapPin, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ display_name: string | null; email: string | null } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("display_name, email")
        .eq("id", user.id)
        .maybeSingle();

      setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          <Skeleton className="h-12 w-64" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    );
  }

  const displayName = profile?.display_name || profile?.email?.split("@")[0] || "Utilizador";

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-b from-background via-background to-accent/5">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Meu Painel
        </h1>

        {/* Cartão de Boas-Vindas */}
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-heading font-semibold">
              Bem-vindo(a) de volta, {displayName}!
            </h2>
          </CardContent>
        </Card>

        {/* Cartão Minhas Informações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Minhas Informações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <div>
                <p className="text-sm text-muted-foreground">Nome</p>
                <p className="text-lg font-medium">{profile?.display_name || "Não informado"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-medium">{profile?.email}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        {/* Cartão Acesso Rápido */}
        <Card>
          <CardHeader>
            <CardTitle>Ferramentas</CardTitle>
            <CardDescription>Acesso rápido às funcionalidades principais</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <Button
              variant="default"
              size="lg"
              className="h-24 flex-col gap-2"
              onClick={() => navigate("/comparador")}
            >
              <Scale className="h-8 w-8" />
              <span className="text-base">Comparador de Cidades</span>
            </Button>
            <Button
              variant="default"
              size="lg"
              className="h-24 flex-col gap-2"
              onClick={() => navigate("/")}
            >
              <MapPin className="h-8 w-8" />
              <span className="text-base">Explorar Destinos</span>
            </Button>
          </CardContent>
        </Card>

        {/* Cartão Próximas Funcionalidades */}
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Meus Favoritos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Em breve, as suas cidades favoritas aparecerão aqui. Comece a explorar e prepare-se para guardar os seus destinos de sonho!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
