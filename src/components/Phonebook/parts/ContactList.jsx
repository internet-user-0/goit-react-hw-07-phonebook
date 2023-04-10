import React from 'react';
import css from './/ContactList.module.css';
import { useDeleteContactMutation } from 'redux/dataContacts';

const ContactList = ({ contactsAray }) => {
      const [deleteContact] = useDeleteContactMutation();
   return (
      <ul>
      {contactsAray && contactsAray.map(({ id, name, phone }) => {
         return (
            <li className={css.list__item} key={id}>
               {name}: {phone}{' '}
               <button
                  className={css.list__btnDelete}
                  type="submit"
                  onClick={(e) => {
                     e.preventDefault()
                     deleteContact(id);
                  }}
               >
                  delete
               </button>
            </li>
         );
      })}
   </ul>
   )
};

export default ContactList;
