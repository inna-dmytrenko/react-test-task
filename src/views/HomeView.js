import LoginView from './LoginView'

import TodosView from './TodosView'

export default function HomeView({ isLoggedIn }) {
  return <div> {isLoggedIn ? <TodosView /> : <LoginView />}</div>
}
