import styled from 'styled-components/macro'
import theme from '../../global/theme'

const BasicButton = styled.button`
  color: ${theme.color.white};
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.red};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-size: ${theme.fontSize.normal};
  text-transform: uppercase;
  padding: 10px 20px;
  border: 0;
  display: block;
  margin: 10px auto 0;

  :hover {
    background-color: red;
  }
`

export default BasicButton
