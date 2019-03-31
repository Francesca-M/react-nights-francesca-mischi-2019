import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getProductDetail } from '../../api/get-product-detail'

class ProductDetail extends Component {
  constructor(props, { match }) {
    super(props, { match })
    this.state = {
      isLoading: true,
      productId: props.match.params.productId,
    }
  }

  async componentDidMount() {
    const currentProduct = await getProductDetail(this.state.productId)
    this.setState(prevState => ({
      currentProduct,
      ...prevState.currentProduct,
      isLoading: false,
    }))
  }

  render() {
    const { currentProduct, isLoading } = this.state

    return (
      <div>
        {isLoading && '...'}
        {currentProduct && (
          <div>
            <img
              src={currentProduct.attributes.image_url}
              alt={currentProduct.attributes.description}
              width="150"
            />
            <h2>{currentProduct.attributes.name}</h2>
            <p>{currentProduct.attributes.code}</p>
            <p>{currentProduct.attributes.description}</p>
          </div>
        )}
      </div>
    )
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
}

export { ProductDetail }
