import './index.scss';
import { ReactComponent as Cart } from '../../assets/icons/add-to-cart.svg';

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
       dispatch(addItem(product))
    }

    return (
        <button onClick={addToCart} className="add-to-cart">
            <Cart />
        </button>
    )
}

export default AddToCartButton