import './App.css'
import { AppBar } from './components/AppBar/AppBar'
import ContainerHead from './components/Container/Container'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import HomeView from './views/HomeView'
import TodosView from './views/TodosView'
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
import NotFoundView from './views/NotFoundView'
import LogoutView from './views/LogoutView'
import { useState } from 'react'

import { useSelector } from 'react-redux'

import { authSelectors } from './redux/auth'
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true)
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <ContainerHead>
      {/* <p>hhh</p> */}
      <AppBar />

      <Routes>
        <Route path="/" element={<HomeView isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<RegisterView />} />
        <Route path="/logout" element={<LogoutView />} />
        <Route path="/todos" element={<TodosView />} />
        <Route path="/:pageName" element={<NotFoundView />} />
        {/* <p>PrivateRoute</p> */}
        {/* <Suspense fallback={<p>Loading...</p>}> */}
        {/* <PublicRoute path="/" exact component={HomeView} />
        <PublicRoute path="/singup" restricted exact component={RegisterView} /> */}
        {/* <PublicRoute
          path="/login"
          redirectTo="/todos"
          restricted
          exact
          component={LoginView}
        /> */}
        {/* <PrivateRoute path="/todos" redirectTo="login" component={TodosView} /> */}
        {/* </Suspense> */}
      </Routes>
    </ContainerHead>
  )
}

export default App
