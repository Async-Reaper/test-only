import React, {Suspense} from 'react';
import {AppRouter} from 'app/providers/Router';

function App() {

   return (
      <div className="app">
         <Suspense fallback={<h1>Loading</h1>}>
            <AppRouter/>
         </Suspense>
      </div>
   );
}

export default App;
