import { Gallery } from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">🖼️ Galerie d'Images</h1>
          <p className="text-gray-600 text-lg mb-2">
            Projet 4/100 • React + TypeScript + Props Drilling
          </p>
          <p className="text-gray-500 text-sm">
            Maîtrise le passage de props et le conditional rendering
          </p>
        </div>

        {/* Gallery */}
        <Gallery />

        {/* Section explicative */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📚 Concepts React abordés</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Props Drilling */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                <span>📦</span>
                Props Drilling
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Passage de props en profondeur</div>
                <div>• Communication parent-enfant</div>
                <div>• Callbacks pour remonter les données</div>
                <div>• Alternatives (Context API plus tard)</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                {'<Child prop={value} onEvent={handler} />'}
              </div>
            </div>

            {/* Conditional Rendering */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                <span>🔀</span>
                Conditional Rendering
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Affichage conditionnel</div>
                <div>• Ternaires et &&</div>
                <div>• Loading states</div>
                <div>• Empty states</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                {'loading ? <Spinner /> : <Content />'}
              </div>
            </div>

            {/* useMemo */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                <span>⚡</span>
                useMemo & Filtering
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Optimisation des calculs</div>
                <div>• Filtrage de données</div>
                <div>• Recherche en temps réel</div>
                <div>• Performance</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                useMemo(() =&gt; filter(data), [data])
              </div>
            </div>

            {/* Modal Pattern */}
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                <span>🪟</span>
                Modal / Lightbox
              </h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• Composant modal réutilisable</div>
                <div>• Gestion du clavier (ESC, flèches)</div>
                <div>• Overlay backdrop</div>
                <div>• Navigation entre images</div>
              </div>
              <div className="mt-3 bg-white rounded p-2 font-mono text-xs">
                {'isOpen && <Modal onClose={...} />'}
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-gray-900 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">💻 Exemples de code</h3>

          <div className="space-y-4">
            {/* Example 1 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">1. Props Drilling (passer des props)</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`// Parent
<ImageGrid 
  images={images}
  onImageClick={handleClick}
  favorites={favorites}
/>

// Enfant
<ImageCard 
  image={img}
  onClick={onImageClick}    // Props passée
  isFavorite={isFavorite}   // Props passée
/>`}</code>
              </pre>
            </div>

            {/* Example 2 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">2. Conditional Rendering</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`// Loading state
{loading ? <Spinner /> : <ImageGrid />}

// Empty state
{images.length === 0 ? (
  <EmptyState />
) : (
  <ImageGrid images={images} />
)}

// Conditional avec &&
{hasNext && <NextButton />}`}</code>
              </pre>
            </div>

            {/* Example 3 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">3. Filtrage avec useMemo</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`const filteredImages = useMemo(() => {
  let filtered = images;
  
  // Filtrer par catégorie
  if (category !== 'all') {
    filtered = filtered.filter(img => 
      img.category === category
    );
  }
  
  // Filtrer par recherche
  if (search) {
    filtered = filtered.filter(img =>
      img.title.toLowerCase().includes(search)
    );
  }
  
  return filtered;
}, [images, category, search]);`}</code>
              </pre>
            </div>

            {/* Example 4 */}
            <div>
              <div className="text-sm text-gray-400 mb-2">4. Gestion du clavier dans Modal</div>
              <pre className="bg-gray-800 rounded p-3 overflow-x-auto text-sm">
                <code>{`useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
    }
  };
  
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [onClose, onNext, onPrevious]);`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-8 bg-linear-to-r from-green-500 to-teal-500 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">🚀 Prochaine étape</h3>
          <p className="mb-4">Projet 5 : Formulaire de Contact (Controlled inputs, validation)</p>
          <button className="px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Voir le projet suivant →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;