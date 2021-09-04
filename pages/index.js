import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  flexbox,
  border,
  shadow,
  position,
  background,
  grid
} from 'styled-system'

import { getWeather } from '../services/weather'

const Home = () => {
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const { data } = await getWeather('pelotas')
    console.log(data)
  }

  return (
    <Column height='100vh' width='100vw' bg='aqua'>
      <Row height='100%' width='100%' justifyContent='center' alignItems='center'>
        Test
      </Row>
    </Column>
  )
}

const Column = styled.div(
  { display: 'flex', flexDirection: 'column' },
  space,
  layout,
  color,
  flexbox,
  border,
  shadow,
  position,
  background,
  grid
)

const Row = styled.div(
  { display: 'flex', flexDirection: 'row' },
  space,
  layout,
  color,
  flexbox,
  border,
  shadow,
  position,
  background,
  grid
)

export default Home
