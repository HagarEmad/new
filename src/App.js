import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom"; // Import useLocation
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/registration/register";
import ArabicNavbar from "./components/Navbar/Navbar";
import Home from "./pages/home_page/home";
import "./App.css"; // Or './styles.css'

const AppWithNavbar = () => {
  const location = useLocation(); // useLocation can now be used here safely

  return (
    <>
      {/* Conditionally render the ArabicNavbar */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <ArabicNavbar />
      )}

      <Switch>
        <Route path="/" exact component={Home} /> {/* use exact */}
        <Route path="/login" exact component={LoginPage} /> {/* use exact */}
        <Route path="/register" exact component={RegisterPage} /> {/* use exact */}
      </Switch>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
}

export default App;
