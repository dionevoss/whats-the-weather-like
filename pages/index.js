import { useEffect, useState } from 'react'

import Column from '../components/Column'
import Row from '../components/Row'
import WeatherCard from '../components/WeatherCard'

import { getCurrentLocation } from '../helpers/location'

const Home = () => {
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null })
  const [isLoadingPermissions, setIsLoadingPermissions] = useState(true)

  useEffect(() => {
    getCurrentLocation(getCoordinates, handleError)
  }, [])

  const getCoordinates = ({ coords }) => {
    setCoordinates({
      lat: coords.latitude,
      lon: coords.longitude
    })
    setIsLoadingPermissions(false)
  }

  const handleError = () => {
    setIsLoadingPermissions(false)
  }

  return (
    <Column height='100vh' width='100vw'>
      <Row height='100%' width='100%' justifyContent='center' alignItems='center'>
        <WeatherCard coords={coordinates} isLoadingPermissions={isLoadingPermissions} />
      </Row>
    </Column>
  )
}

export default Home
