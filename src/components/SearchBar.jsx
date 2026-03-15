import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='relative w-full'>
        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none '/>
      <input 
      type="text"
      placeholder='Search by photographer..'
      value={value}
      onChange={onChange}
      className='w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg
                   text-gray-800 placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400
                   transition'
      />
    </div>
  )
}

export default SearchBar
