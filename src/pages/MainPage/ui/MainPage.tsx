import React from 'react';
import {useResize} from "shared/lib/hooks/useResize/useResize";

import cls from './MainPage.module.scss';

import {DesktopComponent} from "./AdaptiveComponents/DesktopComponent";
import {MobileComponent} from "./AdaptiveComponents/MobileComponent";

const MainPage = () => {
   const widthScreen = useResize().width;

   return (
      <div className={cls.main_page__wrapper}>
         {
            widthScreen < 500
               ? <MobileComponent />
               : <DesktopComponent />
         }
      </div>
   );
};

export default MainPage;
