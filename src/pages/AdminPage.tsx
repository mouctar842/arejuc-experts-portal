
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AddExpertForm from '@/components/AddExpertForm'; // Importer le formulaire
import { Expert } from '@/types/expert'; // Importer le type Expert

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';

interface AdminPageProps {
  experts: Expert[];
  setExperts: React.Dispatch<React.SetStateAction<Expert[]>>;
}

const AdminPage: React.FC<AdminPageProps> = ({ experts, setExperts }) => {
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

  const handleAddExpert = (newExpertData: Omit<Expert, 'id' | 'moyenneNotes' | 'nombreAvis' | 'commentaires'>) => {
    const newExpert: Expert = {
      ...newExpertData,
      id: String(Date.now() + Math.random().toString(36).substring(2,9)), // Générer un ID unique simple
      moyenneNotes: undefined,
      nombreAvis: undefined,
      commentaires: [],
    };
    setExperts(prevExperts => [...prevExperts, newExpert]);
    alert('Expert ajouté avec succès !'); // Ou utiliser un toast
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
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Ajouter un Nouvel Expert</CardTitle>
        </CardHeader>
        <CardContent>
          <AddExpertForm onAddExpert={handleAddExpert} />
        </CardContent>
      </Card>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Liste des Experts ({experts.length})</CardTitle>
          <CardDescription>Visualisez et gérez les experts existants.</CardDescription>
        </CardHeader>
        <CardContent>
          {experts.length === 0 ? (
            <p className="text-muted-foreground">Aucun expert n'est actuellement enregistré.</p>
          ) : (
            <ul className="space-y-4">
              {experts.map(expert => (
                <li key={expert.id} className="p-4 border rounded-md shadow-sm flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{expert.prenom} {expert.nom}</h3>
                    <p className="text-sm text-muted-foreground">{expert.specialisationPrincipale}</p>
                  </div>
                  <div>
                    {/* TODO: Boutons Modifier et Supprimer */}
                    <Button variant="outline" size="sm" className="mr-2" disabled>Modifier (bientôt)</Button>
                    <Button variant="destructive" size="sm" disabled>Supprimer (bientôt)</Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;

