import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import AddUser from './pages/Add-user.jsx'
import EditUser from './pages/Edit-user.jsx'
import ViewUser from './pages/View-user.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/search/:id"
            element={<Home />}
          />
          <Route
            path="/adduser"
            element={<AddUser />}
          />
          <Route
            path="/edituser/:id"
            element={<EditUser />}
          />
          <Route
            path="/viewuser/:id"
            element={<ViewUser />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
