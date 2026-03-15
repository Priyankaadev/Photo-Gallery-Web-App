import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const PhotoCard = ({photo, isFaved, onToggle}) => {
  return (
     <div className="bg-white rounded-xl border border-gray-100 overflow-hidden
                    hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">


      <div className="relative">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full aspect-[3/2] object-cover block"
        />

     
        <button
          onClick={() => onToggle(photo)}
          aria-label={isFaved ? 'Remove from favourites' : 'Add to favourites'}
          className="absolute top-2 right-2 w-8 h-8 rounded-full
                     bg-white/80 backdrop-blur-sm
                     flex items-center justify-center
                     hover:scale-110 active:scale-95 transition-transform duration-150"
        >
          {isFaved
            ? <FaHeart className="w-4 h-4 text-red-500" />
            : <FaRegHeart className="w-4 h-4 text-gray-400" />
          }
        </button>
      </div>

     
      <div className="px-3 py-2.5 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
            Photographer
          </p>
          <p className="text-sm font-medium text-gray-800 truncate">
            {photo.author}
          </p>
        </div>
        <p className="text-[10px] text-gray-400 font-mono flex-shrink-0">
          {photo.width}×{photo.height}
        </p>
      </div>
    </div>
  )
}

export default PhotoCard
