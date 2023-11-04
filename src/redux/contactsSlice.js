import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          ...contact,
          id: nanoid()
        }
      }
    },
    deleteContact(state, action) {
      return state.filter((item) => item !== action.payload);
    }
  }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;