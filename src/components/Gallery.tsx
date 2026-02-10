import type { GalleryProps } from '../types';
import { useGallery } from '../hooks/useGallery';
import { sampleImages, categories } from '../data/images';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';
import { GalleryStats } from './GalleryStats';
import { ImageGrid } from './ImageGrid';
import { ImageModal } from './ImageModal';

export const Gallery = ({ initialImages = sampleImages }: GalleryProps) => {
  const {
    images,
    allImages,
    selectedImage,
    favorites,
    searchQuery,
    selectedCategory,
    categoryCounts,
    hasNext,
    hasPrevious,
    toggleFavorite,
    openImage,
    closeImage,
    goToNext,
    goToPrevious,
    setSearchQuery,
    setSelectedCategory,
  } = useGallery({ initialImages });

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Galerie d'Images</h2>
        <p className="text-gray-600">Projet 4/100 • Props Drilling & Conditional Rendering</p>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <GalleryStats
          totalImages={allImages.length}
          filteredImages={images.length}
          favoritesCount={favorites.size}
          categoriesCount={categories.length}
        />
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Recherche</h3>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Rechercher une image..."
            />
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            imageCounts={categoryCounts}
          />
        </div>

        {/* Image Grid */}
        <div className="lg:col-span-3">
          <ImageGrid
            images={images}
            onImageClick={openImage}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={closeImage}
        onNext={goToNext}
        onPrevious={goToPrevious}
        onToggleFavorite={toggleFavorite}
        isFavorite={selectedImage ? favorites.has(selectedImage.id) : false}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </div>
  );
};