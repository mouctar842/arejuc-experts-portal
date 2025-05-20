
import React, { useState } from 'react';
import { Expert } from '@/types/expert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { specializations } from '@/data/specializations'; // Assurez-vous que ce chemin est correct

interface AddExpertFormProps {
  onAddExpert: (expert: Omit<Expert, 'id' | 'moyenneNotes' | 'nombreAvis' | 'commentaires'>) => void;
}

const AddExpertForm: React.FC<AddExpertFormProps> = ({ onAddExpert }) => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [photoProfilUrl, setPhotoProfilUrl] = useState('');
  const [bio, setBio] = useState('');
  const [cvUrl, setCvUrl] = useState(''); // Pour l'image de certification
  const [specialisationPrincipale, setSpecialisationPrincipale] = useState('');
  const [sousSpecialisations, setSousSpecialisations] = useState(''); // Comma-separated
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpert({
      prenom,
      nom,
      photoProfilUrl,
      bio,
      cvUrl, // Certification image
      specialisationPrincipale,
      sousSpecialisations: sousSpecialisations.split(',').map(s => s.trim()).filter(s => s),
      email,
      telephone: telephone || undefined, // Optionnel
    });
    // Reset form
    setPrenom(''); setNom(''); setPhotoProfilUrl(''); setBio(''); setCvUrl('');
    setSpecialisationPrincipale(''); setSousSpecialisations(''); setEmail(''); setTelephone('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="prenom">Prénom</Label>
          <Input id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="nom">Nom</Label>
          <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </div>
      </div>
      <div>
        <Label htmlFor="photoProfilUrl">URL Photo de Profil</Label>
        <Input id="photoProfilUrl" type="url" value={photoProfilUrl} onChange={(e) => setPhotoProfilUrl(e.target.value)} placeholder="https://example.com/photo.jpg" />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="cvUrl">URL Image de Certification</Label>
        <Input id="cvUrl" type="url" value={cvUrl} onChange={(e) => setCvUrl(e.target.value)} placeholder="https://example.com/certification.jpg" />
      </div>
      <div>
        <Label htmlFor="specialisationPrincipale">Spécialisation Principale</Label>
        <Select value={specialisationPrincipale} onValueChange={setSpecialisationPrincipale} required>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez une spécialisation" />
          </SelectTrigger>
          <SelectContent>
            {specializations.map(spec => (
              <SelectItem key={spec.id} value={spec.id}>{spec.nom}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="sousSpecialisations">Sous-spécialisations (séparées par des virgules)</Label>
        <Input id="sousSpecialisations" value={sousSpecialisations} onChange={(e) => setSousSpecialisations(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="telephone">Téléphone</Label>
          <Input id="telephone" type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </div>
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Ajouter l'Expert
      </Button>
    </form>
  );
};

export default AddExpertForm;

