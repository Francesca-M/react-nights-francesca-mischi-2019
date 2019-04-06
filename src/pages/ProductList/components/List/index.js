import React from 'react'
import { ProductsWrapper } from './styled'
import Product from './Product'

const List = ({ products }) => (
  <ProductsWrapper>
    {products.map(product => (
      <Product key={product.id} node={product} />
    ))}
  </ProductsWrapper>
)

//TODO: add props validation for products

export default List
