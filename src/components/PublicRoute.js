import { Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { authSelectors } from '../redux/auth'

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const shouldRedirect = isLoggedIn && restricted
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Navigate to={redirectTo} /> : children}
    </Route>
  )
}
