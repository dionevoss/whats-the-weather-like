import Column from '../components/Column'
import Row from '../components/Row'
import WeatherCard from '../components/WeatherCard'

const Home = () => {
  return (
    <Column height='100vh' width='100vw'>
      <Row height='100%' width='100%' justifyContent='center' alignItems='center'>
        <WeatherCard />
      </Row>
    </Column>
  )
}

export default Home
