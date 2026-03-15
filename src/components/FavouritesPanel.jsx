import { FiX } from 'react-icons/fi'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const FavouritesPanel = ({ isOpen, onClose, favourites, onToggle }) => {
  return (
    <>
   
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

   
      <aside
        className={`fixed top-0 right-0 h-full z-50 bg-white flex flex-col
                    w-full sm:w-80 shadow-2xl
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
    
        <div className="flex items-center justify-between
                        px-4 sm:px-5 py-4
                        border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-base font-semibold text-gray-900">Favourites</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {favourites.length} photo{favourites.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="w-8 h-8 flex items-center justify-center rounded-lg
                       text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

   
        {favourites.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center">
              <FaRegHeart className="w-6 h-6 text-gray-300" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              No favourites yet.<br />Tap a heart to save photos.
            </p>
          </div>
        )}

     
        {favourites.length > 0 && (
          <ul className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 flex flex-col gap-2.5">
            {favourites.map(photo => (
              <li key={photo.id}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                <img
                  src={`https://picsum.photos/id/${photo.id}/120/80`}
                  alt={photo.author}
                  className="w-16 h-11 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{photo.author}</p>
                  <p className="text-xs text-gray-400">{photo.width} × {photo.height}</p>
                </div>
                <button
                  onClick={() => onToggle(photo)}
                  aria-label="Remove from favourites"
                  className="flex-shrink-0 p-1.5 rounded-lg text-red-400
                             hover:text-red-600 hover:bg-red-50 transition"
                >
                  <FaHeart className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </>
  )
}

export default FavouritesPanel