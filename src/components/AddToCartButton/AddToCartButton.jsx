import './index.scss';
import { ReactComponent as Cart } from '../../assets/icons/add-to-cart.svg';

const AddToCartButton = () => {
    return (
        <button className="add-to-cart">
            <Cart />
        </button>
    )
}

export default AddToCartButton