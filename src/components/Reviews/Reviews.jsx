import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../Slide/Slide';
import 'swiper/css';

import './index.scss';
import reviews from '../../reviews';


const Reviews = () => {
    return (
        <div className='reviews main-wrapper'>
            <div className='reviews__wrapper'>
                <h2 className='h2 reviews__title'>What out clients say</h2>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    centeredSlides={true}
                    initialSlide={2}
                >   
                    {
                        reviews.map((item) => {
                            return (
                                <SwiperSlide key={item.id} className='reviews__swiper-slide'>
                                    <Slide item={item}/> 
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Reviews