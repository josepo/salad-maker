import Help from './Help';
import Selector from './Selector';

import css from './App.module.css';

const App = () =>
{
   return (
      <div className={ `${ css.app } container` }>
         <Help />

         <div className='row'>
            <Selector className='col-xs-12 col-lg-3' title='Base' />
            <Selector className='col-xs-12 col-lg-3' title='Proteins' />
            <Selector className='col-xs-12 col-lg-3' title='Fats' />
            <Selector className='col-xs-12 col-lg-3' title='Extra' />
         </div>
      </div>
   );
}

export default App;
