import type { GalleryStatsProps } from '../types';

export const GalleryStats = ({
  totalImages,
  filteredImages,
  favoritesCount,
  categoriesCount,
}: GalleryStatsProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-lg font-bold mb-4">📊 Statistiques</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">{totalImages}</div>
          <div className="text-xs opacity-90 mt-1">Total</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">{filteredImages}</div>
          <div className="text-xs opacity-90 mt-1">Affichées</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">{favoritesCount}</div>
          <div className="text-xs opacity-90 mt-1">Favoris</div>
        </div>
        <div className="bg-white/20 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold">{categoriesCount}</div>
          <div className="text-xs opacity-90 mt-1">Catégories</div>
        </div>
      </div>
    </div>
  );
};