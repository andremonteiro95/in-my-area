import React from 'react'
import './Place.css'

const IMAGE_SIZE = 192

export const Place = ({ place }: { place: any }) => {
  const photo = place.photos?.[0]

  return (
    <div 
      className='place'
      style={{ height: `${IMAGE_SIZE}px`, width: `${IMAGE_SIZE}px` }}
    >
      <div>
        {photo && (
          <img className='place-image' src={`${photo.prefix}${IMAGE_SIZE}${photo.suffix}`} />
        )} 
      </div>

      <div className='place-name-container'>
        <p className='place-name'>{place.name}</p>
      </div>
    </div>
  )
}
