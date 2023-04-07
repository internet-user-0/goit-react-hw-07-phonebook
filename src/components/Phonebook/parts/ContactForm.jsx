import { useState } from 'react';
import css from './/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts,  } from 'redux/store';

function ContactForm() {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const value = useSelector(state => state.contacts)

   const dispatch = useDispatch();


   function handelMessageChange(e) {
      const { name, value } = e.currentTarget;
      switch (name) {
         case 'name':
            setName(value)
            break;
         case 'number':
            setNumber(value)
            break;
         default:
            break;
      }
   }

   function addContact (e) {
      e.preventDefault();
      const alreadyHas = value.map(contact => {
         return contact.name;
      });
      if (alreadyHas.includes(name)) {
         reset();
         alert(name + ' is already in contacts');
         return;
      }
      dispatch(addContacts({name, number}))
      reset();
   };




   function reset() {
      setName('')
      setNumber('')
   }

   return (
      <div>
         <form className={css.form__addContacts} onSubmit={ addContact}>
            <label className={css.form__label}>
               <p className={css.form__text}>Name</p>
               <input
                  className={css.form__input}
                  type="text"
                  value={name}
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={handelMessageChange}
               />
            </label>
            <label className={css.form__label}>
               <p className={css.form__text}>Number</p>
               <input
                  className={css.form__input}
                  type="tel"
                  value={number}
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={handelMessageChange}
               />
            </label>
            <br />
            <button className={css.form__btn} type="submit">
               Add contact
            </button>
         </form>
      </div>
   );
}

export default ContactForm;
