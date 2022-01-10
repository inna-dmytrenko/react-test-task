const getIsLoggedIn = (state) => state.auth.isLoggedIn

const getUserName = (state) => state.auth.email

const authSelectors = {
  getIsLoggedIn,
  getUserName,
}
export default authSelectors
