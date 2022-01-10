import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelectors } from '../../redux/auth'

export default function AuthNav() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <div>
      {isLoggedIn === false && (
        <div>
          {' '}
          <Link
            style={{
              paddingRight: '1rem',
            }}
            to="/login"
          >
            Log In
          </Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  )
}
