
import React, { useState, useEffect } from 'react';
import { Expert } from '@/types/expert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { specializations } from '@/data/specializations';

interface AddExpertFormProps {
  onAddExpert: (expert: Omit<Expert, 'id' | 'moyenneNotes' | 'nombreAvis' | 'commentaires'>) => void;
}

const AddExpertForm: React.FC<AddExpertFormProps> = ({ onAddExpert }) => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [photoProfilFile, setPhotoProfilFile] = useState<File | null>(null);
  const [photoProfilUrlPreview, setPhotoProfilUrlPreview] = useState<string | undefined>('');
  const [bio, setBio] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvUrlPreview, setCvUrlPreview] = useState<string | undefined>('');
  const [specialisationPrincipale, setSpecialisationPrincipale] = useState('');
  const [sousSpecialisations, setSousSpecialisations] = useState(''); // Comma-separated
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  useEffect(() => {
    // Clean up object URLs
    return () => {
      if (photoProfilUrlPreview && photoProfilUrlPreview.startsWith('blob:')) {
        URL.revokeObjectURL(photoProfilUrlPreview);
      }
      if (cvUrlPreview && cvUrlPreview.startsWith('blob:')) {
        URL.revokeObjectURL(cvUrlPreview);
      }
    };
  }, [photoProfilUrlPreview, cvUrlPreview]);

  const handlePhotoProfilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (photoProfilUrlPreview && photoProfilUrlPreview.startsWith('blob:')) {
      URL.revokeObjectURL(photoProfilUrlPreview);
    }
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoProfilFile(file);
      setPhotoProfilUrlPreview(URL.createObjectURL(file));
    } else {
      setPhotoProfilFile(null);
      setPhotoProfilUrlPreview('');
    }
  };

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cvUrlPreview && cvUrlPreview.startsWith('blob:')) {
      URL.revokeObjectURL(cvUrlPreview);
    }
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCvFile(file);
      setCvUrlPreview(URL.createObjectURL(file));
    } else {
      setCvFile(null);
      setCvUrlPreview('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpert({
      prenom,
      nom,
      photoProfilUrl: photoProfilUrlPreview, // Pass the blob URL
      bio,
      cvUrl: cvUrlPreview, // Pass the blob URL
      specialisationPrincipale,
      sousSpecialisations: sousSpecialisations.split(',').map(s => s.trim()).filter(s => s),
      email,
      telephone: telephone || undefined,
    });
    // Reset form
    setPrenom(''); setNom('');
    setPhotoProfilFile(null); setPhotoProfilUrlPreview('');
    setBio('');
    setCvFile(null); setCvUrlPreview('');
    setSpecialisationPrincipale(''); setSousSpecialisations(''); setEmail(''); setTelephone('');
    // Manually reset file inputs if possible, or tell user they are reset
    const photoInput = document.getElementById('photoProfilUrl') as HTMLInputElement;
    if (photoInput) photoInput.value = "";
    const cvInput = document.getElementById('cvUrl') as HTMLInputElement;
    if (cvInput) cvInput.value = "";

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
        <Label htmlFor="photoProfilUrl">Photo de Profil</Label>
        <Input id="photoProfilUrl" type="file" accept="image/*" onChange={handlePhotoProfilChange} />
        {photoProfilUrlPreview && (
          <img src={photoProfilUrlPreview} alt="Aperçu photo profil" className="mt-2 h-24 w-24 object-cover rounded" />
        )}
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="cvUrl">Image de Certification</Label>
        <Input id="cvUrl" type="file" accept="image/*,.pdf" onChange={handleCvChange} />
        {cvUrlPreview && cvUrlPreview.includes('blob:image') && (
          <img src={cvUrlPreview} alt="Aperçu certification" className="mt-2 h-auto w-48 object-contain rounded" />
        )}
         {cvUrlPreview && cvUrlPreview.includes('blob:application/pdf') && (
          <p className="mt-2 text-sm text-muted-foreground">Aperçu PDF non disponible. Fichier sélectionné.</p>
        )}
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

