
import React, { useState, useMemo } from 'react';
import { Expert } from '@/types/expert';
import ExpertCard from '@/components/ExpertCard';
import { specializations, Specialization } from '@/data/specializations';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Données fictives pour les experts - À remplacer par des données de Supabase
const mockExperts: Expert[] = [
  {
    id: '1',
    nom: 'Dupont',
    prenom: 'Jean',
    photoProfilUrl: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=200&auto=format&fit=crop', // Placeholder
    bio: 'Expert en droit des affaires avec plus de 10 ans d\'expérience. Spécialisé dans les fusions et acquisitions et le contentieux commercial. Passionné par la résolution de problèmes complexes pour les entreprises.',
    cvUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop', // Placeholder CV image
    specialisationPrincipale: 'Droit des Affaires',
    sousSpecialisations: ['Fusions et acquisitions', 'Contentieux commercial'],
    email: 'jean.dupont@example.com',
    telephone: '0123456789',
    moyenneNotes: 4.5,
    nombreAvis: 23,
  },
  {
    id: '2',
    nom: 'Martin',
    prenom: 'Sophie',
    photoProfilUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200&auto=format&fit=crop', // Placeholder
    bio: 'Spécialiste en droit immobilier, accompagnant particuliers et professionnels dans leurs projets. Forte expérience en transactions immobilières et baux commerciaux.',
    cvUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop', // Placeholder CV image
    specialisationPrincipale: 'Immobilier',
    sousSpecialisations: ['Transactions immobilières', 'Baux commerciaux'],
    email: 'sophie.martin@example.com',
    telephone: '0987654321',
    moyenneNotes: 4.8,
    nombreAvis: 42,
  },
   {
    id: '3',
    nom: 'Bernard',
    prenom: 'Luc',
    photoProfilUrl: 'https://via.placeholder.com/200/FFA500/FFFFFF?Text=LB',
    bio: 'Expert en Informatique et Cybercriminalité. Aide les entreprises à sécuriser leurs systèmes et à répondre aux incidents de sécurité. Ancien consultant pour de grandes entreprises.',
    cvUrl: 'https://via.placeholder.com/600x800/E0E0E0/000000?Text=CV+Luc+Bernard',
    specialisationPrincipale: 'Informatique et cybercriminalité',
    email: 'luc.bernard@example.com',
    telephone: '0600112233',
    moyenneNotes: 4.2,
    nombreAvis: 15,
  },
  {
    id: '4',
    nom: 'Petit',
    prenom: 'Alice',
    photoProfilUrl: 'https://via.placeholder.com/200/FFC0CB/000000?Text=AP',
    bio: 'Passionnée par le droit de la Propriété Intellectuelle, Alice protège les créations et innovations. Elle conseille sur les brevets, marques et droits d\'auteur.',
    cvUrl: 'https://via.placeholder.com/600x800/E0E0E0/000000?Text=CV+Alice+Petit',
    specialisationPrincipale: 'Propriété intellectuelle',
    email: 'alice.petit@example.com',
    // Pas de téléphone pour cet expert exemple
    moyenneNotes: 4.9,
    nombreAvis: 33,
  }
];

// Adapter les données fictives pour qu'elles correspondent aux IDs des spécialisations
mockExperts[0].specialisationPrincipale = 'audit-controle-finances'; // ID for 'Audit - Contrôle des finances publiques'
mockExperts[1].specialisationPrincipale = 'immobilier'; // ID for 'Immobilier'
mockExperts[2].specialisationPrincipale = 'informatique-cybercriminalite'; // ID for 'Informatique et cybercriminalité'
mockExperts[3].specialisationPrincipale = 'propriete-intellectuelle'; // ID for 'Propriété intellectuelle'


const FindExpertPage = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSpecializationChange = (value: string) => {
    setSelectedSpecialization(value === 'all' ? undefined : value);
  };

  const filteredExperts = useMemo(() => {
    return mockExperts.filter(expert => {
      const matchesSpecialization = selectedSpecialization ? expert.specialisationPrincipale === selectedSpecialization : true;
      const matchesSearchTerm = searchTerm.toLowerCase() 
        ? `${expert.prenom} ${expert.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          expert.specialisationPrincipale.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (expert.sousSpecialisations && expert.sousSpecialisations.join(' ').toLowerCase().includes(searchTerm.toLowerCase()))
        : true;
      return matchesSpecialization && matchesSearchTerm;
    });
  }, [selectedSpecialization, searchTerm]);

  const currentSpecializationName = selectedSpecialization 
    ? specializations.find(s => s.id === selectedSpecialization)?.nom 
    : "Toutes les spécialisations";

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Trouver un Expert</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sélectionnez une spécialisation pour affiner votre recherche ou recherchez par nom.
        </p>
      </div>

      <div className="mb-10 p-6 bg-card rounded-lg shadow-lg sticky top-20 z-40 backdrop-blur-md bg-opacity-80 border border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label htmlFor="specialization-select" className="block text-sm font-medium text-muted-foreground mb-1">
              Spécialisation
            </label>
            <Select onValueChange={handleSpecializationChange} defaultValue="all">
              <SelectTrigger id="specialization-select" className="w-full">
                <SelectValue placeholder="Choisir une spécialisation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les spécialisations</SelectItem>
                {specializations.map((spec: Specialization) => (
                  <SelectItem key={spec.id} value={spec.id}>
                    {spec.nom}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="search-term" className="block text-sm font-medium text-muted-foreground mb-1">
              Rechercher par nom ou mot-clé
            </label>
            <div className="relative">
              <Input
                id="search-term"
                type="text"
                placeholder="Nom, prénom, sous-spécialisation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
      
      {selectedSpecialization && filteredExperts.length > 0 && (
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
          Experts en "{currentSpecializationName}"
        </h2>
      )}
       {!selectedSpecialization && searchTerm && filteredExperts.length > 0 && (
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
          Résultats de la recherche pour "{searchTerm}"
        </h2>
      )}


      {filteredExperts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert) => (
            <ExpertCard key={expert.id} expert={{
              ...expert,
              // Assurez-vous que la spécialisation principale correspond à un nom lisible si vous utilisez des ID
              specialisationPrincipale: specializations.find(s => s.id === expert.specialisationPrincipale)?.nom || expert.specialisationPrincipale
            }} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">
            Aucun expert ne correspond à vos critères de recherche pour le moment.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Essayez d'élargir votre recherche ou de sélectionner une autre spécialisation.
          </p>
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Pour une gestion complète des experts, commentaires et notes, l'intégration de Supabase est requise.
        </p>
      </div>
    </div>
  );
};

export default FindExpertPage;

