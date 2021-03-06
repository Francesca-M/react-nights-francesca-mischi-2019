import styled from 'styled-components'
import { Link as Baselink } from 'react-router-dom'

import theme from '../../../../global/theme'
import BasicButton from '../../../../components/BasicButton'

export const Wrapper = styled.li`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  color: ${theme.color.black};
  padding: 1rem;
  margin: 1rem;
  width: 300px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.13), 0 10px 10px rgba(0, 0, 0, 0.1);
  }
`

export const Link = styled(Baselink)`
  text-decoration: none;
`

export const ImgWrap = styled.div`
  text-align: center;
`

export const Img = styled.img`
  width: 200px;
`

export const Price = styled.span`
  display: block;
  text-align: center;
  font-weight: bold;
  color: ${theme.color.black};
`

export const NameWrap = styled.div`
  text-align: center;
`

export const Name = styled.h3`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  text-transform: uppercase;
`

export const AddButton = styled(BasicButton)``
