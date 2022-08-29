import React, { useEffect, useState } from 'react'
import EcomNav from '../Navbar/EcomNav';
import Footer from '../Navbar/Footer';
import { useSelector, useDispatch } from 'react-redux'
import './cart.css'
import { decrease, deletecart, increase } from '../../../redux/cartSlice';
import Message from '../Message';

function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const getSumAll = (arr) => {
        return arr.reduce((total, current) => {
            return total + current
        }, 0)

    }
    useEffect(() => {
        let total = [] // array to get all totals of each item
        cart.map(x => {
            total.push(x.number * x.price)
            return total
        })
        setTotalCartPrice(getSumAll(total))
    }, [cart])

    return (
        <>
            <EcomNav />
            <Message show={true} severity="success" message="Success"/>
            {/* <section class="h-100 gradient-custom"> */}
            <div class="container py-5">
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-8">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Cart - {cart.length} items</h5>
                            </div>
                            <div class="card-body">
                                {/* <!-- Single item --> */}
                                <div class="row">
                                    {cart.map(({ id, title, thumbnail, price, number }, index) => {
                                        return (
                                            <>
                                                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                    {/* <!-- Image --> */}
                                                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                        <img src={thumbnail}
                                                            class="w-100" alt="Blue Jeans Jacket" />
                                                        <a href="/cart">
                                                            <div class="mask" style={{ backgroundColor: " rgba(251, 251, 251, 0.2)" }}></div>
                                                        </a>
                                                    </div>
                                                    {/* <!-- Image --> */}
                                                </div>

                                                <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                    {/* <!-- Data --> */}
                                                    <p><strong>{title}</strong></p>
                                                    {/* <p>Color: blue</p>
                                                    <p>Size: M</p> */}
                                                    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                                        onClick={() => { dispatch(deletecart({ id: id })) }} title="Remove item">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                                        title="Move to the wish list">
                                                        <i class="fa fa-heart"></i>
                                                    </button>
                                                    {/* <!-- Data --> */}
                                                </div>

                                                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                    {/* <!-- Quantity --> */}
                                                    <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                        <button class="btn btn-primary px-3 me-2" style={{ height: "50px" }}
                                                            onClick={() => { dispatch(decrease({ index: index })) }}>
                                                            <i class="fa fa-minus"></i>
                                                        </button>

                                                        <div class="form-outline">
                                                            <input id="form1" min="0" name="quantity" value={number} type="number" class="form-control" style={{ height: "50px" }} />
                                                            <label class="form-label" for="form1">Quantity</label>
                                                        </div>

                                                        <button class="btn btn-primary px-3 ms-2" style={{ height: "50px" }}
                                                            onClick={() => { dispatch(increase({ index: index })) }}>
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    {/* <!-- Quantity --> */}

                                                    {/* <!-- Price --> */}
                                                    <p class="text-start text-md-center">
                                                        Unit Price: <strong>${price}</strong> <br />
                                                        Total Price: <strong>${price * number}</strong>
                                                    </p>
                                                    {/* <!-- Price --> */}
                                                </div>

                                                <hr class="my-4" />
                                            </>
                                        )
                                    })}
                                </div>
                                {/* <!-- Single item --> */}

                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p><strong>Expected shipping delivery</strong></p>
                                <p class="mb-0">12.10.2020 - 14.10.2020</p>
                            </div>
                        </div>
                        <div class="card mb-4 mb-lg-0">
                            <div class="card-body">
                                <p><strong>We accept</strong></p>
                                <img class="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" />
                                <img class="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                    alt="American Express" />
                                <img class="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" />
                                <img class="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                                    alt="PayPal acceptance mark" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Summary</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>${totalCartPrice}</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p class="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>${totalCartPrice}</strong></span>
                                    </li>
                                </ul>

                                <button type="button" class="btn btn-primary btn-lg btn-block">
                                    Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
            <Footer />
        </>
    )
}
export default Cart;