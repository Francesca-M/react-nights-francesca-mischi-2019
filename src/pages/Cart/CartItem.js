import * as React from 'react'
import flip from 'ramda/src/flip'
import propOr from 'ramda/src/propOr'

import getProductDetail from '../../api/products/get-product-detail'
import useApi from '../../api/use-api'

import Loader from '../../components/Loader'
import BasicButton from '../../components/BasicButton'

const getNameFallback = flip(propOr)('name')

const CartItem = ({ productId, quantity, removeProduct }) => {
  const { data: product, isLoading } = useApi(
    () => getProductDetail(productId),
    [productId]
  )

  const getName = getNameFallback(productId)

  return (
    <li key={productId}>
      {isLoading && <Loader small />}
      {!isLoading && (
        <div>
          <p>
            {getName(product)} - {quantity}
          </p>
          <BasicButton type="button" onClick={() => removeProduct(productId)}>
            Remove
          </BasicButton>
        </div>
      )}
    </li>
  )
}

export default CartItem
