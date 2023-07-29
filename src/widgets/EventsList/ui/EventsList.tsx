import React from 'react';
import {useSelector} from "react-redux";
import {currentTimeLapse} from "entities/Time";
import {useResize} from "shared/lib/hooks/useResize/useResize";

import 'swiper/scss';

import {DesktopComponent} from "./AdaptiveComponents/DesktopComponent";
import {MobileComponent} from "./AdaptiveComponents/MobileComponent";

const Component = () => {
   const events = useSelector(currentTimeLapse);

   const navigationPrevRef = React.useRef(null)
   const navigationNextRef = React.useRef(null)
   const widthScreen = useResize().width;

   return (
      <>
         {
            widthScreen < 600 ?
               <MobileComponent
                  events={events}
               /> :
               <DesktopComponent
                  navPrevRef={navigationPrevRef}
                  navNextRef={navigationNextRef}
                  events={events}
               />
         }
      </>
   );
};

export const EventsList = React.memo(Component);
