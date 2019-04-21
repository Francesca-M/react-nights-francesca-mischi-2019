import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { About } from './pages/About'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Account } from './pages/Account'
import { LogIn } from './pages/LogIn'
import { PrivateRoute } from './components/PrivateRoute'
import { getCustomer } from './utils/customer'
import { configureStore } from './store'

const store = configureStore({
  customer: getCustomer(),
})

class App extends Component {
  // remove this and all classes
  render() {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/about" exact component={About} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" exact component={SignUp} />
            <PrivateRoute path="/account" component={Account} />
            <Route path="/:productId" exact component={ProductDetail} />
            <Redirect to="/" />
          </Switch>
        </Provider>
      </div>
    )
  }
}

export default App
