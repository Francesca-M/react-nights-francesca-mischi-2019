import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'

import { DetailsWrapper } from './styled'
import { getProductDetail } from '../../api/get-product-detail'
import ProductDetails from './components/ProductDetails'

import { loadDetails } from '../../store/productDetails/actions'
import { addProduct } from '../../store/cartItems/actions'

class Details extends Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    const currentProduct = await getProductDetail(
      this.props.match.params.productId
    )

    this.props.loadDetails(currentProduct)

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
        <MainTitle textAlign="center">Product details</MainTitle>
        <DetailsWrapper>
          {this.state.isLoading && '...'}
          {this.props.productDetails.attributes && (
            <ProductDetails
              node={this.props.productDetails}
              onAddToCart={this.handleAddToCart}
            />
          )}
        </DetailsWrapper>
      </Layout>
    )
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
}

const mapStateToProps = state => ({
  productDetails: state.productDetails,
})

const actionCreators = {
  loadDetails,
  addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  actionCreators
)(Details)

export { ProductDetail }
