import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadModal = ({ isOpen, onClose }: LeadModalProps) => {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [goal, setGoal] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setContactInfo("");
        setGoal("");
      }, 300);
    }
  }, [isOpen]);

  // Auto-close after success message
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !contactInfo.trim() || !goal) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: name.trim(),
        contact_info: contactInfo.trim(),
        goal: goal,
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar os seus dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading font-bold text-center mb-2">
                Quer ajuda personalizada para planear a sua jornada?
              </DialogTitle>
              <p className="text-sm text-muted-foreground text-center">
                Deixe os seus dados e a nossa equipa de especialistas entrará em contacto para
                oferecer uma consultoria gratuita.
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="O seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">E-mail ou WhatsApp</Label>
                <Input
                  id="contact"
                  placeholder="email@exemplo.com ou +351 900 000 000"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Qual o seu principal objetivo?</Label>
                <Select value={goal} onValueChange={setGoal} required>
                  <SelectTrigger id="goal">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tourism">Planear uma viagem de turismo</SelectItem>
                    <SelectItem value="relocate">Mudar-me para outro país</SelectItem>
                    <SelectItem value="research">Apenas a pesquisar por enquanto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? "A enviar..." : "Receber Contacto Gratuito"}
              </Button>

              <button
                type="button"
                onClick={onClose}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Agora não, obrigado
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-heading font-bold">Obrigado!</DialogTitle>
            <p className="text-muted-foreground">
              Recebemos os seus dados. A nossa equipa entrará em contacto em breve.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadModal;
