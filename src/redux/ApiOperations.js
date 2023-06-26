import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://connections-api.herokuapp.com/contacts'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newContact, { rejectWithValue }) => {
    try {
      const fetchedNewContact = await axios.post(
        'https://648c0d7c8620b8bae7ec2201.mockapi.io/contacts',
        newContact
      );
      return {
        createdAt: fetchedNewContact.data.createdAt,
        id: fetchedNewContact.data.id,
        name: fetchedNewContact.data.name,
        phone: fetchedNewContact.data.phone,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (contactID, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://648c0d7c8620b8bae7ec2201.mockapi.io/contacts/${contactID}`
      );
      return contactID;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Auth

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      throw new Error('NA');
    }

    token.set(persistedToken);

    const { data } = await axios.get('/users/current');
    return data;
  }
);
