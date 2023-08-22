import React from 'react';
import { useSwiper } from 'swiper/react';
import {ReactComponent as Carouselright} from '../../assest/carouselRight.svg'

const CaroRight = () => {
    const swiper = useSwiper()
  return (
    <div>
        <Carouselright onClick={()=>{swiper.slidePrev()}}/>
    </div>
  )
}

export default CaroRight