// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import MoreServices from './components/MoreServices/MoreServices';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home> </Route>
          <Route path="/home"><Home></Home> </Route>
          <Route path="/services"><MoreServices></MoreServices> </Route>
          <Route path="/about"> <About></About> </Route>
          <Route path="/contact"> <ContactUs></ContactUs> </Route>
          <Route path="*"><NotFound></NotFound> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
