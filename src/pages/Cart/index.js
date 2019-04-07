import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'

class CartView extends Component {
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
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  items: Object.keys(state.cartItems).map(productId => ({
    product: state.products.data.find(p => p.id === productId),
    quantity: state.cartItems[productId]
  }))
})

const Cart = connect(mapStateToProps)(CartView)

export { Cart }
