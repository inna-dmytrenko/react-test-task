// import {
//   createTheme,
//   withStyles,
//   makeStyles,
//   ThemeProvider,
// } from '@material-ui/core/styles'
// import ExitToAppIcon from '@material-ui/icons/ExitToApp'

// import Button from '@material-ui/core/Button'
// import { green, purple } from '@material-ui/core/colors'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authOperations, authSelectors } from '../../redux/auth'

export default function UserMemu() {
  const dispatch = useDispatch()
  const user_name = useSelector(authSelectors.getUserName)
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <div>
      <span>Hello {user_name}!</span>
      {isLoggedIn && (
        <div>
          <Link to="/logout" onClick={() => dispatch(authOperations.logOut())}>
            Log Out
          </Link>
        </div>
      )}

      {/* <ThemeProvider */}
      {/* // theme={theme}
      > */}
      {/* <Button
          variant="contained"
          color="primary"
          // className={classes.margin}
          type="button"
          onClick={() => console.log('dispatch(authOperations.logOut())')}
        > */}
      {/* <ExitToAppIcon /> */}
      {/* </Button> */}
      {/* </ThemeProvider> */}
    </div>
  )
}
