import { Link } from 'react-router-dom'
import { Nav } from './Navigation.styled'

export default function Navigation() {
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
      <Link className="display:block" to="/todos">
        ToDo
      </Link>
    </Nav>
  )
}
