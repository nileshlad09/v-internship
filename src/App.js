import './App.css';
import {Switch,Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Dashboard from './Pages/Dashboard'
import AdminLogin from './Components/Adminlogin/AdminLogin'
import View from './Pages/View'
import DataEnter from './Components/DataEnter/DataEnter'
import AddInternship from './Components/DataEnter/AddInternship';
function App() {
  return (
    <div>
      Nilesh
     <Navbar/>
     <Switch>
       <Route exact path='/' component={AdminLogin} ></Route>
       <Route exact path='/admin' component={Dashboard} ></Route>
       <Route exact path='/admin/view' component={View} ></Route>
       <Route exact path='/DataEnter' component={DataEnter} ></Route>
       <Route exact path='/AddInternship' component={AddInternship} ></Route>
     </Switch>
    </div>

  );
}

export default App;
