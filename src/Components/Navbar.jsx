import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-primary bg-primary text-light">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1 text-light">Happy Feet</span>
                </Link>
                <Link to="/cart">
                    <span className="nav-item float-right text-light"><i className="fa fa-shopping-cart h4" aria-hidden="true">
        </i> <small className="badge badge-pill badge-danger">{this.props.cartItems}</small>
                    </span>
                </Link>

            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    const {cartItems} = state
    return {
        cartItems
    }

}

const mapDispatchToProps = (dispatch) => {
    return {}

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
