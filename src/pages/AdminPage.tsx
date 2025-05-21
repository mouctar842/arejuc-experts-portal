import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AddExpertForm from '@/components/AddExpertForm';
import { Expert } from '@/types/expert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from 'lucide-react';

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
  const [expertToDelete, setExpertToDelete] = useState<Expert | null>(null);

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
      id: String(Date.now() + Math.random().toString(36).substring(2,9)),
      moyenneNotes: undefined,
      nombreAvis: undefined,
      commentaires: [],
    };
    setExperts(prevExperts => [...prevExperts, newExpert]);
    alert('Expert ajouté avec succès !');
  };

  const handleDeleteExpert = (expertId: string) => {
    setExperts(prevExperts => prevExperts.filter(expert => expert.id !== expertId));
    setExpertToDelete(null);
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
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" disabled>Modifier (bientôt)</Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm" onClick={() => setExpertToDelete(expert)}>
                          <Trash2 className="mr-2 h-4 w-4" /> Supprimer
                        </Button>
                      </AlertDialogTrigger>
                      {expertToDelete && expertToDelete.id === expert.id && (
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer cet expert ?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Cette action est irréversible. L'expert "{expertToDelete.prenom} {expertToDelete.nom}" sera définitivement supprimé.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setExpertToDelete(null)}>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteExpert(expertToDelete.id)}>
                              Confirmer la suppression
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      )}
                    </AlertDialog>
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
