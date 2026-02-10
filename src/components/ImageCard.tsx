import { useState } from 'react';
import type { ImageCardProps } from '../types';

export const ImageCard = ({ image, onClick, onToggleFavorite, isFavorite }: ImageCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(image.id);
  };

  return (
    <div
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => onClick(image)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent" />
          </div>
        )}
        <img
          src={image.thumbnail}
          alt={image.title}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-xs opacity-75">Par {image.author}</p>
          <p className="text-xs opacity-75 flex items-center gap-1 mt-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            {image.likes}
          </p>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 truncate">{image.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{image.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">
            {image.category}
          </span>
        </div>
      </div>
    </div>
  );
};