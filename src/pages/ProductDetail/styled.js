import styled from 'styled-components'

import theme from '../../global/theme'
import BasicButton from '../../components/BasicButton'

export const DetailsWrapper = styled.div``

export const Wrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  color: ${theme.color.black};
  padding: 1rem;
  margin: 1rem auto;
  width: 1000px;
  display: flex;
`

export const ImgWrap = styled.div`
  width: 50%;
  padding: 0 30px;
`

export const Img = styled.img`
  width: 100%;
`

export const TextWrap = styled.div`
  width: 50%;
  padding: 0 30px;
  padding-top: 30px;
`

export const Price = styled.span`
  display: block;
  font-weight: bold;
  color: ${theme.color.black};
`

export const NameWrap = styled.div``

export const Name = styled.h3`
  color: ${theme.color.black};
  font-size: ${theme.fontSize.large};
  text-transform: uppercase;
`

export const Code = styled.p`
  font-size: ${theme.fontSize.normal};
`

export const AddButton = styled(BasicButton)``

export const Description = styled.p``
