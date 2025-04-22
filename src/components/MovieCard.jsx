import React from 'react'

const MovieCard = ({movie:{title,year,genres,runtime}}) => {
  return (
    <div className="max-w-sm w-full bg-gray-800 border border-gray-800 rounded-lg shadow-md p-2 m-1 hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-xl font-bold text-gray-00 mb-2">{title}</h2>
    <div className="text-sm text-gray-400 space-y-1 text-left flex flex-wrap justify-between">
      <p><span className="font-medium text-white">Year:</span> {year}</p>
      <p><span className="font-medium text-white">Runtime:</span> {runtime}m</p>
      <p><span className="font-medium text-white flex-grow-1">Genre:</span> {genres.join(',')}</p>
    </div>
  </div>
    
  )
}
export default MovieCard