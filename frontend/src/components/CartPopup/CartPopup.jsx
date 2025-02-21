import './index.scss';

const cartPopup = ({ active }) => {
    return (
        <div className={`cart-popup ${active ? 'cart-popup--active' : '' }`}>
            <div className='cart-popup__wrapper'>
                
            </div>
        </div>
    )
}

export default cartPopup;