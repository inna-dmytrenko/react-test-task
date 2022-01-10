import LogoutView from './LogoutView'
import TodosView from './TodosView'

export default function HomeView({ isLoggedIn }) {
  return <div> {isLoggedIn ? <TodosView /> : <LogoutView />}</div>
}
