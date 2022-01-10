import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
axios.defaults.baseURL = 'https://evening-dawn-13822.herokuapp.com'
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Autorization = ''
  },
}
const signup = createAsyncThunk('auth/signup', async (credentials) => {
  try {
    const { data } = await axios.post('/api/users/signup', credentials)
    token.set(data.token)

    alert('Success register')

    return data
  } catch (error) {
    alert('Please enter a valid email address')
  }
})
const logIn = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const { data } = await axios.post('/api/users/login', credentials)
    token.set(data.data.token)

    return data.data
  } catch (error) {}
})

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.get('/api/users/logout')
    console.log(token)
    token.unset()
    return data
  } catch (error) {}
})

const operation = {
  signup,
  logOut,
  logIn,
}

export default operation
