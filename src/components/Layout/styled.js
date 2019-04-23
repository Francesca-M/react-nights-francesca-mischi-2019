import { Link } from 'react-router-dom'
import styled from 'styled-components'

import theme from '../../global/theme'

export const Wrapper = styled.div``

export const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid grey;
  display: flex;
  justify-content: space-between;
`

export const HeaderSection = styled.div`
  color: ${theme.color.red};
`

export const HeaderLink = styled(Link)`
  border: 0;
  background-color: transparent;
  margin: 0 1rem;
  text-decoration: underline;
  color: ${theme.color.red};
  cursor: pointer;
`
