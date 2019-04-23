import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import Product from './components/Product'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'

import { getProducts } from '../../api/products/get-products'
import useApi from '../../api/use-api'

import { ProductsWrapper } from './styled'
import * as cartActions from '../../store/cartItems/actions'

const Products = ({ match, location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page } }),
    [page]
  )

  const handleAddToCart = productId => {
    addProduct(productId)
  }

  return (
    <Layout>
      <MainTitle textAlign="center">New catalog</MainTitle>
      {isLoading && <Loader />}
      {res && (
        <>
          <Pagination
            pages={res.meta.page_count}
            activePage={match.params.page}
          />
          <ProductsWrapper>
            {res.data.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ProductsWrapper>
        </>
      )}
    </Layout>
  )
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
