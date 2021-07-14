import Selector from './Selector';

const App = () =>
{
   return (
      <div className="App">
         <p>
            Salad maker will help you to come up with ideas for new salads.<br />
            You can also randomly assign ingredients.
         </p>

         <Selector title='Base' />
         <Selector title='Proteins' />
         <Selector title='Fats' />
         <Selector title='Extra' />
      </div>
   );
}

export default App;
