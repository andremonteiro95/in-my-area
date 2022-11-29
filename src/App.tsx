import { useState } from 'react'
import './App.css'
import useGeolocation from './hooks/useGeolocation'
import { getPlaces } from './api/foursquare'
import { Place } from './components/Place'

function App() {
  const { position, error } = useGeolocation()
  const [places, setPlaces] = useState<unknown[]>()
  const [isLoadingPlaces, setIsLoadingPlaces] = useState<boolean>(false)
  
  const searchPlaces = async () => {
    if (!position) return

    setIsLoadingPlaces(true)

    const { results } = await getPlaces(position.coords.latitude, position.coords.longitude)
    setPlaces(results)
    setIsLoadingPlaces(false)
  }

  return (
    <div className="App">
      <h1>Foursquare In Your Location</h1>

      {!position && !error && <p>Loading...</p>}
      {error && (<p>
        Geolocation permission has been denied, please change the setting in your browser
      </p>)}
      {position && (<p className="location">
        ({position.coords.latitude}, {position.coords.longitude})
      </p>)}

      <button disabled={!position} onClick={searchPlaces}>
        Search Location
      </button>

      <div className='grid-wrapper'>
        {isLoadingPlaces && <p>Searching places nearby...</p>}
        {!isLoadingPlaces && (<div className='grid'>
          {places?.map(place => <Place place={place} />)}
        </div>)}
      </div>

    </div>
  )
}

export default App
