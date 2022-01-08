import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import { Header } from './AppBar.styled'

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Header>
  )
}
