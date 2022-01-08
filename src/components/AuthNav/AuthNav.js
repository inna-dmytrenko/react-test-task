import { Link } from 'react-router-dom'

export default function AuthNav() {
  return (
    <div>
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
  )
}
