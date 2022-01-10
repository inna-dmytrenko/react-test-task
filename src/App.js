import './App.css'
import { AppBar } from './components/AppBar/AppBar'
import ContainerHead from './components/Container/Container'
import { Route, Routes } from 'react-router-dom'
// import { Suspense } from 'react'
import PrivateRoute from './components/PrivateRoute'

import HomeView from './views/HomeView'
import TodosView from './views/TodosView'
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
import NotFoundView from './views/NotFoundView'
import LogoutView from './views/LogoutView'

import { useSelector } from 'react-redux'

import { authSelectors } from './redux/auth'
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true)
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <ContainerHead>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<RegisterView />} />
        <Route path="/logout" element={<LogoutView />} />
        <Route
          path="/todos"
          element={
            <PrivateRoute>
              <TodosView isLoggedIn={isLoggedIn} />
            </PrivateRoute>
          }
        />
        <Route path="/:pageName" element={<NotFoundView />} />
      </Routes>
    </ContainerHead>
  )
}

export default App
