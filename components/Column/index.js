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

export default Column
