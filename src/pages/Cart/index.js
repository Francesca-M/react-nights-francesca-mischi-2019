import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import MainTitle from '../../components/MainTitle'
import CartItem from './CartItem'

import * as cartActions from '../../store/cartItems/actions'
import * as cartSelectors from '../../store/cartItems/selectors'

const CartView = ({ items, removeProduct }) => {
  return (
    <Layout>
      <MainTitle textAlign="center">My Cart</MainTitle>
      <ul>
        {items.map(item => (
          <CartItem
            key={item.product.id}
            productId={item.product.id}
            quantity={item.quantity}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    </Layout>
  )
}

const mapStateToProps = state => ({
  items: cartSelectors.getCartItems(state),
})

const mapDispatchToProps = {
  removeProduct: cartActions.removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export { Cart }
