import './index.scss';
import { useSelector } from "react-redux";

import CartTableItem from '../CartTableItem/CartTableItem';
import OrderSummary from '../OrderSummary/OrderSummary';

const CartSection = () => {
    const cart = useSelector(state => state.cart);

    return (
        <section className="main-wrapper header-indent">
            <div className="cart-section__wrapper">
                <div className="cart-section__top">
                    <h2 className="cart-section__title h2">Your Cart.</h2>
                    <div className="cart-section__count">{cart.length} items</div>
                </div>
                {cart.length > 0 ? (
                    <div className='cart-section__table'>
                        {cart.map(item => (
                            <CartTableItem product={item} />
                        ))}
                    </div>

                ) : (
                    <p>Cart is empty</p>
                )}
                <OrderSummary />
            </div>
        </section>
    )
}

export default CartSection