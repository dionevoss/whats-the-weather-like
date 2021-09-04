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

export default Row
