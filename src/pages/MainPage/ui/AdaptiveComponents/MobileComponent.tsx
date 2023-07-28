import React, {memo} from 'react';
import {TitlePage} from "pages/MainPage/ui/TitlePage/TitlePage";
import {Container} from "shared/ui";
import {EventsList} from "widgets/EventsList";
import {TimeLapse} from "widgets/TimeLapse";


export const MobileComponent = memo(() => {
   return (
      <Container>
         <TitlePage />
         <TimeLapse />
         <EventsList/>
      </Container>
   );
});
