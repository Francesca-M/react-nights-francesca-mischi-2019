import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import BasicButton from '../../components/BasicButton'

import { clearCart } from '../../store/cartItems/actions'

class CartView extends Component {
  handleClearCart = (items, evt) => {
    evt.preventDefault()
    this.props.clearCart(items)
  }

  render() {
    return (
      <Layout>
        <MainTitle>My Cart</MainTitle>
        <ul>
          {this.props.items.map(item => (
            <li key={item.product.id}>
              {item.product.attributes.name} - {item.quantity}
            </li>
          ))}
        </ul>
        <BasicButton
          onClick={evt => this.handleClearCart(this.props.items, evt)}
        >
          Clear cart
        </BasicButton>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    product: state.products.data.find(p => p.id === productId),
    quantity: state.cartItems[productId],
  })),
})

const actionCreators = {
  clearCart,
}

const Cart = connect(
  mapStateToProps,
  actionCreators
)(CartView)

export { Cart }
