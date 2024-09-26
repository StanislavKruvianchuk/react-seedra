import './index.scss';
import reviewLogo from '../../assets/review-logo.png';

import star from '../../assets/little_star.png';
import starHalf from '../../assets/star-half-alt.png';

const Slide = ({ item }) => {
    const { id, username, rating, review, date } = item


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
        <div className="reviews__slide">
            <div className="reviews__slide-wrapper">
                <div className='reviews__slide-top'>
                    <img src={reviewLogo} alt="#" />
                    <div className='reviews__slide-info'>
                        <span className='reviews__slide-name'>{ username }</span>
                        <div className='reviews__slide-date'>{ date }</div>
                    </div>
                </div>
                <div className='reviews__slide-bottom'>
                    <div className="reviews__slide-rating">
                        {ratingHTML()}
                    </div>
                    <p className="reviews__slide-text">{ review }</p>
                </div>
            </div>
        </div>
    )
}

export default Slide