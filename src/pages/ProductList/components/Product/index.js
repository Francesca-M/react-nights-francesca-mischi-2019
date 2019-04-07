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
        <Img
          src={node.attributes.image_url}
          alt={`${node.attributes.name} image`}
        />
      </ImgWrap>
      <NameWrap>
        <Name>{node.attributes.name}</Name>
      </NameWrap>
      <Price>{node.attributes.price}</Price>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to cart
      </AddButton>
    </Link>
  </Wrapper>
)

//TODO: add props validation for node

export default Product
