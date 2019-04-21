import React from 'react'

import {
  Wrapper,
  ImgWrap,
  Img,
  // Price,
  NameWrap,
  Name,
  AddButton,
  Code,
  Description,
  TextWrap,
} from './styled'

const ProductDetails = ({ node, onAddToCart }) => (
  <Wrapper>
    <ImgWrap>
      <Img src={node.image_url} alt={node.description} />
    </ImgWrap>
    <TextWrap>
      <NameWrap>
        <Code>{node.code}</Code>
        <Name>{node.name}</Name>
      </NameWrap>
      {/* <Price>{node.price.formatted_amount}</Price> */}
      <Description>{node.description}</Description>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to cart
      </AddButton>
    </TextWrap>
  </Wrapper>
)

export default ProductDetails
