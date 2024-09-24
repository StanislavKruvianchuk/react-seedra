import './index.scss';
import reviewLogo from '../../assets/review-logo.png';

const Slide = ({ item }) => {
    const { id, username, rating, review, date } = item
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
                    <div className="reviews__slide-rating"></div>
                    <p className="reviews__slide-text">{ review }</p>
                </div>
            </div>
        </div>
    )
}

export default Slide