import { useEffect, useMemo, useState } from "react";

export default function useGeolocation() {
  const [position, setPosition] = useState<GeolocationPosition>()
  const [error, setError] = useState<GeolocationPositionError>()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setPosition, setError)
  }, [])

  return {
    position,
    error,
  }
}