import React from 'react';

import cls from "./TitlePage.module.scss";

const Component = () => {
   return (
      <div className={cls.title_page}>
         <div className={cls.mark}/>
         <span>
            Исторические даты
         </span>
      </div>
   );
};

export const TitlePage = React.memo(Component);
