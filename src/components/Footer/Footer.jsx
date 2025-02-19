import './index.scss'
import Logo from '../../assets/seedra_logo.webp';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container main-wrapper'>
           <div className='footer__wrapper'>
                <div className="footer__top">
                    <div className='footer__logo-wrapper'>
                        <img src={Logo} alt="footer-logo" />
                    </div>
                    <div className='footer__left-menu'>
                        <a href='#'>ALL PRODUCTS</a>
                        <a href='#'>ABOUT SEEDRA</a>
                        <a href='#'>OUR BLOG</a>
                    </div>
                    <div className='footer__logo-wrapper--desktop'>
                        <img src={Logo} alt="footer-logo" />
                    </div>
                    <ul className='footer__right-menu'>
                        <li> Terms&Conditions </li>
                        <li> Privacy Policy </li>
                    </ul>
                </div>
                <div className='footer__bottom'>
                    <div className='footer__icons'>
                       <Instagram/>
                       <Facebook />
                    </div>
                    <div className='footer__bottom-text'>All rights reserved</div>
                </div>
           </div>

            </div>
        </footer>
    )
}

export default Footer;