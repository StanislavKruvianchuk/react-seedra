import './index.scss';
import cabbage from '../../assets/cabbage.png';
import corn from '../../assets/corn.png';
import spinach from '../../assets/spinach.png';

const CartTableItem = ({ product }) => {
    const images = {
        cabbage: cabbage,
        corn: corn,
        spinach: spinach,
    };
    const imageSrc = images[product.image_type];
    return (
        <div className='cart-item' key={product.id}>
            <div className='cart-item__image'>
                <img src={imageSrc} alt={product.title} />
            </div>
            <div className='cart-item__title'>{product.title}</div>
            <div className='cart-item__quantity'>
                <div>-</div>
                <div className='quantity-number'> {product.quantity} </div>
                <div>+</div>
            </div>
            <div className='cart-item__price'>${product.price}</div>
            <div className='cart-item__total'></div>
        </div>
    )
}

export default CartTableItem