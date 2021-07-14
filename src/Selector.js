import css from './Selector.module.css';

const Selector = ({ title, className }) =>
{
   return (
      <div className={ `${ css.selector } ${ className }` }>
         <label>{ title }</label>

         <select>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
         </select>
      </div>
   );
}

export default Selector;