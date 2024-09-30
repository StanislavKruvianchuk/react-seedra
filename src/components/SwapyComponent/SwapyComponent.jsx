import './index.scss';
import { createSwapy } from 'swapy';
import { useEffect, useState } from 'react';
import { TbDeviceGamepad2 } from "react-icons/tb";

const SwapyComponent = () => {
    const [active, setActive] = useState(false);
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    const handleScroll = () => {
        if (show) return;

        setActive(true)
        clearTimeout(window.scrollTimeout)
        window.scrollTimeout = setTimeout(() => {
            setActive(false); 
        }, 2100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(window.scrollTimeout);
        };
    }, [show]);


    useEffect(() => {
        const container = document.querySelector('.container');
        
        if (container) {
            const swapy = createSwapy(container, {
                animation: 'dynamic',
            });

            swapy.enable(true);

            swapy.onSwap((event) => {
               
            });
        } else {
            console.error("Container element not found!");
        }
    }, [active]); 

    return (
        <div className='swapy'>
            <div onClick={handleShow} className={`swapy__wrapper ${active ? 'swapy__wrapper--active' : ''}`} title="Game button">
                <TbDeviceGamepad2 className='swapy__icon' />
            </div>
                {
                    show && (
                        <div className="swapy__container main-wrapper">
                            <div className="section section-1" data-swapy-slot="foo">
                                <div className="content-a" data-swapy-item="a">1</div>
                            </div>
                            <div className="section section-2" data-swapy-slot="bar">
                                <div className="content-b" data-swapy-item="b">2</div>
                            </div>
                            <div className="section section-3" data-swapy-slot="baz">
                                <div className="content-c" data-swapy-item="c">3</div>
                            </div>
                            <div className="section section-4" data-swapy-slot="eye">
                                <div className="content-d" data-swapy-item="d">4</div>
                            </div>
                            <div className="section section-5" data-swapy-slot="pop">
                                <div className="content-e" data-swapy-item="d">5</div>
                            </div>
                        </div>
                    )
                }
        </div>
      
    );
};

export default SwapyComponent;