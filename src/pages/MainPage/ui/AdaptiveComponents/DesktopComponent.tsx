import React, {memo} from 'react';
import {TimeLapsSlider} from "features/TimeLapsSlider";
import {TitlePage} from "pages/MainPage/ui/TitlePage/TitlePage";
import {Container} from "shared/ui";
import {EventsList} from "widgets/EventsList";
import {TimeLapse} from "widgets/TimeLapse";

import cls from "../MainPage.module.scss";

export const DesktopComponent = memo(() => {
   return (
      <Container>
         <TitlePage />
         <TimeLapse />
         <div className={cls.time_laps__slider__wrapper}>
            <TimeLapsSlider />
         </div>
         <EventsList/>
      </Container>
   );
});
