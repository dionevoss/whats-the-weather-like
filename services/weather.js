import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API

export const getWeather = (query) =>
  axios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=${apiKey}&units=metric`
  )
