import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialValue = JSON.parse(localStorage.getItem('contacts')) ?? [];


const myContacts = createSlice({
   name: 'contacts',
   initialState: initialValue,
   reducers: {
      addContacts(state, action){
         state.push({
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,
         });
      },
      deleteContacts(state, action){
         return state = action.payload
      },
   },
});




export const { addContacts, deleteContacts } = myContacts.actions;


export const store = configureStore({
   reducer: {
      contacts: myContacts.reducer
   }
})

























// export const addContacts = createAction('myVaue/addContacts');
// const deleteContacts = createAction('myVaue/deleteContacts');
// const filterShowContacts = createAction('myVaue/filterShowContacts');

// const myContacts = createReducer({
//    contacts: [],
//    filter: ""
// }, {
// [addContacts] : (state, action) => console.console.log('условно тело функции addContacts', state, action.payload),
// [deleteContacts] : (state, action) => console.console.log('условно тело функции deleteContacts'),
// [filterShowContacts] : (state, action) => console.console.log('условно тело функции filterShowContacts'),
// })
