import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilterPanel from './Components/FilterPanel'
import { BrowserRouter, Route } from 'react-router-dom'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Route path="/" exact>
          <div className="col">
            <div className="row">
              <div className="col-lg-2 col-sm-12">
                <FilterPanel />
              </div>
              <div className="col-lg-10 col-sm-12">
                <Products />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>

      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {}

}

const mapDispatchToProps = (dispatch) => {
  return {}

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

