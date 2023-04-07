import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/store';

import ContactForm from './parts/ContactForm';
import ContactList from './parts/ContactList';
import Filter from './parts/Filter';


function Phonebook (){
   const [filter, setFilter] = useState('')
   const value = useSelector(state => state.contacts)

   const dispatch = useDispatch();

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(value));
   }, [value])



   function changeFilter(e) {
      setFilter(e.currentTarget.value)
   };

   function onDelete(contactId) {
      const newArray = value.filter(({id}) => id !== contactId);
      dispatch(deleteContacts(newArray))

   };

      const normalizeFilter = filter.toLowerCase();

      const visibleContacts = value.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter)
      );
      return (
         <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter value={filter} onChange={changeFilter} />
            <ContactList
               contactsAray={visibleContacts}
               onDelete={onDelete}
            />
         </div>
      );
   }


export default Phonebook;
