
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
         
        </ul>
      </nav>

      <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/Users' element={<Users/>}/>
            <Route  path='/About' element={<About/>}/>
      </Routes>
          
    </div>
  </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
