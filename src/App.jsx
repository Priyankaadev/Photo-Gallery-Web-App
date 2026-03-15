import { useState } from "react";
import "./App.css";
import FavouritesPanel from "./components/FavouritesPanel";
import useFetchPhotos from "./hooks/useFetchPhotos";
import SearchBar from "./components/SearchBar";
import { FaHeart } from "react-icons/fa";
import PhotoCard from "./components/PhotoCard";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favourites, setFavourites] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const {photos, loading, error} = useFetchPhotos()

 const handleSearch = (e) => setSearchQuery(e.target.value);

 const handleToggle = (photo) => {
    setFavourites(prev =>
      prev.some(f => f.id === photo.id)
        ? prev.filter(f => f.id !== photo.id)
        : [...prev, photo]
    )
  }
  const filteredPhotos = photos.filter(p =>
  p.author.toLowerCase().includes(searchQuery.toLowerCase())
)
  return(
       <div className="min-h-screen bg-gray-50">

    
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 py-3">

           
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Pics</h1>
              <p className="text-[10px] text-gray-400 leading-none">photo gallery</p>
            </div>

           
            <div className="w-full sm:flex-1 order-3 sm:order-none">
              <SearchBar value={searchQuery} onChange={handleSearch} />
            </div>

          
            <button
              onClick={() => setIsPanelOpen(true)}
              className="relative ml-auto sm:ml-0 flex-shrink-0
                         flex items-center gap-2 px-3 sm:px-4 py-2
                         bg-indigo-600 text-white text-sm font-medium rounded-lg
                         hover:bg-indigo-700 active:bg-indigo-800 transition"
            >
              <FaHeart className="w-4 h-4" />
              <span className="hidden sm:inline">Favourites</span>
              {favourites.length > 0 && (
                <span className="w-5 h-5 bg-white text-indigo-600 text-xs font-bold
                   rounded-full flex items-center justify-center leading-none">
                  {favourites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      {loading && (
  <div className="flex justify-center items-center py-24">
    <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
  </div>
)}
      {error && (
  <div className="text-center py-24">
    <p className="text-red-400 text-base">Something went wrong: {error}</p>
  </div>
)}

     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate pr-4">
            {searchQuery ? `"${searchQuery}"` : 'All Photos'}
          </h2>
          <span className="text-sm text-gray-400 flex-shrink-0">
            {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''}
          </span>
        </div>

        {filteredPhotos.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-base sm:text-lg">No results for "{searchQuery}"</p>
            <p className="text-sm text-gray-300 mt-1">Try a different photographer name</p>
          </div>
        )}

       
        {!loading && !error && (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
    {filteredPhotos.map(photo => (
      <PhotoCard
        key={photo.id}
        photo={photo}
        isFaved={favourites.some(f => f.id === photo.id)}
        onToggle={handleToggle}
      />
    ))}
  </div>
)}
      </main>

      <FavouritesPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        favourites={favourites}
        onToggle={handleToggle}
      />
    </div>
  )
}

export default App;
