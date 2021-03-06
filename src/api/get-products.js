import config from '../config'

import { getToken } from './get-token'

export const getProducts = async () => {
  const { access_token } = await getToken()
  const res = await fetch(`${config.apiUrl}/api/skus?include=prices`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  })

  let products = await res.json()

  if (products) {
    products.data = (products.data).map((product, i) => {
      product.attributes.price = products.included[i].attributes.formatted_amount;
      return product;
    })
  }

  return products
}
