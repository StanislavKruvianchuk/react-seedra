import './index.scss'
import MainImage from '../../assets/main_image_desktop.png';
import HeroBg from '../../assets/hero_bg.png';
import HeroBgDesktop from '../../assets/hero_desktop_bg.png';
import leave_1 from '../../assets/leave-1.png';
import leave_2 from '../../assets/leave-2.png';
import leave_3 from '../../assets/leave-3.png';
import leave_4 from '../../assets/leave-4.png';
import { ReactComponent as FireHero } from '../../assets/icons/hero-fire.svg';

const Hero = () => {
    return (
        <section className='hero main-wrapper header-indent'>
            <div className='hero__wrapper'>
                <div className='hero__product-images'>
                    <img src={HeroBg} className="hero__bg" alt='hero_bg-mobile'/>
                    <img className='hero__bg-leave-1' src={leave_1} alt="leave_1" />
                    <img className='hero__bg-leave-2' src={leave_2} alt="leave_2" />
                    <img className='hero__bg-leave-3' src={leave_3} alt="leave_3" />
                    <img className='hero__bg-leave-4' src={leave_4} alt="leave_4" />
                    <div className='hero__image-wrapper' >
                        <img className='hero__main-image' src={MainImage} alt="bachground" />
                    </div>

                    <img src={HeroBgDesktop} className="hero__bg--desktop" alt='hero_bg-desktop'/>
                </div>
                <div className='hero__bottom'>
                    <div className='hero__product-info'>
                        <div className='hero__price'>
                            <div className='hero__product-price'>
                            <FireHero />
                                $12.56
                            </div>
                            <div className='hero__product-compare'>$15.56</div>
                        </div>
                        <div className='hero__product-title'>SEEDRA Basil Seeds for Indoor and Outdoor Planting</div>
                        <div className='hero__product-description'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</div>
                    
                    </div>
                    <div className='hero__buttons-container'>
                        <button className="green-button">Add to card</button>
                        <a className='transparent-button' href="/">Discover</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero