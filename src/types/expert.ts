
export interface Expert {
  id: string;
  nom: string;
  prenom: string;
  photoProfilUrl: string;
  bio: string;
  cvUrl: string; // URL vers l'image du CV
  specialisationPrincipale: string;
  sousSpecialisations?: string[];
  email: string;
  telephone?: string;
  moyenneNotes?: number; // Sera calculée plus tard
  nombreAvis?: number; // Sera calculé plus tard
}

// Pour les commentaires, nous aurons besoin d'un type séparé, à intégrer avec Supabase
export interface Commentaire {
  id: string;
  expertId: string;
  auteur: string;
  contenu: string;
  date: string; // ou Date
  note: number; // de 1 à 5
}

