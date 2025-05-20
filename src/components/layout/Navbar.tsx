
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors" onClick={onClick}>
      Accueil
    </Link>
    <Link to="/trouver-expert" className="text-foreground/80 hover:text-foreground transition-colors" onClick={onClick}>
      Trouver un expert
    </Link>
    <Link to="/a-propos" className="text-foreground/80 hover:text-foreground transition-colors" onClick={onClick}>
      À propos
    </Link>
    <Link to="/contact" className="text-foreground/80 hover:text-foreground transition-colors" onClick={onClick}>
      Contact
    </Link>
  </>
);

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            AREJUC
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-8 flex flex-col space-y-4">
                <NavLinks onClick={closeSheet} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
