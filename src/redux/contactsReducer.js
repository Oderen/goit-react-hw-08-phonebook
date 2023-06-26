import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './ApiOperations';

// Варіант 1

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], error: null, isLoading: false },
  extraReducers: builder => {
    builder
      // FetchContacts
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          items: [...state.items, ...action.payload],
        };
      })
      .addCase(fetchContacts.rejected, state => {
        return {
          ...state,
          error: true,
        };
      })
      // AddContact
      .addCase(addContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          items: [...state.items, action.payload],
        };
      })
      .addCase(addContact.rejected, state => {
        return {
          ...state,
          error: true,
        };
      })
      // DeleteContact
      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          items: state.items.filter(contact => contact.id !== action.payload),
        };
      })
      .addCase(deleteContact.rejected, state => {
        return {
          ...state,
          error: true,
        };
      })
      .addDefaultCase(state => {
        return state;
      });
  },
});

export const { add, remove } = contactsSlice.actions;

// Варіант 2 -- Slice

//  const fetchContactsRequest = createAction(
//   'contacts/fetchContactsRequest'
// );
//  const fetchContactsSuccess = createAction(
//   'contacts/fetchContactsSuccess'
// );
//  const fetchContactsError = createAction('contacts/fetchContactsError');

// const success = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const error = createReducer(null, {
//   [fetchContacts.pending]: () => null,
//   [fetchContacts.rejected]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => true,
// });

// export const combined = combineReducers({
//   success,
//   error,
//   isLoading,
// });

// Закидування combined в store/contacts
