
import React from 'react';
import { Commentaire } from '@/types/expert';
import StarRating from '@/components/StarRating';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CommentListProps {
  commentaires: Commentaire[];
}

const CommentList: React.FC<CommentListProps> = ({ commentaires }) => {
  if (!commentaires || commentaires.length === 0) {
    return <p className="text-muted-foreground">Aucun commentaire pour le moment.</p>;
  }

  return (
    <div className="space-y-4">
      {commentaires.map(commentaire => (
        <Card key={commentaire.id} className="bg-muted/50">
          <CardHeader className="pb-2 pt-4 px-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-md font-semibold">{commentaire.auteur}</CardTitle>
              <StarRating rating={commentaire.note} starSize={16} />
            </div>
            <p className="text-xs text-muted-foreground">{new Date(commentaire.date).toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="pb-4 px-4">
            <p className="text-sm text-foreground">{commentaire.contenu}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentList;

