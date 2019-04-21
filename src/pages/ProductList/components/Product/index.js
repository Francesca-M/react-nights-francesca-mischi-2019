import React from 'react'

import {
  Wrapper,
  Link,
  ImgWrap,
  Img,
  Price,
  NameWrap,
  Name,
  AddButton,
} from './styled'

const Product = ({ node, onAddToCart }) => (
  <Wrapper>
    <Link to={node.id}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <NameWrap>
        <Name>{node.name}</Name>
      </NameWrap>
      <Price>{node.price.formatted_amount}</Price>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to cart
      </AddButton>
    </Link>
  </Wrapper>
)

//TODO: add props validation for node

export default Product
