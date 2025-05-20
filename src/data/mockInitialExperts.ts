
import { Expert } from '@/types/expert';

export const mockInitialExperts: Expert[] = [
  {
    id: '1',
    nom: 'Dupont',
    prenom: 'Jean',
    photoProfilUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    bio: 'Expert en Bâtiment avec 10 ans d\'expérience dans la gestion de projets de construction et la rénovation. Passionné par les structures durables et l\'innovation dans le BTP.',
    cvUrl: 'https://images.unsplash.com/photo-1580408768001-79d659ce0352?q=80&w=600&auto=format&fit=crop', // Certification image
    specialisationPrincipale: 'batiment',
    sousSpecialisations: ['Gestion de projet', 'Rénovation énergétique'],
    email: 'jean.dupont@example.com',
    telephone: '0123456789',
    moyenneNotes: 4.5,
    nombreAvis: 25,
    commentaires: [
      { id: 'c1', expertId: '1', auteur: 'Alice', contenu: 'Très professionnel et compétent.', date: '2024-05-10', note: 5 },
      { id: 'c2', expertId: '1', auteur: 'Bob', contenu: 'Bonne communication, projet terminé à temps.', date: '2024-05-15', note: 4 },
    ],
  },
  {
    id: '2',
    nom: 'Martin',
    prenom: 'Sophie',
    photoProfilUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    bio: 'Spécialiste en Informatique et Cybercriminalité, avec un focus sur la sécurité des systèmes d\'information et la protection des données. Auditrice certifiée.',
    cvUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop', // Certification image
    specialisationPrincipale: 'informatique-cybercriminalite',
    email: 'sophie.martin@example.com',
    moyenneNotes: 4.8,
    nombreAvis: 18,
    commentaires: [
      { id: 'c3', expertId: '2', auteur: 'Charles', contenu: 'Excellente expertise en cybersécurité.', date: '2024-04-20', note: 5 },
    ],
  },
  // Ajoutez d'autres experts initiaux si nécessaire
];

