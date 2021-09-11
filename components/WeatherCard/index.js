import { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Image from 'next/image'

import Column from '../Column'
import Row from '../Row'
import Text from '../Text'

import sunny from '../../public/sunny.png'
import cloud from '../../public/cloud.png'
import rain from '../../public/rain.png'
import { sunnyWeather, rainyWeather, cloudyWeather, tokyoData } from '../../helpers/constants'
import { getWeather } from '../../services/weather'

const DATA = {
  coord: { lon: -52.6756, lat: -31.395 },
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10n' }],
  base: 'stations',
  main: {
    temp: 13.56,
    feels_like: 13.19,
    temp_min: 13.56,
    temp_max: 13.58,
    pressure: 1015,
    humidity: 85,
    sea_level: 1015,
    grnd_level: 968
  },
  visibility: 10000,
  wind: { speed: 2.87, deg: 113, gust: 6.74 },
  rain: { '1h': 0.5 },
  clouds: { all: 77 },
  dt: 1630792288,
  sys: { type: 1, id: 8408, country: 'BR', sunrise: 1630748596, sunset: 1630790189 },
  timezone: -10800,
  id: 3467512,
  name: 'Canguçu',
  cod: 200
}

const WeatherCard = ({ coords, isLoadingPermissions }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherStyles, setWeatherStyles] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    !isLoadingPermissions && handleGetWeather()
  }, [isLoadingPermissions])

  const handleGetWeather = async () => {
    try {
      setIsLoading(true)
      const response = await getWeather(coords)
      const data = await formmatedData(response.data)
      await handleWeatherStyles(data.weather)
      setWeatherData(data)
    } catch (error) {
      console.log(error)
      alert("We couldn't find a forecast for you location :( \r\nHere's Tokyo forecast insted :)")
      const data = await formmatedData(tokyoData)
      await handleWeatherStyles(data.weather)
      setWeatherData(data)
    } finally {
      setIsLoading(false)
    }
  }

  const formmatedData = (data) => ({
    country: data.sys.country,
    city: data.name,
    weather: data.weather[0].main,
    temps: {
      humidity: data.main.humidity,
      temp: parseInt(data.main.temp),
      wind: parseInt(data.wind.speed),
      feelsLike: parseInt(data.main.feels_like)
    }
  })

  const handleWeatherStyles = (weather, weatherData) => {
    switch (weather) {
      case 'Clouds':
        setWeatherStyles({ icon: cloud, background: cloudyWeather, title: 'Cloudy' })
        break
      case 'Sun':
        setWeatherStyles({ icon: sunny, background: sunnyWeather, title: 'Sunny' })
        break
      case 'Rain':
        setWeatherStyles({ icon: rain, background: rainyWeather, title: 'Rainy' })
        break
      default:
        setWeatherStyles({ icon: sunny, background: sunnyWeather, title: 'Sunny' })
    }
  }

  if (isLoading)
    return <Loader src='/loading.png' width='100px' height='100px' alt='loading icon' />

  return (
    <Column>
      <Card bg={weatherStyles.background} width='200px' p='20px' borderRadius='25px'>
        <Row height='140px'>
          <Row
            justifyContent='center'
            alignItems='center'
            width='40%'
            mr='16px'
            width='100%'
            height='80%'
          >
            <Image src={weatherStyles.icon} width='80px' height='80px' alt='weather icon' />
          </Row>
          <Column width='60%' alignItems='center'>
            <Text fontSize='32px'>{weatherStyles.title}</Text>
            <Row>
              <Text fontSize='62px'>{weatherData.temps.temp}</Text>
              <Column mt='20px'>
                <CelciusIcon />
              </Column>
            </Row>
          </Column>
        </Row>
        <Row justifyContent='flex-end'>
          <Text fontSize='18px'>{`${weatherData.city}, ${weatherData.country}`}</Text>
        </Row>
      </Card>
      <Row borderRadius='25px' mt='8px' justifyContent='space-between' p='16px 30px' bg='white'>
        <Column>
          <Text fontSize='14px'>Wind</Text>
          <Text my='5px' fontSize='14px'>
            Humidity
          </Text>
          <Text fontSize='14px'>Feels like</Text>
        </Column>
        <Column>
          <Text fontWeight='600' fontSize='14px'>
            {`${weatherData.temps.wind} Km/h`}
          </Text>
          <Text my='5px' fontWeight='600' fontSize='14px'>
            {`${weatherData.temps.humidity}%`}
          </Text>
          <Text fontWeight='600' fontSize='14px'>
            {`${weatherData.temps.feelsLike} °C`}
          </Text>
        </Column>
      </Row>
    </Column>
  )
}

const CelciusIcon = styled(Row)`
  padding: 6px;
  border: solid 3px;
  border-color: gray;
  border-radius: 50%;
`

const Card = styled(Column)``

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.img`
  animation: 2s ${rotate} linear infinite;
`

export default WeatherCard
