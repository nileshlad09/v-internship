import './App.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import View from './Pages/View'
function App() {
  return (
    <div>
     <Navbar/>
     <Switch>
       <Route exact path='/' component={AdminLogin} ></Route>
       <Route exact path='/admin' component={Dashboard} ></Route>
       <Route exact path='/admin/view' component={View} ></Route>
     </Switch>
    </div>

  );
}

export default App;
