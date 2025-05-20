
export interface Specialization {
  id: string;
  nom: string;
  sousSpecialisations?: { id: string; nom: string }[];
}

export const specializations: Specialization[] = [
  { 
    id: "admin-biens", 
    nom: "Administration des biens", 
    sousSpecialisations: [
      { id: "syndic-faillite", nom: "Syndic de faillite" },
      { id: "liquidateurs-judiciaires", nom: "Liquidateurs judiciaires" },
      { id: "sequestres-judiciaires", nom: "Séquestres judiciaires" },
    ] 
  },
  { id: "aeronautique", nom: "Aéronautique" },
  { id: "agriculture", nom: "Agriculture" },
  { id: "architecture-urbanisme", nom: "Architecture - Urbanisme" },
  { id: "assurance", nom: "Assurance" },
  { id: "audit-controle-finances", nom: "Audit - Contrôle des finances publiques" },
  { id: "avaries", nom: "Avaries" },
  { id: "banque-microfinance", nom: "Banque et microfinance" },
  { id: "batiment", nom: "Bâtiment" },
  { id: "bilinguisme", nom: "Bilinguisme" },
  { id: "centrale-thermique", nom: "Centrale thermique" },
  { id: "comptabilite", nom: "Comptabilité" },
  { id: "criminalite-financiere", nom: "Criminalité financière" },
  { id: "decentralisation-dev-local", nom: "Décentralisation et développement local" },
  { 
    id: "electricite-genie-electrique", 
    nom: "Électricité et génie électrique",
    sousSpecialisations: [
      { id: "electricite", nom: "Électricité" },
      { id: "electricite-incendie", nom: "Électricité incendie" },
      { id: "electricite-materiels-industriels", nom: "Électricité et matériels industriels" },
      { id: "electro-mecanique", nom: "Électro-mécanique" },
    ]
  },
  { id: "environnement", nom: "Environnement" },
  { id: "finance", nom: "Finance" },
  { id: "fiscalite", nom: "Fiscalité" },
  { id: "foncier", nom: "Foncier" },
  { id: "genie-civil-tp", nom: "Génie civil et travaux publics" },
  { id: "geometre-cadastre-topographe", nom: "Géomètre - Cadastre - Topographe" },
  { id: "gestion-evaluation-projets", nom: "Gestion et évaluation des projets" },
  { 
    id: "immobilier", 
    nom: "Immobilier",
    sousSpecialisations: [
      { id: "diagnostic-immobilier", nom: "Diagnostic immobilier" },
      { id: "evaluation-immobiliere-copropriete", nom: "Évaluation immobilière & copropriété" },
    ]
  },
  { id: "informatique-cybercriminalite", nom: "Informatique et cybercriminalité" },
  { id: "marches-publics", nom: "Marchés publics" },
  { id: "mecanique-automobile", nom: "Mécanique automobile" },
  { 
    id: "medecine", 
    nom: "Médecine",
    sousSpecialisations: [
      { id: "accidents-medicaux", nom: "Accidents médicaux" },
      { id: "med-aeronautique", nom: "Aéronautique (Médecine)" }, // Renamed to avoid conflict
      { id: "cardiologie", nom: "Cardiologie" },
      { id: "chirurgie-buccodentaire", nom: "Chirurgie buccodentaire" },
      { id: "chirurgie-orthopedique-traumatologie", nom: "Chirurgie orthopédique et traumatologie" },
      { id: "gynecologie", nom: "Gynécologie" },
      { id: "medecine-legale", nom: "Médecine légale" },
      { id: "radiologie-imagerie-medicale", nom: "Radiologie et imagerie médicale" },
      { id: "reparation-dommage-corporel", nom: "Réparation du dommage corporel" },
      { id: "neurochirurgie", nom: "Neurochirurgie" },
      { id: "ophtalmologie", nom: "Ophtalmologie" },
      { id: "pediatrie", nom: "Pédiatrie" },
      { id: "psychologie", nom: "Psychologie (Médecine)" }, // Renamed
    ]
  },
  { id: "pharmacologie-toxicologie", nom: "Pharmacologie et toxicologie cliniques" },
  { id: "police-scientifique", nom: "Police scientifique" },
  { id: "prevoyance-sociale", nom: "Prévoyance sociale" },
  { id: "propriete-intellectuelle", nom: "Propriété intellectuelle" },
  { id: "psychologie-legale-criminelle", nom: "Psychologie légale et criminelle" },
  { id: "ressources-humaines", nom: "Ressources humaines" },
  { 
    id: "sciences-lettre", 
    nom: "Sciences de la lettre", // Corrected typo "lettre" assuming it meant something general
    sousSpecialisations: [
      { id: "sciences-geotechniques-hydrotechniques", nom: "Sciences géotechniques et hydrotechniques" },
      { id: "hydro-electricite", nom: "Hydro-électricité" },
      { id: "hydro-ecologie", nom: "Hydro-écologie" }, // Corrected typo "eologie"
    ]
  },
  { 
    id: "securite", 
    nom: "Sécurité",
    sousSpecialisations: [
      { id: "securite-prevention", nom: "Sécurité et prévention" },
      { id: "securite-sociale", nom: "Sécurité sociale" },
      { id: "securite-vols-supervision", nom: "Sécurité des vols et supervision" },
    ]
  },
  { id: "telecommunication", nom: "Télécommunication" },
  { id: "terrorisme", nom: "Terrorisme" },
  { id: "traducteur-interprete", nom: "Traducteur - Interprète" },
];

export const getAllSpecializations = () => specializations;

export const getSpecializationById = (id: string) => specializations.find(s => s.id === id);

