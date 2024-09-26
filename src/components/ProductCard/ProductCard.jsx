import './index.scss';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import WishListButton from '../WishlistButton/WishListButton';
import cabbage from '../../assets/cabbage.png';
import corn from '../../assets/corn.png';
import spinach from '../../assets/spinach.png';
import star from '../../assets/little_star.png';
import starHalf from '../../assets/star-half-alt.png'

const images = {
    cabbage: cabbage,
    corn: corn,
    spinach: spinach,
};

const ProductCard = ({ product }) => {
    const { image_type, title, price, rating, reviews } = product;

    const imageSrc = images[image_type];


    const ratingHTML = () => {
        const stars = []
        let starsCount = '';

        if (rating % 1 !== 0) {
            starsCount = Math.floor(rating);
        } else {
            starsCount = rating;
        }

        for (let i = 0; i < starsCount; i++) {
            stars.push(
                <img key={rating} src={star} alt="star" />
            )
        }

        if (rating % 1 !== 0) {
            stars.push(
                <img key={rating} src={starHalf} alt="star" />
            )
        }

        return stars
    }

    return (
        <div className='product'>
            <div className='product__wrapper'>
                <WishListButton />
                <img src={imageSrc} alt="product image" />
                <div className='product__info'>
                    <div className='product__rating'>
                        {ratingHTML()}
                        <span className='product__rating-amount'>{ `(${reviews})` }</span>
                    </div>
                    <div className='product__title'>{title}</div>
                    <div className='product__price-box'>
                        <span className='product__price'>${price}</span>
                        <AddToCartButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard