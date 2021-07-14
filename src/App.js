import Help from './Help';
import Selector from './Selector';

import css from './App.module.css';

const App = () =>
{
   return (
      <div className={ `${ css.app } container` }>
         <Help />

         <Selector title='Base' />
         <Selector title='Proteins' />
         <Selector title='Fats' />
         <Selector title='Extra' />
      </div>
   );
}

export default App;
