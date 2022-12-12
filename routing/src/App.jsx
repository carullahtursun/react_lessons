
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

//pagess

import Users from "./components/Users";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";

let activeStyle = {
  textDecoration: "none",
  color: 'red',
  bacroundColor: 'black',
};

let activeClassName = "underline";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to="/About">About</NavLink>
            </li>
            <li>
              <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
              } to="/Users">Users</NavLink>
            </li>

          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/user/:id' element={<User />} />
        </Routes>

      </div>
    </Router>
  );
}



export default App;
