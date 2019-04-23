import { api } from '../api-client'
import { formatProduct } from './utils/format-product'

const getProductDetail = async productId => {
  const { data, included } = await api(`/api/skus/${productId}?include=prices`)

  return formatProduct(data, included)
}

export default getProductDetail
