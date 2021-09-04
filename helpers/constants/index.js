export const sunnyWeather = `
    background: hsla(0, 0%, 98%, 1);
    background: radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(59, 83%, 86%, 1) 62%);
    background: -moz-radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(59, 83%, 86%, 1) 62%);
    background: -webkit-radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(59, 83%, 86%, 1) 62%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FBFBFB", endColorstr="#F9F8BF", GradientType=1 );
`

export const rainyWeather = `
    background: hsla(0, 0%, 98%, 1);
    background: radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(222, 90%, 84%, 1) 62%);
    background: -moz-radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(222, 90%, 84%, 1) 62%);
    background: -webkit-radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(222, 90%, 84%, 1) 62%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#fbfbfb", endColorstr="#B3C9FB", GradientType=1 );
`

export const cloudyWeather = `
    background: hsla(0, 0%, 98%, 1);
    background: radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(207, 52%, 88%, 1) 62%);
    background: -moz-radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(207, 52%, 88%, 1) 62%);
    background: -webkit-radial-gradient(circle, hsla(0, 0%, 98%, 1) 0%, hsla(207, 52%, 88%, 1) 62%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#fbfbfb", endColorstr="#CFE1F0", GradientType=1 );
`

export const tokyoData = {
  coord: { lon: 139.6917, lat: 35.6895 },
  weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
  base: 'stations',
  main: {
    temp: 19.33,
    feels_like: 19.75,
    temp_min: 18.74,
    temp_max: 19.98,
    pressure: 1017,
    humidity: 93
  },
  visibility: 10000,
  wind: { speed: 0.45, deg: 351, gust: 2.24 },
  clouds: { all: 75 },
  dt: 1630793212,
  sys: { type: 2, id: 2038398, country: 'JP', sunrise: 1630786573, sunset: 1630832657 },
  timezone: 32400,
  id: 1850144,
  name: 'Tokyo',
  cod: 200
}
