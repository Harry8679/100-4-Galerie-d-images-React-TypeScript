import { ImageGridProps } from '../types';
import { ImageCard } from './ImageCard';

export const ImageGrid = ({
  images,
  onImageClick,
  onToggleFavorite,
  favorites,
  loading = false,
}: ImageGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
            <div className="aspect-square bg-gray-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-12 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Aucune image trouvée</h3>
        <p className="text-gray-600">
          Essayez de modifier vos critères de recherche ou de filtrage
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={onImageClick}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.has(image.id)}
        />
      ))}
    </div>
  );
};