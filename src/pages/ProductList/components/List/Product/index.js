import React from 'react'

import { Wrapper, Link, ImgWrap, Img, Price, NameWrap, Name } from './styled'

const Product = ({ node }) => (
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
    </Link>
  </Wrapper>
)

//TODO: add props validation for node

export default Product
