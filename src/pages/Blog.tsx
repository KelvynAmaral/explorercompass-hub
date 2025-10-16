import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Article {
  id: string;
  title: string;
  slug: string;
  publish_date: string;
  hero_image: string;
  excerpt: string;
  reading_time: number;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("publish_date", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Blog ExplorerCompass
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Guias, dicas e análises para a sua próxima jornada global.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-10 w-32" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum artigo publicado ainda. Volte em breve!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={article.hero_image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h2 className="text-xl font-heading font-semibold mb-3 line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-2">
                        {format(new Date(article.publish_date), "dd 'de' MMMM 'de' yyyy", {
                          locale: ptBR,
                        })}{" "}
                        · {article.reading_time} min de leitura
                      </p>
                      <p className="text-foreground/80 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <Link to={`/blog/${article.slug}`}>
                        <Button className="w-full">Ler Mais</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
