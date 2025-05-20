
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Pour l'instant, une simple simulation de connexion
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Identifiant ou mot de passe incorrect.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto py-12 px-4 flex justify-center items-center min-h-[calc(100vh-12rem)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Connexion Administrateur</CardTitle>
            <CardDescription className="text-center">
              Ceci est une simulation. Utilisez admin/admin pour vous connecter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-muted-foreground mb-1">Identifiant</label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">Mot de passe</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="admin"
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Se connecter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-12rem)]">
      <h1 className="text-3xl font-bold mb-8 text-primary">Tableau de Bord Administrateur</h1>
      <p className="text-muted-foreground">
        Bienvenue sur le tableau de bord. Ici, vous pourrez bientôt ajouter, modifier et supprimer des experts.
      </p>
      {/* Les formulaires et listes d'experts seront ajoutés ici */}
    </div>
  );
};

export default AdminPage;
