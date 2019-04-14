import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { About } from './pages/About'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import store from './store'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/about" exact component={About} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/:productId" exact component={ProductDetail} />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default App
