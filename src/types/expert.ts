
export interface Expert {
  id: string;
  nom: string;
  prenom: string;
  photoProfilUrl: string;
  bio: string;
  cvUrl: string; // Utilisé pour CV ou Image de certification
  certificatUrl?: string; // Champ spécifique pour l'image de certification si différent du CV
  specialisationPrincipale: string;
  sousSpecialisations?: string[];
  email: string;
  telephone?: string;
  moyenneNotes?: number;
  nombreAvis?: number;
  commentaires?: Commentaire[]; // Pour stocker les commentaires côté client
}

export interface Commentaire {
  id: string;
  expertId: string; // Lier le commentaire à un expert
  auteur: string;
  contenu: string;
  date: string; // ou Date
  note: number; // de 1 à 5
}
