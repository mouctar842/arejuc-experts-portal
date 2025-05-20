
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Expert } from '@/types/expert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import StarRating from './StarRating';

interface ExpertCardProps {
  expert: Expert;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const bioDisplayLength = 100;

  const toggleBio = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêche la navigation lors du clic sur "Voir plus/moins"
    e.preventDefault(); // Empêche le comportement par défaut du lien si Link est parent
    setShowFullBio(!showFullBio);
  };

  const displayedBio = showFullBio ? expert.bio : `${expert.bio.substring(0, bioDisplayLength)}${expert.bio.length > bioDisplayLength ? '...' : ''}`;

  // Empêcher la propagation des clics sur les éléments interactifs pour ne pas déclencher la navigation de la carte
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm hover:shadow-purple-400/20 transition-shadow duration-300 flex flex-col">
      <Link to={`/expert/${expert.id}`} className="flex flex-col flex-grow contents-link"> {/* Wrap content for navigation */}
        <CardHeader className="items-center text-center">
          <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
            <AvatarImage src={expert.photoProfilUrl || 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=200&auto=format&fit=crop'} alt={`${expert.prenom} ${expert.nom}`} />
            <AvatarFallback>{expert.prenom.charAt(0)}{expert.nom.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl text-primary">{expert.prenom} {expert.nom}</CardTitle>
          <p className="text-sm text-muted-foreground">{expert.specialisationPrincipale}</p>
          {expert.sousSpecialisations && expert.sousSpecialisations.length > 0 && (
            <p className="text-xs text-muted-foreground/80 mt-1">{expert.sousSpecialisations.join(', ')}</p>
          )}
        </CardHeader>
        <CardContent className="text-sm text-center flex-grow">
          <p className="text-muted-foreground mb-3">
            {displayedBio}
            {expert.bio.length > bioDisplayLength && (
              <Button variant="link" size="sm" onClick={toggleBio} className="text-purple-400 hover:text-pink-500 p-0 ml-1 h-auto">
                {showFullBio ? 'Voir moins' : 'Voir plus'}
              </Button>
            )}
          </p>
          
          <div className="flex justify-center my-3">
          {expert.moyenneNotes !== undefined && expert.nombreAvis !== undefined ? (
              <div className="flex items-center space-x-1">
                <StarRating rating={expert.moyenneNotes} starSize={18} />
                <span className="text-xs text-muted-foreground">({expert.nombreAvis} avis)</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <StarRating rating={0} starSize={18} />
                <span className="text-xs text-muted-foreground">(Aucun avis)</span>
              </div>
            )}
          </div>

          <div className="flex justify-around items-center my-4 space-x-2" onClick={stopPropagation}>
            <Button variant="outline" size="sm" asChild className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300">
              <a href={`mailto:${expert.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
            {expert.telephone && (
              <Button variant="outline" size="sm" asChild className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300">
                <a href={`tel:${expert.telephone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Téléphone
                </a>
              </Button>
            )}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="w-full text-purple-400 hover:text-pink-500 hover:bg-purple-400/5" onClick={stopPropagation}>
                <FileText className="mr-2 h-4 w-4" /> Voir le CV / Certification
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] md:max-w-[800px] bg-background text-foreground p-0">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle>CV / Certification de {expert.prenom} {expert.nom}</DialogTitle>
              </DialogHeader>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {expert.cvUrl ? ( // cvUrl utilisé pour CV ou Certification
                  <img src={expert.cvUrl} alt={`CV / Certification de ${expert.prenom} ${expert.nom}`} className="w-full h-auto rounded-md" />
                ) : (
                  <p className="text-muted-foreground">Le document n'est pas disponible.</p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Link>
      <CardFooter className="flex-col items-start pt-4 border-t border-border/40 mt-auto">
        <h4 className="text-md font-semibold mb-2 text-primary">Commentaires</h4>
        <div className="w-full p-3 bg-muted/30 rounded-md min-h-[50px]">
          <p className="text-xs text-muted-foreground">
            Les commentaires seront visibles sur la page de profil de l'expert. (Simulation sans base de données)
          </p>
        </div>
        <Button variant="link" size="sm" className="mt-2 text-purple-400 hover:text-pink-500 p-0 h-auto" disabled>
          <MessageSquare className="mr-2 h-4 w-4" /> Laisser un commentaire (bientôt)
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExpertCard;
