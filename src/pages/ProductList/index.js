import React, { Component } from 'react'

import MainTitle from '../../components/MainTitle'
import List from './components/List'

import { getProducts } from '../../api/get-products'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: {},
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products, isLoading: false })
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state

    return (
      <div>
        <MainTitle textAlign="center">New catalog</MainTitle>
        {isLoading && '...'}
        {data && <List products={data} />}
      </div>
    )
  }
}

export { ProductList }
