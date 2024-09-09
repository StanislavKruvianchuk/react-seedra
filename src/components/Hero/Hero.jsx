import './index.scss'
import MainImage from '../../assets/main_image_desktop.png';
import HeroBg from '../../assets/hero_bg.png';
import leave_1 from '../../assets/leave-1.png';
import leave_2 from '../../assets/leave-2.png';
import leave_3 from '../../assets/leave-3.png';
import leave_4 from '../../assets/leave-4.png';

const Hero = () => {
    return (
        <div className='hero main-wrapper'>
            <div className='hero__wrapper'>
                <div className='hero__product-images'>
                    <img src={HeroBg} className="hero__bg"></img>
                    <img className='hero__bg-leave-1' src={leave_1} alt="leave_1" />
                    <img className='hero__bg-leave-2' src={leave_2} alt="leave_2" />
                    <img className='hero__bg-leave-3' src={leave_3} alt="leave_3" />
                    <img className='hero__bg-leave-4' src={leave_4} alt="leave_4" />
                    <div className='hero__image-wrapper' >
                        <img className='hero__main-image' src={MainImage} alt="bachground" />
                    </div>
                </div>
                <div className='hero__bottom'>
                    <div className='hero__product-info'>
                        <div className='hero__price'>
                            <div className='hero__product-price'>
                            <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.2279 11.1488C18.6934 9.94572 17.9163 8.86586 16.9453 7.97682L16.144 7.24164C16.1168 7.21736 16.0841 7.20013 16.0487 7.19146C16.0133 7.1828 15.9762 7.18296 15.9409 7.19193C15.9056 7.2009 15.873 7.21841 15.846 7.24292C15.819 7.26743 15.7984 7.29819 15.7861 7.3325L15.4281 8.35955C15.2051 9.00387 14.7948 9.66195 14.2138 10.309C14.1753 10.3503 14.1312 10.3613 14.101 10.3641C14.0707 10.3668 14.0239 10.3613 13.9825 10.3228C13.944 10.2897 13.9247 10.2402 13.9275 10.1906C14.0294 8.53302 13.5337 6.66341 12.4489 4.62858C11.5512 2.93794 10.3039 1.61902 8.74542 0.699353L7.60823 0.0302557C7.45954 -0.0578559 7.26955 0.0577905 7.27781 0.23126L7.33839 1.55293C7.37969 2.45608 7.27506 3.25459 7.02724 3.91818C6.72436 4.73046 6.28931 5.48491 5.7331 6.16227C5.34603 6.63302 4.90731 7.0588 4.4252 7.43163C3.26407 8.32421 2.31992 9.46792 1.66345 10.7771C1.0086 12.0977 0.667486 13.5517 0.666687 15.0257C0.666687 16.3254 0.922761 17.5837 1.4294 18.7705C1.9186 19.9131 2.62458 20.9501 3.50829 21.8241C4.40042 22.7052 5.43573 23.3991 6.58944 23.881C7.78445 24.3821 9.05105 24.6354 10.359 24.6354C11.6669 24.6354 12.9335 24.3821 14.1285 23.8837C15.2794 23.4047 16.3259 22.706 17.2096 21.8269C18.1018 20.9457 18.8012 19.9159 19.2885 18.7732C19.7944 17.5897 20.0539 16.3156 20.0512 15.0285C20.0512 13.6848 19.7759 12.3796 19.2279 11.1488V11.1488Z" fill="#E55C5C" />
                            </svg>
                                $12.56
                            </div>
                            <div className='hero__product-compare'>$15.56</div>
                        </div>
                        <div className='hero__product-title'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</div>
                        <div className='hero__product-description'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</div>
                    
                    </div>
                    <div className='hero__buttons-container'>
                        <button className="green-button">Add to card</button>
                        <a className='transparent-button' href="#">Discover</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero