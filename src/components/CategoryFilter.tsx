import { CategoryFilterProps, Category } from '../types';
import { categoryLabels } from '../data/images';

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  imageCounts,
}: CategoryFilterProps) => {
  const allCategories: (Category | 'all')[] = ['all', ...categories];

  const getCategoryLabel = (category: Category | 'all'): string => {
    if (category === 'all') return 'Toutes';
    return categoryLabels[category];
  };

  const getCategoryEmoji = (category: Category | 'all'): string => {
    const emojis: Record<Category | 'all', string> = {
      all: '🖼️',
      nature: '🌿',
      architecture: '🏛️',
      people: '👥',
      animals: '🐾',
      food: '🍽️',
      travel: '✈️',
    };
    return emojis[category];
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">📂 Catégories</h3>
      <div className="space-y-2">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="text-xl">{getCategoryEmoji(category)}</span>
              <span>{getCategoryLabel(category)}</span>
            </span>
            <span
              className={`text-sm font-bold px-2 py-1 rounded ${
                selectedCategory === category
                  ? 'bg-white/20'
                  : 'bg-blue-100 text-blue-600'
              }`}
            >
              {imageCounts[category]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};