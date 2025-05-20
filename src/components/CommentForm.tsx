
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';

interface CommentFormProps {
  onSubmit: (auteur: string, contenu: string, note: number) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [auteur, setAuteur] = useState('');
  const [contenu, setContenu] = useState('');
  const [note, setNote] = useState(0);
  const [hoverNote, setHoverNote] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note === 0) {
        alert("Veuillez sélectionner une note."); // ou utiliser un toast
        return;
    }
    onSubmit(auteur, contenu, note);
    setAuteur('');
    setContenu('');
    setNote(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md bg-card">
      <h4 className="text-lg font-semibold text-primary">Laisser un commentaire</h4>
      <div>
        <Label htmlFor="auteur">Votre nom</Label>
        <Input id="auteur" value={auteur} onChange={(e) => setAuteur(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="contenu">Votre commentaire</Label>
        <Textarea id="contenu" value={contenu} onChange={(e) => setContenu(e.target.value)} required />
      </div>
      <div>
        <Label>Votre note</Label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((starValue) => (
            <Star
              key={starValue}
              size={24}
              className={`cursor-pointer transition-colors 
                ${(hoverNote || note) >= starValue ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400 hover:text-yellow-300'}`}
              onClick={() => setNote(starValue)}
              onMouseEnter={() => setHoverNote(starValue)}
              onMouseLeave={() => setHoverNote(0)}
            />
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
        Soumettre l'avis
      </Button>
    </form>
  );
};

export default CommentForm;

