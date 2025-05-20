
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., send to an API endpoint)
    alert("Message envoyé ! (Simulation)");
  };

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Contactez-Nous</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Nous sommes à votre écoute pour toute question ou demande d'information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg border border-border shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Envoyer un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nom complet</label>
              <Input type="text" id="name" name="name" required className="bg-input"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Adresse e-mail</label>
              <Input type="email" id="email" name="email" required  className="bg-input"/>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Sujet</label>
              <Input type="text" id="subject" name="subject" required className="bg-input"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <Textarea id="message" name="message" rows={5} required className="bg-input"/>
            </div>
            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              Envoyer le message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-primary">Nos Coordonnées</h2>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border">
            <Mail className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-foreground">Email</h3>
              <a href="mailto:contact@arejuc.org" className="text-muted-foreground hover:text-purple-400 transition-colors">
                contact@arejuc.org (Exemple)
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border">
            <Phone className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-foreground">Téléphone</h3>
              <p className="text-muted-foreground">+33 X XX XX XX XX (Exemple)</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-card border border-border">
            <MapPin className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-foreground">Adresse</h3>
              <p className="text-muted-foreground">
                123 Rue de l'Expertise<br />
                Ville, Code Postal (Exemple)<br />
                Région Centre, France
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
