import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import compose from 'ramda/src/compose'
import prop from 'ramda/src/prop'
import tail from 'ramda/src/tail'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import Product from './Product'
import Pagination from '../../components/Pagination'
import Loader from '../../components/Loader'
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants'

import { getProducts } from '../../api/products/get-products'
import useApi from '../../api/use-api'

import { ProductsWrapper } from './styled'
import * as cartActions from '../../store/cartItems/actions'

const getUrlParams = compose(
  qs.parse,
  tail,
  prop('search')
)

const Products = ({ match, location, addProduct, history }) => {
  const { page = PAGE_DEFAULT, size = PAGE_SIZE_DEFAULT } = getUrlParams(
    location
  )

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page, size } }),
    [page, size]
  )

  const handleAddToCart = productId => {
    addProduct(productId)
  }

  const handleSizeChange = newSize => {
    history.push(`/products?page=${page}&size=${newSize}`)
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
            size={size}
            onSizeChange={handleSizeChange}
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
