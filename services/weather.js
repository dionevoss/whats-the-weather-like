import axios from 'axios'

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API

export const getWeather = (query) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
  )
