import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// switch --> Routes ของ version 6
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
  }

  console.log(loggedIn);

  const activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink
          end
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Contact
        </NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Home login={handleLogin} />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            loggedIn ? (
              <Dashboard logout={handleLogout} />
            ) : (
              <Navigate to="/" state={"From Dashboard"} />
            )
          }
        >
          <Route path="settings" element={<p> This is the Setting page</p>} />
        </Route>
        <Route path="/profile">
          <Route path=":username" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error />} />
        {/* path='*' มันคือหน้าที่ไม่มีอยู่จริง ในกรณีที่เข้าไปในหน้าหรือ path ที่ไม่มีอยู่จริง */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
