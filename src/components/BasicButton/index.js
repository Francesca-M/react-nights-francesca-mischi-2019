import styled from 'styled-components/macro'

import theme from '../../global/theme'

const BasicButton = styled.button`
  color: ${theme.color.white};
  background-color: ${theme.color.red};
  font-size: ${theme.fontSize.normal};
  text-transform: uppercase;
  padding: 10px 20px;
  border: 0;
  display: block;
  margin: 10px auto 0;
  cursor: pointer;

  :hover {
    background-color: red;
  }
`

export default BasicButton
