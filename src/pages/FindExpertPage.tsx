
const FindExpertPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Trouver un Expert</h1>
        <p className="text-xl text-muted-foreground mb-8">
          La fonctionnalité de recherche d'experts par spécialisation sera bientôt disponible.
        </p>
        <p className="text-lg text-muted-foreground">
          Vous pourrez ici parcourir la liste complète des experts AREJUC et filtrer par leurs domaines de compétence.
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Liste des Spécialisations (à venir)</h2>
          <p className="text-muted-foreground">
            La liste détaillée des spécialisations que vous avez fournie sera intégrée ici pour permettre une recherche précise.
          </p>
          <ul className="mt-4 text-left max-w-md mx-auto list-disc list-inside text-muted-foreground">
            <li>Administration des biens</li>
            <li>Aéronautique</li>
            <li>Agriculture</li>
            <li>Architecture - Urbanisme</li>
            <li>Et bien d'autres...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FindExpertPage;
