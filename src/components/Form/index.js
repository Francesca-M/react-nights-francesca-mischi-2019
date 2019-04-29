import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

import theme from '../../global/theme'

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  margin: 1.4rem auto;
  max-width: 420px;
  padding: 3rem 4rem;
  width: 100%;
  box-shadow: ${theme.shadow.basic};
`

export const GlobalFormError = styled.div`
  color: ${theme.color.red};
  margin-bottom: 1.2rem;
  padding: 1rem;
  text-align: center;
`
