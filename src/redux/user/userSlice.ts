import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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

interface Icredential {
  email: string;
  password: string;
}

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: Icredential) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, () => {})
      .addCase(createUser.fulfilled, () => {});
  },
});

export default userSlice.reducer;
