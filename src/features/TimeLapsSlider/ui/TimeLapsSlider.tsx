import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {currentTimeLapse, timeLapse, timeLapseActions} from "entities/Time";
import {classNames} from "shared/lib";
import {useAppDispatch} from "shared/lib/hooks";

import cls from "./TimeLapsSlider.module.scss";

const Component = () => {
   const [isBlockNextButton, setIsBlockNextButton] = useState<boolean>(false);
   const [isBlockBackButton, setIsBlockBackButton] = useState<boolean>(true);

   const fullTimeLaps = useSelector(timeLapse);
   const currentTimeLapsNumber = useSelector(currentTimeLapse).id;
   const dispatch = useAppDispatch();

   const onCounterTimeLaps = useCallback((id) => {
      const res = fullTimeLaps.filter(timeLaps => timeLaps.id === id)
      dispatch(timeLapseActions.setCurrentTimeLapse(res[0]))
   }, [dispatch])

   useEffect(() => {
      if (currentTimeLapsNumber === 1) {
         setIsBlockBackButton(true)
      } else {
         setIsBlockBackButton(false)
      }

      if (currentTimeLapsNumber === fullTimeLaps.length) {
         setIsBlockNextButton(true)
      } else {
         setIsBlockNextButton(false)
      }
   }, [
      currentTimeLapsNumber,
      setIsBlockNextButton,
      setIsBlockBackButton,
      isBlockBackButton,
      isBlockNextButton
   ])

   return (
      <div className={cls.timelapse__wrapper}>
         <span className={cls.timelapse__number}>0{currentTimeLapsNumber}/0{fullTimeLaps.length}</span>
         <div className={cls.timelapse__slider}>
            <button
               className={classNames(cls.slider__btn, {[cls.active]: isBlockBackButton}, [cls.back__arrow])}
               onClick={() => onCounterTimeLaps(currentTimeLapsNumber-1)}
               disabled={isBlockBackButton}
            />
            <button
               className={classNames(cls.slider__btn, {[cls.active]: isBlockNextButton}, [cls.next__arrow])}
               onClick={() => onCounterTimeLaps(currentTimeLapsNumber+1)}
               disabled={isBlockNextButton}
            />
         </div>
      </div>
   );
};

export const TimeLapsSlider = React.memo(Component);
