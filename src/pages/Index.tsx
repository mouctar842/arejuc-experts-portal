
import { Button } from "@/components/ui/button";
// ... import Input from "@/components/ui/input"; // No longer needed here
import { Search, ChevronRight, Users, Lock } from "lucide-react"; // Added Users, Lock
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 lg:py-48 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div> {/* Dark overlay with blur */}
        <div className="relative z-10 container px-4 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
              AREJUC
            </span>
            <span className="block text-white">L'Excellence Juridique au Centre de Vos Besoins</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            L'Association Régionale des Experts Juridiques du Centre (AREJUC) regroupe les meilleurs spécialistes pour vous accompagner avec intégrité et compétence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/trouver-expert">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white w-full sm:w-auto">
                Trouver un Expert <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/a-propos">
              <Button size="lg" variant="outline" className="text-white border-slate-400 hover:bg-white/10 hover:text-white w-full sm:w-auto">
                En savoir plus sur AREJUC
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez un large éventail de spécialisations juridiques pour répondre à toutes vos problématiques.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Droit des Affaires', 'Droit Immobilier', 'Droit Pénal', 'Droit du Travail', 'Propriété Intellectuelle', 'Droit Numérique'].map((spec) => (
              <div key={spec} className="p-6 border border-border rounded-lg bg-card hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2 text-primary">{spec}</h3>
                <p className="text-muted-foreground text-sm">
                  Nos experts vous conseillent et défendent vos intérêts dans le domaine du {spec.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/trouver-expert">
              <Button variant="link" className="text-lg text-purple-400 hover:text-pink-500">
                Voir toutes les spécialisations <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* New Stylish Section - "Rejoignez Notre Communauté" */}
      <section className="py-16 md:py-24 bg-secondary/70">
        <div className="container px-4 text-center">
           <Users className="mx-auto h-16 w-16 text-purple-400 mb-6" />
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Rejoignez Notre Communauté d'Experts</h2>
           <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
             AREJUC est plus qu'une association, c'est un réseau de professionnels passionnés, dédiés à l'excellence et au partage de connaissances. Ensemble, faisons progresser l'expertise juridique.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white w-full sm:w-auto">
                    Devenir Membre
                </Button>
             </Link>
             <Link to="/a-propos">
                <Button size="lg" variant="outline" className="text-white border-slate-400 hover:bg-white/10 hover:text-white w-full sm:w-auto">
                    Nos Valeurs
                </Button>
            </Link>
           </div>
        </div>
      </section>

      {/* About AREJUC Concise */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">L'AREJUC en Bref</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center text-lg text-muted-foreground space-y-4">
            <p>
              L'Association Régionale des Experts Juridiques du Centre (AREJUC) est une organisation dédiée à la promotion de l'excellence et de l'éthique dans le domaine de l'expertise juridique.
            </p>
            <p>
              Notre mission est de fédérer les experts qualifiés, de faciliter l'accès à leurs services, et de contribuer au développement des compétences juridiques dans la région Centre. Nous mettons un point d'honneur à valoriser le savoir-faire de nos membres pour garantir des prestations de haute qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link to="/a-propos">
                <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10 hover:text-purple-300 w-full sm:w-auto">
                    Découvrir notre histoire et nos valeurs
                </Button>
                </Link>
                <Link to="/admin">
                    <Button className="bg-slate-700 hover:bg-slate-600 text-white w-full sm:w-auto">
                        <Lock className="mr-2 h-4 w-4" /> Espace Administrateur
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

