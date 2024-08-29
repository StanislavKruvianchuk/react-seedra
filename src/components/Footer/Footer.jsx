import './index.scss'
import Logo from '../../assets/seedra_logo.webp';

const Footer = () => {
    return (
        <footer className='footer main-wrapper'>
           <div className='footer__wrapper'>
                <div className="footer__top">
                    <div className='footer__logo-wrapper'>
                        <img src={Logo} alt="footer-logo" />
                    </div>
                    <ul className='footer__left-menu'>
                        <li>ALL PRODUCTS</li>
                        <li>ABOUT SEEDRA</li>
                        <li>OUR BLOG</li>
                    </ul>
                    <ul className='footer__right-menu'>
                        <li> Terms&Conditions </li>
                        <li> Privacy Policy </li>
                    </ul>
                </div>
           </div>
        </footer>
    )
}

export default Footer;