import './App.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Components/Admin/Dashboard'
import AdminLogin from './Components/Admin/AdminLogin'
function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={AdminLogin} ></Route>
       <Route exact path='/admin' component={Dashboard} ></Route>
     </Switch>
    </div>

  );
}

export default App;
