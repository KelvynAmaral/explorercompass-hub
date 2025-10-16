import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft } from "lucide-react";

interface Article {
  id: string;
  title: string;
  slug: string;
  publish_date: string;
  hero_image: string;
  content: string;
  reading_time: number;
}

const BlogArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) {
        console.error("Error fetching article:", error);
      } else if (!data) {
        navigate("/blog");
      } else {
        setArticle(data);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16 pb-16">
          <div className="container mx-auto max-w-4xl px-4">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-6 w-64 mb-8" />
            <Skeleton className="h-96 w-full mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-2" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 pb-16">
        <article className="container mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Button>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
              {article.title}
            </h1>
            <p className="text-muted-foreground">
              {format(new Date(article.publish_date), "dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}{" "}
              · {article.reading_time} min de leitura
            </p>
          </header>

          {/* Hero Image */}
          <img
            src={article.hero_image}
            alt={article.title}
            className="w-full h-auto rounded-lg mb-8 shadow-lg"
          />

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-4 prose-li:my-2
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
              prose-td:p-3 prose-td:border-b prose-td:border-border
              prose-tr:even:bg-muted/30"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA Card */}
          <Card className="mt-12 bg-gradient-to-br from-highlight/10 to-highlight/5 border-highlight/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">
                Gostou da análise? Leve o seu planeamento para o próximo nível.
              </h2>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                Na nossa plataforma, pode comparar estes custos com dezenas de outras
                cidades, guardar os seus favoritos e muito mais. Crie a sua conta
                gratuita!
              </p>
              <Button
                size="lg"
                className="bg-highlight hover:bg-highlight/90 text-highlight-foreground"
                onClick={() => navigate("/auth")}
              >
                Começar a Planear (Grátis)
              </Button>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
