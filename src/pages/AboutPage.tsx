
const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">À Propos de l'AREJUC</h1>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            L'Association Régionale des Experts Juridiques du Centre (AREJUC) a été fondée avec la conviction profonde que l'accès à une expertise juridique de qualité est un pilier fondamental d'une société juste et équilibrée.
          </p>
          <p>
            <strong>Notre Mission :</strong> Promouvoir l'excellence, l'intégrité et la compétence au sein de la profession d'expert juridique dans la région Centre. Nous nous engageons à :
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Fédérer les experts juridiques qualifiés et reconnus pour leur savoir-faire.</li>
            <li>Faciliter la mise en relation entre les justiciables, les entreprises, les institutions et nos experts membres.</li>
            <li>Contribuer à la formation continue et au partage des connaissances entre professionnels du droit.</li>
            <li>Veiller au respect des règles déontologiques et à la qualité des prestations fournies.</li>
          </ul>
          <p>
            <strong>Nos Valeurs :</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong className="text-foreground">Excellence :</strong> Nous visons le plus haut niveau de compétence et de rigueur dans toutes nos actions.</li>
            <li><strong className="text-foreground">Intégrité :</strong> L'honnêteté, la transparence et l'éthique sont au cœur de notre démarche.</li>
            <li><strong className="text-foreground">Indépendance :</strong> Nos experts exercent leur mission en toute objectivité et impartialité.</li>
            <li><strong className="text-foreground">Engagement :</strong> Nous sommes dévoués à servir l'intérêt général et à renforcer la confiance dans le système judiciaire.</li>
          </ul>
          <p>
            L'AREJUC se positionne comme un acteur clé dans le paysage juridique régional, offrant une plateforme de référence pour tous ceux qui recherchent une expertise fiable et pointue. Nous sommes fiers de mettre en valeur les talents de nos membres et de contribuer activement à une meilleure administration de la justice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
