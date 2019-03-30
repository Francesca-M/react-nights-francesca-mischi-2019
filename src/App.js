import React, { Component } from 'react'

import { ProductList } from './pages/ProductList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>New catalog</h1>
        <ProductList />
      </div>
    )
  }
}

export default App
