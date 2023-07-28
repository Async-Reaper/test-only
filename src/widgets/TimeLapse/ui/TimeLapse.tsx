import React, { useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {currentTimeLapse} from "entities/Time";
import {ChangeTimeLapse} from "features/ChangeTimeLapse";
import {gsap} from 'gsap'

import cls from "./TimeLapse.module.scss";

const Component = () => {
   const times = useSelector(currentTimeLapse);

   const [start, setStart] = useState(times.yearStart);
   const [end, setEnd] = useState(times.yearEnd);
   const yearStart = useRef<HTMLDivElement>(null);
   const yearEnd = useRef<HTMLDivElement>(null);


   useEffect(() => {
      gsap.from(yearStart.current, {
         textContent: start,
         duration: 0.5,
         snap: { textContent: 1 },
         stagger: 12,
      });

      gsap.from(yearEnd.current, {
         textContent: end,
         duration: 0.5,
         snap: { textContent: 1 },
         stagger: 12,
      });

      setStart(times.yearStart)
      setEnd(times.yearEnd)
   }, [times, setStart, setEnd])


   return (
      <div className={cls.timelapse__wrapper}>
         <div className={cls.change_timelapse__wrapper}>
            <ChangeTimeLapse />
         </div>
         <div className={cls.timelapse__value}>
            <span className={cls.times_start} ref={yearStart}>
               {times.yearStart}
            </span>
            <span className={cls.times_old} ref={yearEnd}>
               {times.yearEnd}
            </span>
         </div>

      </div>
   );
};

export const TimeLapse = React.memo(Component);
