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
                        <a className='footer__left-item' href='#'>ALL PRODUCTS</a>
                        <a className='footer__left-item' href='#'>ABOUT SEEDRA</a>
                        <a className='footer__left-item' href='#'>OUR BLOG</a>
                    </div>
                    <div className='footer__logo-wrapper--desktop'>
                        <img src={Logo} alt="footer-logo" />
                    </div>
                    <div className='footer__right-menu'>
                        <a className='footer__left-item' href='#'> Terms&Conditions </a>
                        <a className='footer__left-item' href='#'> Privacy Policy </a>
                    </div>
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