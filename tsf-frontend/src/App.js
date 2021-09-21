import './App.css';
import PortfolioState from "./Context/PortfolioState";
import Portfolio from "./Components/Portfolio/Portfolio";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Portfolio/Home';
function App() {


  return (
    <PortfolioState>
      <div className="background-img">
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TSF BANK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view">VIEW CUSTOMERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </div>
          
        <Switch>
          <Route exact path="/view">
            <Portfolio />
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </PortfolioState>
  );
}

export default App;
