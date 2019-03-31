import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { About } from './pages/About'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/about" exact component={About} />
          <Route path="/:productId" exact component={ProductDetail} />
        </Switch>
      </div>
    )
  }
}

export default App
