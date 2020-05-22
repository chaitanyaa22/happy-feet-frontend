import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class Cart extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h3 className="font-weight-lighter">Your Cart</h3>
                <hr />
                <div className="row justify-content-center">
                    {this.props.cart.map((e, i) => {
                        return <div className="card mb-3 col-lg-8 col-xs-12">
                            <div className="row no-gutters">
                                <div className="col-md-4 px-5 pt-5 pb-3">
                                    <img src={e.productImage} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{e.productName}</h5>
                                    </div>
                                    <span className="text-muted px-3"><strong>{e.productBrand}</strong></span>
                                    <span className="badge bg-success rounded text-light">{e.productRating} <small><i className="fa fa-star" aria-hidden="true"></i></small></span>
                                    <span>
                                        <span className="text-muted px-3">Color: {e.productColor}</span>
                                    </span>
                                    <span className="float-right">
                                        <span className="pr-2"><strong><i className="fa fa-inr" aria-hidden="true"></i> {e.productDiscountPrice}</strong></span>
                                        <span className="text-muted pr-2"><strike><i className="fa fa-inr" aria-hidden="true"></i> {e.productOriginalPrice}</strike></span>
                                        <span className="text-success">{((e.productOriginalPrice - e.productDiscountPrice) / e.productOriginalPrice).toFixed(2) * 100}% off</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const { cart } = state
    return {
        cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
