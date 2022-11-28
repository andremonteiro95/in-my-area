
const BASE_URL = 'https://api.foursquare.com/v3/places/'

function apiGet (url: URL | RequestInfo) {
  const headers = new Headers()
  headers.append('Authorization', import.meta.env.VITE_FOURSQUARE_API_KEY)
  return fetch(url, { headers }).then(res => res.json())
}

export function getPlaces (latitude: number, longitude: number) {
  const url = new URL('search', BASE_URL)
  url.searchParams.append('ll', `${latitude},${longitude}`)
  url.searchParams.append('fields', ['name', 'photos'].join(','))
  return apiGet(url)
}