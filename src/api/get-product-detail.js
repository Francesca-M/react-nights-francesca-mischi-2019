import { getProducts } from './get-products'

export const getProductDetail = async productId => {
  const prodList = await getProducts()
  const product = prodList.data.find(currentProduct => {
    return currentProduct.id === productId
  })
  return product
}
