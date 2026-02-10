// Types pour la galerie d'images

export interface Image {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  category: Category;
  author: string;
  likes: number;
  createdAt: Date;
}

export type Category = 'nature' | 'architecture' | 'people' | 'animals' | 'food' | 'travel';

export interface GalleryProps {
  initialImages?: Image[];
}

export interface ImageGridProps {
  images: Image[];
  onImageClick: (image: Image) => void;
  onToggleFavorite: (id: string) => void;
  favorites: Set<string>;
  loading?: boolean;
}

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

export interface ImageModalProps {
  image: Image | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
  imageCounts: Record<Category | 'all', number>;
}

export interface GalleryStatsProps {
  totalImages: number;
  filteredImages: number;
  favoritesCount: number;
  categoriesCount: number;
}