import styled from 'styled-components'

import theme from '../../global/theme'

const BasicButton = styled.button`
  color: ${theme.color.white};
  background-color: ${theme.color.red};
  font-size: ${theme.fontSize.normal};
  text-transform: uppercase;
  padding: 10px 20px;
  border: 0;
  :hover {
    background-color: red;
  }
  display: block;
  margin: 10px auto 0;
  cursor: pointer;
`

export default BasicButton
