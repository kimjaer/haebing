import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


export default function Banner({ id, cls }) {
  return (
    <div id={id} className={cls}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide style={{backgroundImage : 'url(/img/banner.jpg)'}}>
            <p className='visually-hidden'>
                봄맞이 쿠폰
            </p>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage : 'url(/img/banner1.jpg)'}}>
            <p className='visually-hidden'>
                친환경 챌린지
            </p>
        </SwiperSlide>
            
        <SwiperSlide style={{backgroundImage : 'url(/img/banner2.jpg)'}}>
            <p className='visually-hidden'>
                봄맞이 이벤트
            </p>
        </SwiperSlide>
            
            
      </Swiper>
    </div>
  );
}
