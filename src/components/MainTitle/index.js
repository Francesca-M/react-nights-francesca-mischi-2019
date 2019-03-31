import styled from 'styled-components'
import { textAlign } from 'styled-system'

import theme from '../../global/theme'

const MainTitle = styled.h1`
  color: ${theme.color.back};
  text-decoration: underline;
  ${textAlign};
`
export default MainTitle
