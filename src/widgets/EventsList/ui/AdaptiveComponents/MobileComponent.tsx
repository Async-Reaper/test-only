import React, {memo} from "react";
import {type ITimeLapse} from "entities/Time";
import {TimeLapsSlider} from "features/TimeLapsSlider";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {type PaginationOptions} from "swiper/types";

import cls from "../EventList.module.scss";

interface Props {
   events: ITimeLapse
}

export const MobileComponent = memo(({events}: Props) => {
   const pagination: PaginationOptions  = {
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '"></span>'
      }
   };

   return (
      <div className={cls.event__list__wrapper}>
         <Swiper
            modules={[Pagination]}
            pagination={pagination}
            className={cls.event__list}
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
         </Swiper>
         <TimeLapsSlider />
      </div>
   );
})
