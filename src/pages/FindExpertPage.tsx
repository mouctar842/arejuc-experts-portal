import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ExpertCard from '@/components/ExpertCard';
import { Expert } from '@/types/expert';
import { specializations } from '@/data/specializations'; // Import des spécialisations
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface FindExpertPageProps {
  experts: Expert[];
}

const FindExpertPage: React.FC<FindExpertPageProps> = ({ experts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | undefined>(undefined);

  const filteredExperts = useMemo(() => {
    return experts.filter(expert => {
      const nameMatches = `${expert.prenom} ${expert.nom}`.toLowerCase().includes(searchTerm.toLowerCase());
      const specializationMatches = selectedSpecialization ? expert.specialisationPrincipale === selectedSpecialization : true;
      // Pour une recherche plus avancée, on pourrait aussi chercher dans les sous-spécialisations, bio, etc.
      return nameMatches && specializationMatches;
    });
  }, [experts, searchTerm, selectedSpecialization]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSpecializationChange = (value: string) => {
    setSelectedSpecialization(value === "all" ? undefined : value);
  };

  const getSpecializationName = (id: string) => {
    return specializations.find(s => s.id === id)?.nom || id;
  };
  
  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary lg:text-5xl">Trouvez Votre Expert</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Parcourez notre réseau d'experts qualifiés et trouvez celui qui correspond à vos besoins.
        </p>
      </header>

      <div className="mb-8 p-6 bg-card border rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label htmlFor="search-term" className="block text-sm font-medium text-muted-foreground mb-1">
              Rechercher par nom
            </label>
            <div className="relative">
              <Input
                id="search-term"
                type="text"
                placeholder="Nom de l'expert..."
                value={searchTerm}
                onChange={handleSearch}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div>
            <label htmlFor="specialization-filter" className="block text-sm font-medium text-muted-foreground mb-1">
              Filtrer par spécialisation
            </label>
            <Select onValueChange={handleSpecializationChange} defaultValue="all">
              <SelectTrigger id="specialization-filter">
                <SelectValue placeholder="Toutes les spécialisations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les spécialisations</SelectItem>
                {specializations.map(spec => (
                  <SelectItem key={spec.id} value={spec.id}>{spec.nom}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredExperts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map(expert => (
            <ExpertCard 
              key={expert.id} 
              expert={{
                ...expert,
                // S'assurer que specialisationPrincipale est le nom pour affichage si stocké comme ID
                specialisationPrincipale: getSpecializationName(expert.specialisationPrincipale)
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">Aucun expert ne correspond à vos critères de recherche.</p>
          { (searchTerm || selectedSpecialization) &&
            <Button variant="link" onClick={() => { setSearchTerm(''); setSelectedSpecialization(undefined); }} className="mt-4">
              Réinitialiser les filtres
            </Button>
          }
        </div>
      )}
    </div>
  );
};

export default FindExpertPage;
