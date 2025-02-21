import './index.scss';

const OrderSummary = () => {
    return (
        <div className='order-summary'>
            <div className='order-summary__wrapper'>
                <div className='order-summary__top'>
                    <div className='order-summary__count'> items</div>
                    <div className='order-summary__total'>$12.56</div>
                </div>
                <div className='order-summary__type'>
                    <select className='order-summary__select' name="delivery" id="delivery">
                        <option value="Shipping">Shipping</option>
                        <option value="myOwn">myOwn</option>
                    </select>
                </div>
                <label className='order-summary__promocode' htmlFor="promocode">
                    <span className='order-summary__input-text'>Promocode</span>
                    <input className='order-summary__promocode-input' type="text" placeholder='Promocode' />
                </label>
                <div className='order-summary__bottom'></div>
                <button className='green-button'>Continue</button>
            </div>
        </div>
    )
}

export default OrderSummary