import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './pages/user/User';
import Adduser from "./pages/user/Adduser";
import './App.css';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const Apps = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/users/:id", element: <User /> },
    { path: "/add-user", element: <Adduser /> },
    // ...
  ]);
  return routes;
};
function App() {

  
  return (
    <div>
 <h1 className="text-3xl">
    <Navbar />
    <Router>
      <Apps />
    </Router>
    
  </h1>
    </div>
  );
}

export default App;
