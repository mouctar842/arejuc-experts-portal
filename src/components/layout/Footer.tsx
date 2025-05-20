
const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8 text-center text-sm text-foreground/60">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} AREJUC. Tous droits réservés.</p>
        <p className="mt-1">Association Régionale des Experts Juridiques du Centre</p>
      </div>
    </footer>
  );
};

export default Footer;
