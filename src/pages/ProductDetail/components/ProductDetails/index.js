import React from 'react'

import {
  Wrapper,
  ImgWrap,
  Img,
  Price,
  NameWrap,
  Name,
  AddButton,
  Code,
  Description,
  TextWrap
} from './styled'

const ProductDetails = ({ node, onAddToCart }) => (
  <Wrapper>
    <ImgWrap>
      <Img
        src={node.attributes.image_url}
        alt={node.attributes.description}
      />
    </ImgWrap>
    <TextWrap>
      <NameWrap>
        <Code>{node.attributes.code}</Code>
        <Name>{node.attributes.name}</Name>
      </NameWrap>
      <Price>{node.attributes.price}</Price>
      <Description>{node.attributes.description}</Description>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to cart
      </AddButton>
    </TextWrap>
  </Wrapper>
)

//TODO: add props validation for node

export default ProductDetails
