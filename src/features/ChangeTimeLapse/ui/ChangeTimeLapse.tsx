import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {currentTimeLapse, timeLapse,timeLapseActions} from "entities/Time";
import {gsap} from "gsap";
import {classNames} from "shared/lib";
import {useAppDispatch} from "shared/lib/hooks";

import cls from './ChangeTimeLapse.module.scss';

const Component = () => {
   const circularTime = useRef<HTMLDivElement>(null);
   const timeLinks = useRef<any>([]);

   const [rotateDeg, setRotateDeg] = useState<number>(0);
   const fullTimeLaps = useSelector(timeLapse);
   const currentTimeLapsNumber = useSelector(currentTimeLapse);
   const dispatch = useAppDispatch();

   const onRotateCircularTime = useCallback(() => {
      gsap.to(circularTime.current, {
         rotate: rotateDeg,
         duration: 1,
      })
   }, [currentTimeLapsNumber, fullTimeLaps, rotateDeg])

   const calculateDegRotate = useCallback((id: number) => {
      const sg = (360 - (60 * id)) + 180;
      setRotateDeg(sg);
   }, [setRotateDeg])

   const onChangeTimeLaps = useCallback((id: number) => {
      const res = fullTimeLaps.filter(timeLapse => timeLapse.id === id)
      dispatch(timeLapseActions.setCurrentTimeLapse(res[0]))
      calculateDegRotate(id)
      onRotateCircularTime();
   }, [dispatch, onRotateCircularTime, calculateDegRotate, currentTimeLapsNumber])

   useEffect(() => {
      timeLinks.current = timeLinks.current.slice(0, fullTimeLaps.length);
   }, []);

   useEffect(() => {
      onChangeTimeLaps(currentTimeLapsNumber.id)
   }, [currentTimeLapsNumber, fullTimeLaps, onRotateCircularTime])

   return (
      <div className={classNames(cls.times__wrapper, {})} ref={circularTime}>
         {
            fullTimeLaps.map((timeLapse, index) =>
               <div
                  style={{transform: `rotate(${360-rotateDeg}deg)`}}
                  key={timeLapse.id}
                  className={classNames(cls.time_link, {[cls.active]: timeLapse.id === currentTimeLapsNumber.id})}
                  onClick={() => {
                     onChangeTimeLaps(timeLapse.id);
                  }}
                  ref={el => timeLinks.current[index] = el}
               >
                  <span className={cls.time__link_number}>
                     {timeLapse.id}
                  </span>
                  {
                     timeLapse.id === currentTimeLapsNumber.id &&
                     <span className={cls.time__link_name}>
                        {timeLapse.nameTime}
                     </span>
                  }
               </div>
            )
         }
      </div>
   )
};

export const ChangeTimeLapse = React.memo(Component);
