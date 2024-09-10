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
                        <svg width="24" height="24" viewBox="0 0 24 24"     fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8.87579C10.2797 8.87579 8.87577 10.2797 8.87577 12C8.87577 13.7203 10.2797 15.1242 12 15.1242C13.7203 15.1242 15.1242 13.7203 15.1242 12C15.1242 10.2797 13.7203 8.87579 12 8.87579ZM21.3703 12C21.3703 10.7063 21.382 9.42423 21.3094 8.13283C21.2367 6.63283 20.8945 5.30158 19.7976 4.2047C18.6984 3.10548 17.3695 2.76564 15.8695 2.69298C14.5758 2.62033 13.2937 2.63204 12.0023 2.63204C10.7086 2.63204 9.42655 2.62033 8.13515 2.69298C6.63515 2.76564 5.3039 3.10783 4.20702 4.2047C3.1078 5.30392 2.76796 6.63283 2.6953 8.13283C2.62265 9.42658 2.63436 10.7086 2.63436 12C2.63436 13.2914 2.62265 14.5758 2.6953 15.8672C2.76796 17.3672 3.11015 18.6985 4.20702 19.7953C5.30624 20.8945 6.63515 21.2344 8.13515 21.307C9.4289 21.3797 10.7109 21.368 12.0023 21.368C13.2961 21.368 14.5781 21.3797 15.8695 21.307C17.3695 21.2344 18.7008 20.8922 19.7976 19.7953C20.8969 18.6961 21.2367 17.3672 21.3094 15.8672C21.3844 14.5758 21.3703 13.2938 21.3703 12ZM12 16.807C9.33983 16.807 7.19296 14.6602 7.19296 12C7.19296 9.33986 9.33983 7.19298 12 7.19298C14.6601 7.19298 16.807 9.33986 16.807 12C16.807 14.6602 14.6601 16.807 12 16.807ZM17.0039 8.11876C16.3828 8.11876 15.8812 7.6172 15.8812 6.99611C15.8812 6.37501 16.3828 5.87345 17.0039 5.87345C17.625 5.87345 18.1266 6.37501 18.1266 6.99611C18.1267 7.14359 18.0978 7.28966 18.0415 7.42595C17.9851 7.56224 17.9024 7.68607 17.7981 7.79036C17.6939 7.89464 17.57 7.97733 17.4337 8.03368C17.2974 8.09004 17.1514 8.11895 17.0039 8.11876Z" fill="#359740" />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.0558C2 17.0275 5.61083 21.1617 10.3333 22V14.7775H7.83333V12H10.3333V9.7775C10.3333 7.2775 11.9442 5.88917 14.2225 5.88917C14.9442 5.88917 15.7225 6 16.4442 6.11083V8.66667H15.1667C13.9442 8.66667 13.6667 9.2775 13.6667 10.0558V12H16.3333L15.8892 14.7775H13.6667V22C18.3892 21.1617 22 17.0283 22 12.0558C22 6.525 17.5 2 12 2C6.5 2 2 6.525 2 12.0558Z" fill="#359740" />
                        </svg>
                    </div>
                    <div className='footer__bottom-text'>All rights reserved</div>
                </div>
           </div>
        </footer>
    )
}

export default Footer;