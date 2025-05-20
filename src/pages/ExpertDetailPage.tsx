
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockExperts } from './FindExpertPage'; // Nous utiliserons les données mockées pour l'instant
import { Expert } from '@/types/expert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, FileText, MessageSquare, Star } from 'lucide-react';
import StarRating from '@/components/StarRating';
import { specializations } from '@/data/specializations';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ExpertDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  // Trouver l'expert. Dans une vraie application, cela viendrait d'un appel API.
  // Pour l'instant, nous cherchons dans les mockExperts.
  // Il faudra rendre mockExperts accessible globalement ou le passer via props/context plus tard
  // pour que les modifications de l'admin soient reflétées.
  const expert = mockExperts.find(exp => exp.id === id);

  if (!expert) {
    return (
      <div className="container mx-auto py-12 px-4 text-center min-h-[calc(100vh-12rem)]">
        <h1 className="text-2xl text-destructive">Expert non trouvé</h1>
        <p className="text-muted-foreground">L'expert que vous cherchez n'existe pas ou son profil n'est pas disponible.</p>
      </div>
    );
  }
  
  // Trouver le nom de la spécialisation principale
  const specialisationPrincipaleNom = specializations.find(s => s.id === expert.specialisationPrincipale)?.nom || expert.specialisationPrincipale;

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="items-center text-center border-b pb-6">
          <Avatar className="w-32 h-32 mb-4 border-4 border-primary">
            <AvatarImage src={expert.photoProfilUrl || 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=200&auto=format&fit=crop'} alt={`${expert.prenom} ${expert.nom}`} />
            <AvatarFallback>{expert.prenom.charAt(0)}{expert.nom.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl text-primary">{expert.prenom} {expert.nom}</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">{specialisationPrincipaleNom}</CardDescription>
          {expert.sousSpecialisations && expert.sousSpecialisations.length > 0 && (
            <p className="text-sm text-muted-foreground/80 mt-1">{expert.sousSpecialisations.join(', ')}</p>
          )}
        </CardHeader>
        <CardContent className="py-6 px-6 md:px-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-primary">Bio</h3>
            <p className="text-muted-foreground whitespace-pre-line">{expert.bio}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-primary">Certification</h3>
            {expert.cvUrl ? ( // cvUrl est utilisé pour la certification ici
                 <Dialog>
                  <DialogTrigger asChild>
                    <img 
                        src={expert.cvUrl} 
                        alt={`Certification de ${expert.prenom} ${expert.nom}`} 
                        className="rounded-md max-w-xs cursor-pointer hover:opacity-80 transition-opacity" 
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] md:max-w-[800px] bg-background text-foreground p-0">
                    <DialogHeader className="p-6 pb-0">
                      <DialogTitle>Certification de {expert.prenom} {expert.nom}</DialogTitle>
                    </DialogHeader>
                    <div className="p-6 max-h-[80vh] overflow-y-auto">
                      <img src={expert.cvUrl} alt={`Certification de ${expert.prenom} ${expert.nom}`} className="w-full h-auto rounded-md" />
                    </div>
                  </DialogContent>
                </Dialog>
            ) : (
              <p className="text-muted-foreground">Aucune image de certification disponible.</p>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-primary">Contact</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto justify-start border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300">
                <a href={`mailto:${expert.email}`} className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> {expert.email}
                </a>
              </Button>
              {expert.telephone && (
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto justify-start ml-0 sm:ml-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300">
                  <a href={`tel:${expert.telephone}`} className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> {expert.telephone}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-3 text-primary">Avis et Notation</h3>
            <div className="flex items-center mb-4">
              {expert.moyenneNotes !== undefined && expert.nombreAvis !== undefined && expert.nombreAvis > 0 ? (
                <>
                  <StarRating rating={expert.moyenneNotes} starSize={22} />
                  <span className="ml-2 text-md text-muted-foreground">({expert.moyenneNotes.toFixed(1)} sur {expert.nombreAvis} avis)</span>
                </>
              ) : (
                 <div className="flex items-center space-x-1">
                  <StarRating rating={0} starSize={22} />
                  <span className="text-sm text-muted-foreground">(Aucun avis pour le moment)</span>
                </div>
              )}
            </div>
            {/* Section pour laisser un commentaire et afficher les commentaires existants (à venir) */}
            <div className="p-4 bg-muted/30 rounded-md min-h-[80px]">
              <p className="text-sm text-muted-foreground">
                La section des commentaires et la possibilité de laisser un avis seront bientôt disponibles.
              </p>
            </div>
             <Button variant="link" size="sm" className="mt-3 text-purple-400 hover:text-pink-500 p-0 h-auto" disabled>
                <MessageSquare className="mr-2 h-4 w-4" /> Laisser un commentaire (bientôt)
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertDetailPage;
