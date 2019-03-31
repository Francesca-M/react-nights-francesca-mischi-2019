import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainTitle from '../../components/MainTitle'

import { getProducts } from '../../api/get-products'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: {},
  }

  async componentDidMount() {
    const products = await getProducts()
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
        {data && (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <Link to={`/${item.id}`}>
                  <img src={item.attributes.image_url} width="50" alt="" />
                  <h2>{item.attributes.name}</h2>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export { ProductList }
