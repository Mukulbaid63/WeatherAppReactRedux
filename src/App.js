import logo from './logo.svg';
import './App.css';

import WeatherMenu from './components/WeatherMenu';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom"
import Login from './components/Login';

function App(props) {

 return(
   <BrowserRouter>
   <Switch>
    <Route path="/weather" exact component={WeatherMenu}/>
    <Route path="/" exact component={Login}/>

   </Switch>
   </BrowserRouter>
 )
}
export default App;
