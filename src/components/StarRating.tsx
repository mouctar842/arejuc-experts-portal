
import { Star, StarHalf, StarOff } from 'lucide-react';
import React from 'react';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5, starSize = 20, className }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - fullStars - halfStar;

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={starSize} className="text-yellow-400 fill-yellow-400" />
      ))}
      {halfStar === 1 && <StarHalf key="half" size={starSize} className="text-yellow-400 fill-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={`empty-${i}`} size={starSize} className="text-gray-400" />
      ))}
    </div>
  );
};

export default StarRating;
