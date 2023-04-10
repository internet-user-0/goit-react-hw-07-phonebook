import { useState } from 'react';

import ContactForm from './parts/ContactForm';
import ContactList from './parts/ContactList';
import Filter from './parts/Filter';
import { useFetchContactsQuery } from 'redux/dataContacts';

const Phonebook = () => {
   const [filter, setFilter] = useState('');

   const { data } = useFetchContactsQuery();

   function changeFilter(e) {
      setFilter(e.currentTarget.value);
   }
   const normalizeFilter = filter.toLowerCase();

   const visibleContacts =
      data &&
      data.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter)
      );
   return (
      <div>
         <h1>Phonebook</h1>
         <ContactForm />
         <h2>Contacts</h2>
         <Filter value={filter} onChange={changeFilter} />
         <ContactList contactsAray={visibleContacts} />
      </div>
   );
};

export default Phonebook;
