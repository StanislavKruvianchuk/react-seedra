import './index.scss';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as GreenArrow } from '../../assets/icons/green-arrow.svg';
import menuItems from '../../dataMobileMenu';
import { useState } from 'react';

const MobileMenu = ({ active }) => {
    const [openItems, setOpenItems] = useState([]);

    const toggleSubItems = (index) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter((item) => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    }

    if (active) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }



    return (
        <div className={`mobile-menu ${active ? 'mobile-menu--active' : '' }`}>
            <div className='mobile-menu__wrapper'>
                    <div className='mobile-menu__search'>
                        <span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7753 14.6511L12.8091 11.7067C13.9605 10.2699 14.5181 8.44635 14.3672 6.61085C14.2164 4.77535 13.3685 3.06745 11.998 1.83834C10.6275 0.609226 8.83851 -0.0476794 6.9989 0.00269722C5.15928 0.0530739 3.40887 0.806903 2.10758 2.10918C0.806291 3.41146 0.0530336 5.1632 0.00269517 7.00421C-0.0476432 8.84523 0.608763 10.6356 1.83694 12.0071C3.06512 13.3787 4.77172 14.2272 6.60583 14.3781C8.43994 14.5291 10.2621 13.9711 11.6978 12.8188L14.64 15.7633C14.7143 15.8383 14.8028 15.8978 14.9002 15.9385C14.9976 15.9791 15.1021 16 15.2077 16C15.3132 16 15.4177 15.9791 15.5152 15.9385C15.6126 15.8978 15.701 15.8383 15.7753 15.7633C15.9194 15.6141 16 15.4147 16 15.2072C16 14.9997 15.9194 14.8003 15.7753 14.6511ZM7.21243 12.8188C6.10552 12.8188 5.02346 12.4903 4.10309 11.8749C3.18272 11.2595 2.46538 10.3847 2.04178 9.36129C1.61818 8.33786 1.50735 7.2117 1.7233 6.12523C1.93925 5.03875 2.47228 4.04076 3.25499 3.25746C4.0377 2.47416 5.03493 1.94072 6.12058 1.72461C7.20622 1.50849 8.33153 1.61941 9.35419 2.04333C10.3768 2.46725 11.2509 3.18514 11.8659 4.1062C12.4809 5.02727 12.8091 6.11015 12.8091 7.21791C12.8091 8.70337 12.2195 10.128 11.1699 11.1784C10.1203 12.2287 8.69676 12.8188 7.21243 12.8188Z" fill="#70737C" />
                            </svg>
                        </span>
                        <input className='mobile-menu__search-input' type="text" placeholder="Search"></input>
                    </div>
                    <nav className='mobile-menu__nav'>
                        {
                            menuItems.map((item, index) => {
                                const isOpen = openItems.includes(index);
                                return (
                                    <div className='mobile-menu__nav-item' key={index}>
                                        <div onClick={() => toggleSubItems(index)} className='mobile-menu__nav-box'> 
                                            <span className={`${isOpen ? 'mobile-menu__nav-title--active' : '' }`}>{ item.name }</span>   

                                            {
                                                item.subItems && item.subItems.length > 0 && (
                                                    <span className={`arrow ${isOpen ? 'arrow-active' : ''}`}>
                                                       <Arrow />
                                                    </span> 
                                                )
                                            }
                                        </div>
                                        {
                                            item.subItems && item.subItems.length > 0 && (
                                                <div className={`mobile-menu__sub-box ${isOpen ? 'mobile-menu__sub-box--active' : ''}`}>
                                                    {
                                                        item.subItems.map((subItem, i) => {
                                                            return (
                                                                <div className='mobile-menu__sub-item' key={i}>
                                                                    { subItem.name }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    <div className='mobile-menu__about'>
                        <div className='mobile-menu__about-item'>
                            <div>Our blog</div>
                            <GreenArrow/>
                        </div>
                        <div className='mobile-menu__about-item'>
                            <div>About Seedra</div>
                            <GreenArrow/>
                        </div>
                    </div>
                    </nav>
            </div>
            <div className='mobile-menu__blur'></div>
        </div>
    )
}

export default MobileMenu