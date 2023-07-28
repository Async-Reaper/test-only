import React, {memo} from "react";
import {type ITimeLapse} from "entities/Time";
import {classNames} from "shared/lib";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import cls from "../EventList.module.scss";

import  "swiper/scss/pagination";

interface Props {
   navPrevRef: any;
   navNextRef: any;
   events: ITimeLapse
}

export const DesktopComponent = memo(({navPrevRef, navNextRef, events}: Props) => {
   return (
      <Swiper
         modules={[Navigation]}
         spaceBetween={50}
         slidesPerView={3}
         onSlideChange={() => { console.log('slide change'); }}
         onSwiper={(swiper) => { console.log(swiper); }}
         className={cls.event__list}
         navigation={{
            prevEl: navPrevRef.current,
            nextEl: navNextRef.current,
         }}
         onInit={(swiper) => {
            // @ts-expect-error
            swiper.params.navigation.prevEl = navPrevRef.current;
            // @ts-expect-error
            swiper.params.navigation.nextEl = navNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
         }}
      >
         <div>
            {
               events.events.map(event =>
                  <SwiperSlide key={event.id} className={cls.event__item}>
                     <span className={cls.event_year}>
                        {event.eventYear}
                     </span>
                     <span className={cls.event_description}>
                        {event.eventDescription}
                     </span>
                  </SwiperSlide>
               )

            }
         </div>
         <div
            className={classNames(cls.swiper__btn__wrapper, {}, [cls.back])}
         >
            <button
               className={cls.swiper__btn}
               ref={navPrevRef}
            >
               <div className={cls.arrow__back} />
            </button>
         </div>
         <div
            className={classNames(cls.swiper__btn__wrapper, {}, [cls.next])}
         >
            <button
               className={cls.swiper__btn}
               ref={navNextRef}
            >
               <div className={cls.arrow__next} />
            </button>
         </div>
      </Swiper>
   );
})
