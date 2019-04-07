import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import Product from './components/Product'

import { ProductsWrapper } from './styled'
import { getProducts } from '../../api/get-products'
import { loadProducts } from '../../store/products/actions'
import { addProduct } from '../../store/cartItems/actions'

class Products extends Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    const products = await getProducts()

    this.props.loadProducts(products)

    this.setState({
      isLoading: false,
    })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    return (
      <Layout>
        <MainTitle textAlign="center">New catalog</MainTitle>
        {this.state.isLoading && '...'}
        {this.props.items && (
          <ProductsWrapper>
            {this.props.items.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={this.handleAddToCart}
              />
            ))}
          </ProductsWrapper>
        )}
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: state.products.data,
})

const actionCreators = {
  loadProducts,
  addProduct,
}

const ProductList = connect(
  mapStateToProps,
  actionCreators
)(Products)

export { ProductList }
