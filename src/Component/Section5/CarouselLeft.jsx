import React from 'react';
import { useSwiper } from 'swiper/react';
import {ReactComponent as Carouselleft} from '../../assest/carouselleft.svg';
import './CarouselLeft.css'


const CaroLeft = () => {
    const swiper = useSwiper()
  return (
    <div className='carousel-left'>
        <Carouselleft onClick={()=>{swiper.slidePrev()}}/>
    </div>
  )
}

export default CaroLeft