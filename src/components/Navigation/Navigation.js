import { useSelector } from 'react-redux'
import { authSelectors } from '../../redux/auth'
import { Link } from 'react-router-dom'
import { Nav } from './Navigation.styled'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <Nav>
      <Link
        style={{
          paddingRight: '1rem',
        }}
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link className="display:block" to="/todos">
          ToDo
        </Link>
      )}
    </Nav>
  )
}
