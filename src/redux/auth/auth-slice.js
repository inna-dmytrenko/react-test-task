import { createSlice } from '@reduxjs/toolkit'
import authOperations from './auth-operations'

const initialState = {
  email: null,
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.fulfilled]: (state, { payload }) => ({
      ...state,
      email: payload.email,
      token: payload.token,
      isLoggedIn: true,
    }),
    [authOperations.logIn.fulfilled]: (state, { payload }) => ({
      ...state,
      email: payload.email,
      token: payload.token,
      isLoggedIn: true,
    }),
    [authOperations.logOut.fulfilled]: (state, _) => ({
      ...state,
      email: null,
      token: null,
      isLoggedIn: false,
    }),
  },
})

export default authSlice.reducer
