import css from './Help.module.css';

const Help = () =>
{
   return (
      <div className={ css.help }>
         <div>
            <strong>Salad maker</strong> will help you to come up with ideas for new salads.
         </div>
         <div>
            You can also randomly assign ingredients.
         </div>
      </div>
   );
}

export default Help;