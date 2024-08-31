import { createSlice } from '@reduxjs/toolkit';
import { defaultMethod } from 'react-router-dom/dist/dom';

interface IuserState {
  user: {
    email: string | null;
  };

  isLoading: boolean;
  isError: boolean;
  error: null;
}

const initialState: IuserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
