import { useState, useCallback, useMemo } from 'react';
import { Image, Category } from '../types';

interface UseGalleryProps {
  initialImages: Image[];
}

export const useGallery = ({ initialImages }: UseGalleryProps) => {
  const [images] = useState<Image[]>(initialImages);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  // Toggle favorite
  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  }, []);

  // Open image modal
  const openImage = useCallback((image: Image) => {
    setSelectedImage(image);
  }, []);

  // Close image modal
  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Filter images
  const filteredImages = useMemo(() => {
    let filtered = images;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(img => img.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        img =>
          img.title.toLowerCase().includes(query) ||
          img.description.toLowerCase().includes(query) ||
          img.author.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [images, selectedCategory, searchQuery]);

  // Navigation in modal
  const currentImageIndex = useMemo(() => {
    if (!selectedImage) return -1;
    return filteredImages.findIndex(img => img.id === selectedImage.id);
  }, [selectedImage, filteredImages]);

  const goToNext = useCallback(() => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1]);
    }
  }, [currentImageIndex, filteredImages]);

  const goToPrevious = useCallback(() => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1]);
    }
  }, [currentImageIndex, filteredImages]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<Category | 'all', number> = {
      all: images.length,
      nature: 0,
      architecture: 0,
      people: 0,
      animals: 0,
      food: 0,
      travel: 0,
    };

    images.forEach(img => {
      counts[img.category]++;
    });

    return counts;
  }, [images]);

  return {
    images: filteredImages,
    allImages: images,
    selectedImage,
    favorites,
    searchQuery,
    selectedCategory,
    categoryCounts,
    currentImageIndex,
    hasNext: currentImageIndex < filteredImages.length - 1,
    hasPrevious: currentImageIndex > 0,
    toggleFavorite,
    openImage,
    closeImage,
    goToNext,
    goToPrevious,
    setSearchQuery,
    setSelectedCategory,
  };
};