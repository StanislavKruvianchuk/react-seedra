import './index.scss';
import LeftBg from '../../assets/banner_bg_left.png';
import RightBg from '../../assets/banner_bg_right.png';

const Banner = () => {
    return (
        <div className="banner main-wrapper">
            <div className="banner__wrapper">
                <div className="banner__title">We sell seeds</div>
                <div className="banner__description">that always sprout and gardening supplies which never break</div>

                <div className="banner__bg">
                    <img className='banner__bg-left' src={LeftBg} alt="left_bg" />
                    <img className='banner__bg-right' src={RightBg} alt="right_bg" />
                </div>
            </div>
        </div>
    )
}

export default Banner