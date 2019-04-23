import * as React from 'react'

import getProductDetail from '../../api/products/get-product-detail'
import useApi from '../../api/use-api'

import Loader from '../../components/Loader'
import BasicButton from '../../components/BasicButton'

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(
    () => getProductDetail(productId),
    productId
  )

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      <p>
        {product ? product.name : productId} - {quantity}
      </p>
      <BasicButton type="button" onClick={() => removeProduct(productId)}>
        Remove
      </BasicButton>
    </li>
  )
}

export default CartItem
