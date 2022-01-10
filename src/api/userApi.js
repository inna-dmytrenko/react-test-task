import axios from 'axios'

axios.defaults.baseURL = 'https://evening-dawn-13822.herokuapp.com/'

export async function signUp() {
  const data = await axios.post('/api/user/signup')
  return data
}
